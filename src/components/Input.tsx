type Input = {
  inputValue: string;
  setInputValue : React.Dispatch<React.SetStateAction<string>>
};

const Input = ({ inputValue, setInputValue }:Input) => {
  return (
    <>
      <input
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='w-full p-2 rounded-sm mb-2'
        type='text'
        placeholder='Enter a task...'
      />
    </>
  );
};

export default Input;
