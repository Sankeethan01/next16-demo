const UserDetails = async ({ params } : { params : Promise<{ id : string }>}) => {
    const { id } = await params;

  return (
    <div>
      hey There I am User #{id}
    </div>
  )
}

export default UserDetails
