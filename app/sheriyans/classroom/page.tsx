import FilterUsers from "@/components/FilterUsers";


const page = async()  => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <>
    <div>Classroom </div>
    <FilterUsers users= {users}/>

    </>
  )
}

export default page