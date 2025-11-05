import { useState } from 'react'
import { useAuth } from '@/hook/useAuth'

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const { signIn, isLoading, error, resetError } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()
        const result = await signIn(credentials)
        if (result.success) {
            // Redirect or show success message
            console.log('Login successful!')
        }
    }

    const handleInputChange = e => {
        resetError() // Clear errors when user starts typing
        setCredentials(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className='error-message'>{error}</div>}
            <input
                name='email'
                type='email'
                value={credentials.email}
                onChange={handleInputChange}
                placeholder='Email'
                required
            />
            <input
                name='password'
                type='password'
                value={credentials.password}
                onChange={handleInputChange}
                placeholder='Password'
                required
            />
            <button type='submit' disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    )
}
