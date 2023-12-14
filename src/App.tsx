import { useState } from 'react';
import './App.css';
import ImageHeader from './components/ImageHeader';
import Input from './components/Input';
import Button from './components/Button';
import { MdDelete } from 'react-icons/md';

interface Item {
  id: string;
  title: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = { id: Date.now().toString(), title: inputValue };

    setItems((prev) => [...prev, newItem]);
    setInputValue('');
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
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
        {items.map((item) => (
          <div
            key={item.id}
            className='flex justify-between items-center border-b border-slate-600 mb-2 py-2'
          >
            <p className='text-lg'>{item.title}</p>

            <Button
              classname=' text-red-500 text-5xl'
              onClick={() => handleDelete(item.id)}
            >
              <MdDelete />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
