import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
})

export const getUserProfileAPI = async () => {
    console.log('axios api')
    // return getData('/v1/me');
    const { data: users } = await api.get('/v1/me')
    return users
}

export function useGetUserProfileAPIQuery() {
    console.log('query api')
    return useQuery(["tokenKey"], getUserProfileAPI);
}