import {
    Button,
    Collapse,
    Form,
    FormGroup,
    Input,
    Label, Nav, Navbar,
    NavbarText,
    NavbarToggler, NavItem
} from "reactstrap";
import {useRef, useState} from "react";

function Filters(props) {
    const [isOpen, setIsOpen] = useState(false);
    const apiRef = useRef();
    const sourceRef = useRef();
    const categoryRef = useRef();
    const authorRef = useRef();
    const toggle = () => setIsOpen(!isOpen);

    const onSubmit = (event) => {
        event.preventDefault()
        const filters = {
            api: apiRef.current.value,
            source: sourceRef.current.value,
            category: categoryRef.current.value,
            author: authorRef.current.value,
        }
        props.setFilters(filters);
    }

    return (
        <div className={'mt-5'}>
            <h5>Filters</h5>
            <Form className={''} onSubmit={ev => onSubmit(ev)}>
                <Navbar
                    expand={'lg'}
                    container={'fluid'}
                >
                    <NavbarToggler className={'vw-100'} onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <FormGroup className={'p-lg-2'}>
                                    <Label>Api</Label>
                                    <Input
                                        innerRef={apiRef}
                                        type="string"
                                    />
                                </FormGroup>
                            </NavItem>
                            <NavItem>
                                <FormGroup className={'p-lg-2'}>
                                    <Label>Source</Label>
                                    <Input
                                        innerRef={sourceRef}
                                        type="string"
                                    />
                                </FormGroup>
                            </NavItem>
                            <NavItem>
                                <FormGroup className={'p-lg-2'}>
                                    <Label>Category</Label>
                                    <Input
                                        innerRef={categoryRef}
                                        type="string"
                                    />
                                </FormGroup>
                            </NavItem>
                            <NavItem>
                                <FormGroup className={'p-lg-2'}>
                                    <Label>Author</Label>
                                    <Input
                                        innerRef={authorRef}
                                        type="string"
                                    />
                                </FormGroup>
                            </NavItem>
                        </Nav>
                        <NavbarText>
                            <Button type={'submit'} className={'btn'}>
                                Filter
                            </Button>
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </Form>
        </div>
    )
}

export default Filters
