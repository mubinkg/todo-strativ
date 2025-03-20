'use client'

import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

const AddQuestion = () => {
    const [question, setQuestion] = useState('')
    return (
        <div className='flex flex-col gap-2 mt-4'>
            <div>
                <Label className='mb-1'>Add Question</Label>
                <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <Button className='cursor-pointer'>Submit</Button>
        </div>
    )
}

export default AddQuestion