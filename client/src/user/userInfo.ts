import { decryptToken, encryptToken } from "../security/encrypt"

export type userInfoType = {
    id?: string,
    token: string,
    user_type?: string
}
export const userInfo = (): userInfoType => {
    const { id, token: Token, user_type } = localStorage
    const token = decryptToken(Token)
    return { id, token, user_type }
}