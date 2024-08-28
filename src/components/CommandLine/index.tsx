'use client';
import React, { useState } from 'react';

export const CommandLine: React.FC = () => {
  const [command, setCommand] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  return (
    <div className="text-light-gray text-lg bg-black flex items-center">
      <span>{'C:\\>'}</span>
      <input
        type="text"
        value={command}
        onChange={handleChange}
        className="bg-black text-light-gray border-none outline-none w-full"
      />
    </div>
  );
};
