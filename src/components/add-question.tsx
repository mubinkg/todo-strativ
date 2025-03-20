'use client'

import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { addQuestion } from '@/data'
import { useRouter } from 'next/navigation'

const AddQuestion = () => {
    const [question, setQuestion] = useState('')
    const router = useRouter()
    return (
        <form className='flex flex-col gap-2 mt-4'>
            <div>
                <Label className='mb-1'>Add Question</Label>
                <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <Button type='submit' className='cursor-pointer' onClick={async () => {
                await addQuestion({ question: question })
                setQuestion('')
                router.refresh()
            }}>Submit</Button>
        </form>
    )
}

export default AddQuestion