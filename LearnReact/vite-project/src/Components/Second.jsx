import { useState } from "react"
import Button from "./Button"

const Second = () => {
    const [ var1, var2 ]= useState('kuch bhi')

    const [ buttonVisibility, setButtonVisibility ] = useState(true)

    console.log(var1)

    setTimeout(() => {
        var2('value changed')
    }, 2000)

    const handleClick = () => {
        setButtonVisibility(!buttonVisibility)
    }

    const h1 = document.createElement('hgvhjv').innerHTML
    
  return (
    <div className="w-full h-[50vh] bg-yellow-700">
        <h1>Kuch </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          odit, accusantium est delectus fugiat maiores officiis non, in
          nesciunt voluptatem esse eaque beatae necessitatibus! Praesentium,
          voluptate? Repudiandae commodi est dignissimos!

        </p>

        <h1 className="text-[4vw] w-full text-center">{var1}</h1>

        {buttonVisibility ? <Button handleClick={handleClick}/> : <div onClick={handleClick}>Button is hidden</div>}

        {buttonVisibility && <Button handleClick/>}
      </div>
  )
}

export default Second