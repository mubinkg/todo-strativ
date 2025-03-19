'use server'

import { getUser } from '@/data';
import * as jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';

export async function login({ userName, password }: { userName: string, password: string }) {
    const user = await getUser({ userName, password })
    if (!user) return ({
        success: false,
        message: 'Unauthorized!'
    })
    var token = jwt.sign({ ...user }, "privateKey");
    const cookieStore = await cookies()
    cookieStore.set('token', token)
}