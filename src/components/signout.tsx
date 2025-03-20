'use client';

import React from 'react';
import { Button } from './ui/button';
import { signOut } from '@/actions/auth';

const Signout = () => {
  return (
    <Button className="cursor-pointer" onClick={async () => await signOut()}>
      Signout
    </Button>
  );
};

export default Signout;
