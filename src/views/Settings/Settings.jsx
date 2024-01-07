import {
    Button,
    Card,
    CardBody,
    CardLink,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container, Form, FormGroup, Input, Label,
    ListGroup,
    ListGroupItem,
    Row
} from "reactstrap";
import Filters from "../Feed/Filters.jsx";
import {useAuthContextProvider} from "../../contexts/AuthContextProvider.jsx";
import {useEffect, useRef, useState} from "react";
import ApiSourceFilter from "../Filters/ApiSourceFilter.jsx";
import SourceFilter from "../Filters/SourceFilter.jsx";
import CategoryFilter from "../Filters/CategoryFilter.jsx";
import AuthorFilter from "../Filters/AuthorFilter.jsx";
import axiosClient from "../../clients/axios-client.jsx";
import {useNavigate} from "react-router-dom";
import {useFiltersContextProvider} from "../../contexts/FiltersContextProvider.jsx";


function Settings() {
    const {user, setUser} = useAuthContextProvider()
    const {setFilters} = useFiltersContextProvider()


    const [api, setApi] = useState([]);
    const [source, setSource] = useState([]);
    const [category, setCategory] = useState([]);
    const [author, setAuthor] = useState([]);
    const navigate = useNavigate();
    const [_user, _setUser] = useState({
        id: null,
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
    })

    const onSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            name: _user.name,
            email: _user.email,
            password: _user.password ?? null,
            password_confirmation: _user.password_confirmation ?? null,
            api: api,
            source: source,
            author: author,
            category: category,
        }

        axiosClient.put(`/user/update/${user.id}`, newUser)
            .then((response)=> {
                const data = response.data
                setUser(data.data)
                setFilters([])
                navigate('/feed')
                // setToken(data.token)
            })
            // .catch((err) => {
            //     const error = err.response.data.message
            //     setError(error)
            // })
    }

    useEffect(() => {
        _setUser(user)
    }, [user]);


    return (
        <>
            {
                !!Object.keys(user).length &&
                <Container className={'animated fadeInDown'}>
                <Row>
                    <Col className={'flex align-content-center justify-content-center flex-column vh-100'}
                         md={{
                             offset: 3,
                             size: 6
                         }}
                         sm="12">
                        <Card className={'mt-5'}>
                            <CardTitle tag="h1" className={'text-center'}>
                                Settings
                            </CardTitle>
                            <Form onSubmit={ev => onSubmit(ev)}>
                                <CardBody>
                                    <FormGroup>
                                        <input
                                            value={user.name}
                                            onChange={event => _setUser({..._user, name: event.target.value})}
                                            className={'form-control'}
                                            placeholder="Full name"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            value={user.email} onChange={event => _setUser({..._user, email: event.target.value})}
                                            className={'form-control'}
                                            placeholder="Email"
                                            type='email'
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            onChange={event => _setUser({..._user, password: event.target.value})}
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            onChange={event => _setUser({..._user, password_confirmation: event.target.value})}
                                            placeholder="Confirm password"
                                            type="password"
                                        />
                                    </FormGroup>
                                </CardBody>
                                <CardTitle tag="h3" className={'text-center'}>
                                    Filters
                                </CardTitle>
                                <CardBody>
                                    <FormGroup>
                                        <ApiSourceFilter
                                            setApi={setApi} defaultValue={user.api_sources}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <SourceFilter
                                            setSource={setSource} defaultValue={user.sources}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                         <CategoryFilter
                                            setCategory={setCategory} defaultValue={user.categories}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <AuthorFilter
                                            setAuthor={setAuthor} defaultValue={user.authors}
                                        />
                                    </FormGroup>

                                    <Button type={'submit'} className={'btn-lg w-100'}>
                                        Update
                                    </Button>
                                </CardBody>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            }
        </>
    )
}

export default Settings
