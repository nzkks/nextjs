'use client';

import { useState } from 'react';

export default function TextInput() {
  const [input, setInput] = useState('');

  return <input type="text" value={input} onChange={e => setInput(e.target.value)} style={{ color: '#000' }} />;
}
