'use client';
import React, { useState } from 'react';

export const CommandLine: React.FC = () => {
  const [command, setCommand] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  return (
    <div className="text-light-gray text-lg bg-black">
      <div className="flex items-center">
        <span className="mr-2">{'C:\\>'}</span>
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          className="bg-black text-light-gray border-none outline-none w-full"
        />
      </div>
    </div>
  );
};
