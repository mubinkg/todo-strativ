'use client'

import { Answer, updateAnswerData } from '@/data'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const UpdateAnswer = ({ answer, questionId }: { answer: Answer, questionId: number }) => {
    const [updatedAns, setUpdatedAns] = useState('')
    useEffect(() => {
        setUpdatedAns(answer.answer)
    }, [answer])
    return (
        <div className='flex gap-2'>
            <Input value={updatedAns} onChange={(e) => setUpdatedAns(e.target.value)} />
            <Button onClick={async () => {
                await updateAnswerData({
                    questionId: questionId,
                    answerId: answer.id,
                    updatedAnswer: updatedAns
                })
            }} className='cursor-pointer'>Update</Button>
        </div>
    )
}

export default UpdateAnswer