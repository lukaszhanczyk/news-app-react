import {FormGroup, Label} from "reactstrap";
import AnimatedMulti from "./AnimatedMulti.jsx";
import {useEffect, useRef, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";


function SourceFilter(props) {

    const [sources, setSources] = useState()
    const [selectRef, setSelectRef] = useState();

    useEffect(() => {
        axiosClient.get(`/sources`, props.filters)
            .then(response => {
                const _sources = response.data;
                setSources(_sources.data)
            })
    }, []);

    useEffect(() => {
        props.setSource(selectRef)
    }, [selectRef]);

    return (
        <FormGroup className={'p-lg-2'}>
            <Label>Source</Label>
            <AnimatedMulti
                options={sources}
                setSelectRef={setSelectRef}
                defaultValue={props.defaultValue}
            />
        </FormGroup>
    );
}

export default SourceFilter;
