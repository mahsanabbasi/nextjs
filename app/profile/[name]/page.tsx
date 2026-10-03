type ProfilePageProps = {
  params: Promise<{name: string}>
}

const ProfilePage = async ({params}: ProfilePageProps) => {

  const users = [
    {
      id: 1,
      name: "Ahsan",
      bio: "Full Stack Software engineer"
    },
    {
      id: 2,
      name: "Ahmed",
      bio: "Full Stack Web engineer"
    },
    {
      id: 3,
      name: "Abrar",
      bio: "Full Stack Graphic engineer"
    }
  ]
  const pageParams = await params;
  const username = pageParams.name;
  const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase())

  if(!user){
    return(
      <>
      <h1>User with name {username} not found</h1>
      </>
    )
  }


  return (
    <div>
      <h1>{user?.name}'s Profile Page</h1>
      <h1>Id : {user?.id}</h1>
      <h1>Bio: {user?.bio}</h1>
    </div>
  )
}

export default ProfilePage