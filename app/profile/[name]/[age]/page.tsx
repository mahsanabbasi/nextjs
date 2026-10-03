type ProfilePageAgeProps = {
  params: Promise<{name: string, age: string}>
}

const ProfilePage = async ({params} : ProfilePageAgeProps) => {
  const pageParams = await params;

  const username = pageParams.name;
   const age = pageParams.age;

    const users = [
    {
      age: 1,
      name: "Ahsan",
      bio: "Full Stack Software engineer"
    },
    {
      age: 2,
      name: "Ahmed",
      bio: "Full Stack Web engineer"
    },
    {
      age: 3,
      name: "Abrar",
      bio: "Full Stack Graphic engineer"
    }
  ]

  const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase() && user.age.toString() === age)
   if(!user){
    return(
      <>
      <h1>User with name {username} and {age} not found</h1>
      </>
    )
  }


  return (
    <div>
      <h1>{user?.name}'s Profile Page</h1>
      <h1>Age : {user?.age}</h1>
      <h1>Bio: {user?.bio}</h1>
    </div>
  )
}

export default ProfilePage