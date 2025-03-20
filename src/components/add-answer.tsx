'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { addAnswer } from '@/data';
import { useRouter } from 'next/navigation';
import { Label } from './ui/label';

const AddAnswer = ({ questionId }: { questionId: number }) => {
  const [ans, setAns] = useState('');
  const router = useRouter();
  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        await addAnswer({ questionId: questionId, ans });
        setAns('');
        router.refresh();
      }}
      className="flex flex-col gap-2"
    >
      <Label>Answer</Label>
      <Input value={ans} onChange={e => setAns(e.target.value)} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddAnswer;
