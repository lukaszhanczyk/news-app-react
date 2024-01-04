import {createContext, useContext, useState} from 'react'

const AuthStateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('AUTH_TOKEN'))

    const setToken = (newToken) => {
        _setToken(newToken)
        if (newToken) {
            localStorage.setItem('AUTH_TOKEN', newToken)
        } else {
            localStorage.removeItem('AUTH_TOKEN')
        }
    }

    return (
        <AuthStateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthContextProvider = () => useContext(AuthStateContext)
