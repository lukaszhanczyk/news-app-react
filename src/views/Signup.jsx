import {useRef, useState} from "react";
import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";
import axiosClient from "../clients/axios-client.jsx";

function Signup() {

    const {setToken, setUser} = useAuthContextProvider()
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [error, setError] = useState()

    const onSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        // console.log(newUser)
        axiosClient.post('/signup', newUser)
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
                    Create new account
                </h1>

                {
                    error &&
                    <div className={'animated fadeInDown alert'}>
                        <p>{error}</p>
                    </div>
                }

                <form onSubmit={ev => onSubmit(ev)}>
                    <input ref={nameRef} placeholder={'Full name'} type="text"/>
                    <input ref={emailRef} placeholder={'Email'} type="text"/>
                    <input ref={passwordRef} placeholder={'Password'} type="text"/>
                    <input ref={passwordConfirmationRef} placeholder={'Confirm password'} type="text"/>
                    <button type={'submit'} className={'btn btn-block'}>Sign up</button>
                </form>


            </div>
        </div>
    )
}

export default Signup
