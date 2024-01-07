import {Button, Col, Container, Input, Row} from "reactstrap";
import {useEffect, useRef} from "react";


function SearchBar(props) {

    const searchRef = useRef()

    useEffect(() => {
        props.setSearch("")
    }, [])
    const onSearch = (event) => {
        event.preventDefault()
        props.setSearch(searchRef.current.value)
    }

    const onClear = (event) => {
        event.preventDefault()
        searchRef.current.value = ""
        props.setSearch("")
    }

    return (
        <Container>
            <Row>
                <Col className={'mb-2 flex justify-content-between align-items-center'}>
                    <Input
                        maxLength={60}
                        className={'m-2'}
                        innerRef={searchRef}
                    />
                    <Button
                        onClick={event => onClear(event)}
                        className={'btn m-2'}
                    >
                        Clear
                    </Button>
                    <Button
                        onClick={event => onSearch(event)}
                        className={'btn'}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar
