import { Item, ReactState } from '../types/utils';
import Button from './Button';
import { MdDelete } from 'react-icons/md';

type itemList = {
  items: Item[];
  setItems: ReactState<Item[]>
};

const ItemList = ({ items, setItems }: itemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return items.map((item) => (
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
  ));
};

export default ItemList;
