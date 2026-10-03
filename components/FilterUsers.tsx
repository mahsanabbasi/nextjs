"use client"
type User = {
  name: string;
  id: number;
}
import { useState } from "react";

const FilterUsers = ({users} : {users:User[]}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter(User => {
    return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  }) 
  return (
    <div>
      <input className="border m-2"  type= "text" placeholder = "Enter name to search" value= {searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ></input>

      <ul>
      {filteredUsers.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default FilterUsers