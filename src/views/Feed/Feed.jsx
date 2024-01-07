import Filters from "./Filters.jsx";
import {Col, Container, Row} from "reactstrap";
import Articles from "./Articles.jsx";
import {useAuthContextProvider} from "../../contexts/AuthContextProvider.jsx";
import {useFiltersContextProvider} from "../../contexts/FiltersContextProvider.jsx";
import {useEffect} from "react";

function Feed() {
    const {user} = useAuthContextProvider()
    const {setFilters} = useFiltersContextProvider()

    useEffect(() => {
        if (Object.keys(user).length > 0){
            setFilters({
                api: user.api_sources.map(element => element.value),
                author: user.authors.map(element => element.value),
                category: user.categories.map(element => element.value),
                source: user.sources.map(element => element.value),
            })
        }
    }, [user]);

    return (
        <>
            <Container className={'animated fadeInDown'}>
                <Row>
                    <Col className={'mt-5'}>
                        <Filters/>
                    </Col>
                </Row>
                <Row>
                    <Col className={''}>
                        <Articles/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Feed
