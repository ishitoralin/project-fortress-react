const domain = process.env.NEXT_PUBLIC_BACKEND_PORT;
export const jwtTokenUrl = `${domain}/api/auth/jwt-token`; //拿新的jwt token
export const loginUrl = `${domain}/api/auth/login`; //登入
export const logoutUrl = `${domain}/api/auth/logout`; //註冊
