import { createContext, useContext, useState, useEffect } from 'react'
import mockAPI from '@/mock/authApi'
const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [authStatus, setAuthStatus] = useState('loading')
    const [authError, setAuthError] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem('userToken')
        if (savedToken) {
            validateSession(savedToken)
        } else {
            setAuthStatus('unauthenticated')
        }
    }, [])

    const validateSession = async token => {
        try {
            // TODO: Validate token with backend api
            // but not now
            // current check
        } catch (error) {
            localStorage.removeItem('userToken')
            setAuthStatus('unauthenticated')
        }
    }
}
