import Link from "next/link";

const UserDetails = async ({ params } : { params : Promise<{ id : string }>}) => {
    const { id } = await params;

  return (
    <div>
      <p>hey There I am User #{id}</p>
      <button><Link href={`/dashboard/users`}>Go Back</Link></button>
    </div>
  )
}

export default UserDetails
