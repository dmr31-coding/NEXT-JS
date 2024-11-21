
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersPage() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const users = await response.json()
    console.log(users)

    return (
        //no css hai only data fetch gareko
        <div>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>

                
            ))}
        </div>
    )
}