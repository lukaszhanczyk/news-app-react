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
import {useRef, useState} from "react";
import ApiSourceFilter from "../Filters/ApiSourceFilter.jsx";
import SourceFilter from "../Filters/SourceFilter.jsx";
import CategoryFilter from "../Filters/CategoryFilter.jsx";
import AuthorFilter from "../Filters/AuthorFilter.jsx";


function Settings() {
    const {user} = useAuthContextProvider()
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [api, setApi] = useState([]);
    const [source, setSource] = useState([]);
    const [category, setCategory] = useState([]);
    const [author, setAuthor] = useState([]);

    console.log(user)
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
                                        Sign up
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
