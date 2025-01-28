

const Button = ({handleClick}) => {
  return (
    <div>
        <button className="bg-red-700 p-2 rounded-md" onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Button