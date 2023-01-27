import { useState } from "react"

interface CounterProps {
    start: number
}

export default function Counter({start}: CounterProps) {
    const [count, setCount] = useState(start)
    const increment = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        setCount(count + 1)
    }

    const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        setCount(start)
    }

    return (
        <div className="py-2">
            <div className="flex items-center">
                <p className="w-16">{count}</p>
                <button className="bg-blue-200 hover:bg-blue-300 duration-150 px-4 py-2 rounded shadow mr-2" onClick={increment}>+</button>
                <button className="bg-gray-200 hover:bg-gray-300 duration-150 px-4 py-2 rounded shadow " onClick={reset}>Reset</button>
            </div>
        </div>
    )
}