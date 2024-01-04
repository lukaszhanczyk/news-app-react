import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";
import {useRef, useState} from "react";
import axiosClient from "../clients/axios-client.jsx";

function Login() {

    const {setToken, setUser} = useAuthContextProvider()
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState()

    const onSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        // console.log(newUser)
        axiosClient.post('/login', newUser)
            .then((response)=> {
                const data = response.data
                setUser(data.user)
                setToken(data.token)
            })
            .catch((err) => {
                const error = err.response.data.message
                setError(error)
            })
    }
    return (
        <div className={'login-signup-form animated fadeInDown'}>
            <div className={'auth-card card'}>
                <h1 className={"text-center title"}>
                    Welcome!
                </h1>

                {
                    error &&
                    <div className={'animated fadeInDown alert'}>
                        <p>{error}</p>
                    </div>
                }

                <form onSubmit={ev => onSubmit(ev)}>
                    <input ref={emailRef} placeholder={'Email'} type="text"/>
                    <input ref={passwordRef} placeholder={'Password'} type="text"/>
                    <button type={'submit'} className={'btn btn-block'}>Log in</button>
                </form>


            </div>
        </div>
    )
}

export default Login
