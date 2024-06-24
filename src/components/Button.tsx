interface Props{
    children: string;
    color?: 'primary'| 'secondary' | 'danger' | 'success';
    onClick: () => void;
}
const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button color = {color} className='btn btn-primary' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
