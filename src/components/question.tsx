import { QuestionType, UserType } from '@/data'
import React from 'react'
import { Card, CardContent } from './ui/card'
import AddAnswer from './add-answer'
import QuestionAction from './question-action'
import UpdateQuestion from './update-question'
import UpdateAnswer from './update-ans'

const Question = ({ question, user }: { question: QuestionType, user: UserType }) => {
    return (
        <Card className='p-4'>
            <CardContent className='p-0'>
                <div>
                    {user.role === 'admin' ? <UpdateQuestion question={question} /> : <p className='py-2'>Question : {question.question}</p>}
                </div>
                {
                    user.role === 'user' && (
                        <AddAnswer questionId={question.id as number} />
                    )
                }
                <div className='py-4'>
                    <h1 className='my-1'>Answer List</h1>
                    <div className='flex flex-col gap-2'>
                        {
                            question.answers?.map(d => user.role === 'admin' ? <h1 key={d.id}>{d.answer}</h1> : <UpdateAnswer questionId={question.id as number} answer={d} key={d.id} />)
                        }
                    </div>
                </div>
                <QuestionAction questionId={question.id as number} />
            </CardContent>
        </Card>
    )
}

export default Question