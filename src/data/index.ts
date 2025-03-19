'use server'

const users = [
    {
        userName: "admin",
        password: 'admin',
        role: "admin"
    },
    {
        userName: "user",
        password: "user",
        role: "user"
    }
]

export async function getUser({ userName, password }: { userName: string, password: string }) {
    return users.find(user => (user.userName === userName && user.password === password))
}