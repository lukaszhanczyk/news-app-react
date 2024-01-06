import {Navigate, Outlet} from "react-router-dom";
import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";
import {Col, Container, Row} from "reactstrap";

function AuthLayout() {
    const {token} = useAuthContextProvider()

    if (token) {
        return <Navigate to={"/"}/>
    }

    return (
        <Container>
            <Row>
                <Col className={'flex align-content-center justify-content-center flex-column vh-100'}
                     md={{
                         offset: 3,
                         size: 6
                     }}
                     sm="12">
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}

export default AuthLayout
