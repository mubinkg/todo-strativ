'use server'

import { getUser, UserType } from '@/data';
import * as jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login({ userName, password }: { userName: string, password: string }) {
    const user = await getUser({ userName, password })
    if (!user) return ({
        success: false,
        message: 'Unauthorized!'
    })
    var token = jwt.sign({ userName: user.userName, role: user.role }, "privateKey");
    const cookieStore = await cookies()
    cookieStore.set('token', token)
    redirect('/dashboard')
}

export async function signOut() {
    const cookieStore = await cookies()
    cookieStore.delete('token')
    redirect('/login')
}

export async function getUserDetails() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    const data: any = jwt.verify(token ? token : "", 'privateKey')
    const user: UserType = { userName: data?.userName, role: data?.role }
    return user
}