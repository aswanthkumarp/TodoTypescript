import { useState } from 'react';
import './App.css';
import ImageHeader from './components/ImageHeader';
import Input from './components/Input';
import Button from './components/Button';

import { type Item } from './types/utils';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = { id: Date.now().toString(), title: inputValue };

    setItems((prev) => [...prev, newItem]);
    setInputValue('');
  };

  return (
    <div className='h-screen flex flex-col items-center'>
      <ImageHeader />
      <div className='w-full max-w-screen-lg mx-auto'>
        <form onSubmit={handleSubmit} className='mb-5'>
          <Input inputValue={inputValue} setInputValue={setInputValue} />

          <Button classname='bg-[#434C5E] w-1/2 p-4 rounded-md'>
            Add Task
          </Button>
        </form>
      </div>
      <div className='w-full max-w-screen-lg mx-auto overflow-y-auto p-6 border border-gray-300'>
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
