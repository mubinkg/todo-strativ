'use client'

import React from 'react'
import { Button } from './ui/button'
import { deleteQuestion } from '@/data'
import { useRouter } from 'next/navigation'

const QuestionAction = ({ questionId }: { questionId: number }) => {
    const router = useRouter()
    return (
        <div className='flex justify-end gap-2'>
            <Button onClick={async () => {
                await deleteQuestion(questionId)
                router.refresh()
            }} variant="destructive" className='cursor-pointer'>Delete</Button>
        </div>

    )
}

export default QuestionAction