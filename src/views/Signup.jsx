import {useRef, useState} from "react";
import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";
import axiosClient from "../clients/axios-client.jsx";
import {Button, Card, CardBody, CardTitle, Form, FormGroup, Input} from "reactstrap";
import {Link} from "react-router-dom";

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
        <Card className={'animated fadeInDown'}>
            <CardBody>
                <CardTitle tag="h1" className={'text-center'}>
                    Create new account
                </CardTitle>
                {
                    error &&
                    <div className={'bg-danger animated fadeInDown rounded-1 p-2 mb-3 text-white'}>
                        <span>{error}</span>
                    </div>
                }
                <Form onSubmit={ev => onSubmit(ev)}>
                    <FormGroup>
                        <Input
                            innerRef={nameRef}
                            placeholder="Full name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            innerRef={emailRef}
                            placeholder="Email"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            innerRef={passwordRef}
                            placeholder="Password"
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            innerRef={passwordConfirmationRef}
                            placeholder="Confirm password"
                            type="password"
                        />
                    </FormGroup>

                    <Button type={'submit'} className={'btn-lg w-100'}>
                        Sign up
                    </Button>

                </Form>
                <div className={"p-2 text-center"}>
                        Already registered? <Link to={"/login"}>Log in</Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default Signup
