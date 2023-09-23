import { useGetUserProfileAPIQuery } from "@/api/getProfile";
import { createQueryProviderWrapper } from "@/test/create-query-provider-wrapper";
import { renderHook, waitFor } from "@testing-library/react";

describe("useGetUserProfileAPIQuery", () => {
    test("should return the correct data", async () => {
        const { result } = renderHook(() => useGetUserProfileAPIQuery(), {
            wrapper: createQueryProviderWrapper(),
        });

        await waitFor(() => result.current.isSuccess);

        const user = result.current.data;
        console.log('user', user)
        console.log(result.current.isSuccess);
        expect(user?.nickname).toBe("user-login-1");
    });
});
