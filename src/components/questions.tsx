import { QuestionType } from '@/data'
import React from 'react'

const Questions = ({ question }: { question: QuestionType }) => {
    return (
        <div>
            <h1>{question.question}</h1>
        </div>
    )
}

export default Questions