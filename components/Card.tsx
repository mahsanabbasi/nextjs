type CardProps = {
  name: string;
  description: string;
}

export default function Card({name, description} : CardProps){
  return(
    <div className=" card rounded w-fit p-4 bg-amber-800 m-2">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}