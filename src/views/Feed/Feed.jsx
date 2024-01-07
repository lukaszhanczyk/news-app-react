import Filters from "./Filters.jsx";
import {Col, Container, Row} from "reactstrap";
import Articles from "./Articles.jsx";
import {useState} from "react";

function Feed() {

    const [filters, setFilters] = useState()

    return (
        <>
            <Container className={'animated fadeInDown'}>
                <Row>
                    <Col className={'mt-5'}>
                        <Filters setFilters={setFilters} filters={filters}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={''}>
                        <Articles filters={filters}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Feed
