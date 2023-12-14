const ImageHeader = () => {
  return (
    <div className="flex items-center mb-8">
      <img
        className='w-28 h-28 object-contain'
        src='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg'
        alt=''
      />
      <span className="mx-4">+</span>
      <img
        className='w-28 h-28 object-contain'
        src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        alt=''
      />
    </div>
  );
};

export default ImageHeader;
