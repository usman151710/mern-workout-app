import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setValue = (set) => (value) => set(value);

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setValue(setEmail)(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setValue(setPassword)(e.target.value)}
                value={password}
            />

            <button>Sign up</button>
        </form>
    )
}

export default Signup