import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";
import {useRef, useState} from "react";
import axiosClient from "../clients/axios-client.jsx";
import {Button, Card, CardBody, CardTitle, Form, FormGroup, Input} from "reactstrap";
import {Link} from "react-router-dom";

function Login() {

    const {setToken, setUser} = useAuthContextProvider()
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState()

    const onSubmit = (event) => {
        event.preventDefault()
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', user)
            .then((response)=> {
                const data = response.data
                console.log(data)
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
                    Welcome!
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

                    <Button type={'submit'} className={'btn-lg w-100'}>
                        Log in
                    </Button>
                </Form>
                <div className={"p-2 text-center"}>
                    Not registered? <Link to={"/signup"}>Sign up</Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default Login
