'use client'

import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { QuestionType } from '@/data'
import { updateQuestionData } from '../data'
import { useRouter } from 'next/navigation'

const UpdateQuestion = ({ question }: { question: QuestionType }) => {
    const [updatedQuestion, setUpdatedQuestion] = useState('')
    useEffect(() => {
        setUpdatedQuestion(question.question)
    }, [question])

    const router = useRouter()
    return (
        <div className='flex gap-2'>
            <Input value={updatedQuestion} onChange={(e) => setUpdatedQuestion(e.target.value)} />
            <Button onClick={async (e) => {
                e.preventDefault()
                await updateQuestionData(question.id as number, updatedQuestion)
                setUpdatedQuestion('')
                router.refresh()
            }}>Update</Button>
        </div>
    )
}

export default UpdateQuestion