import {FormGroup, Label} from "reactstrap";
import AnimatedMulti from "./AnimatedMulti.jsx";
import {useEffect, useRef, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";


function AuthorFilter(props) {

    const [authors, setAuthors] = useState()
    const [selectRef, setSelectRef] = useState();

    useEffect(() => {
        axiosClient.get(`/authors`, props.filters)
            .then(response => {
                const _authors = response.data;
                setAuthors(_authors.data)
            })
    }, []);

    useEffect(() => {
        props.setAuthor(selectRef)
    }, [selectRef]);

    return (
        <FormGroup className={'p-lg-2'}>
            <Label>Author</Label>
            <AnimatedMulti
                options={authors}
                setSelectRef={setSelectRef}
                defaultValue={props.defaultValue}
            />
        </FormGroup>
    );
}

export default AuthorFilter;
