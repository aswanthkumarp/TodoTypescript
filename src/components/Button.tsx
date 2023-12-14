type Button ={
    children : JSX.Element | string
    classname : string
    onClick ? : ()=> void
}
const Button = ({children,classname,onClick}:Button) => {
  return (
    <button className={` ${classname}`} type='submit' onClick={onClick}>
     {children}
    </button>
  );
};

export default Button;
