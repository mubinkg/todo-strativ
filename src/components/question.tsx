import { QuestionType, UserType } from '@/data'
import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import AddAnswer from './add-answer'

const Question = ({ question, user }: { question: QuestionType, user: UserType }) => {
    return (
        <Card className='p-4'>
            <CardTitle>{question.question}</CardTitle>
            <CardContent className='p-0'>
                {
                    user.role === 'user' && (
                        <AddAnswer questionId={question.id as number} />
                    )
                }
                <div className='py-4'>
                    <h1 className='my-1'>Answer List</h1>
                    <div>
                        {
                            question.answers?.map(d => <h1 key={d.id}>{d.answer}</h1>)
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Question