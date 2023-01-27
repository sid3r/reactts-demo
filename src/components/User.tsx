import { useState } from "react"
import { User } from '../types'

export default function UserComonent(){
    const [user, setUser] = useState<User | null>(null)
    const createUser = () => {
        setUser({
            name: "John Doe",
            email: "john@doe.com",
            age: 32,
            address: {
                street: "Street 02",
                city: "London",
                zip: 12345
            },
            admin: false
        })
    }
    const resetUser = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={createUser} className="bg-blue-200 hover:bg-blue-300 rounded shadow duration-150 px-4 py-2 mr-2">Set user</button>
            <button onClick={resetUser} className="bg-gray-200 hover:bg-gray-300 rounded shadow duration-150 px-4 py-2">Reset user</button>
            {user? <p className="mt-2">{`Welcome ${user.name} ${user.email}`}</p> : <p className="mt-2">No user.</p>}
        </div>
    )
}