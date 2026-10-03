"use client"

const Button = () => {
  return (
    <div>
      <button onClick={()=>{
      alert("Button Clicked")
    }} className="border-2 m-2">Click me</button>
    </div>
  )
}

export default Button