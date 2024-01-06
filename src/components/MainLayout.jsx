import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";
import {
    Button,
    Col,
    Collapse,
    Container, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown
} from "reactstrap";
import {useEffect, useState} from "react";
import axiosClient from "../clients/axios-client.jsx";

function MainLayout() {
    const {user, token, setUser, setToken} = useAuthContextProvider()
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        axiosClient.get('/user')
            .then(response => {
                const user = response.data;
                setUser(user)
            })
            .catch((err) => {
                if (err){
                    setUser({})
                    setToken(null)
                    navigate('/login')
                }
            })
    }, []);

    if (!token) {
        return <Navigate to={"/"}/>
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.get('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    const onNavigate = (path) => {
        navigate(path)
    }

    return (
        <div>
            <Navbar
                expand={'sm'}
                color={'dark'}
                dark
                container={'fluid'}
                fixed={'top'}
            >
                <NavbarBrand href="/">{user.name}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={() => onNavigate('/feed')}>Articles</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() =>onNavigate('/settings')}>Settings</NavLink>
                        </NavItem>
                    </Nav>
                <NavbarText><Button onClick={event => onLogout(event)}>Log out</Button></NavbarText>
                </Collapse>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col className={'flex align-content-center flex-column vh-100'}>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainLayout
