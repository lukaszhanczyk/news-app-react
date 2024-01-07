import {FormGroup, Label} from "reactstrap";
import AnimatedMulti from "./AnimatedMulti.jsx";
import {useEffect, useRef, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";


function ApiSourceFilter(props) {

    const [apiSources, setApiSources] = useState()
    const [selectRef, setSelectRef] = useState();

    useEffect(() => {
        axiosClient.get(`/api-sources`, props.filters)
            .then(response => {
                const _apiSources = response.data;
                setApiSources(_apiSources.data)
            })
    }, []);

    useEffect(() => {
        props.setApi(selectRef)
    }, [selectRef]);

    return (
        <FormGroup className={'p-lg-2'}>
            <Label>Api</Label>
            <AnimatedMulti
                options={apiSources}
                setSelectRef={setSelectRef}
                defaultValue={props.defaultValue}
            />
        </FormGroup>
    );
}

export default ApiSourceFilter;
