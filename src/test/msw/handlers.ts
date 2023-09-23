import { rest } from 'msw'

export const handlers = [
    rest.get('*/v1/me', (req, res, ctx) => {
        console.log('API was called') // 添加這個來檢查

        return res(
            ctx.status(200),
            ctx.json({
                nickname: 'user-login-1',
                id: 1,
            })
        )
    }),
]
