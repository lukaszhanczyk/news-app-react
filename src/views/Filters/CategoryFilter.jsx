import {FormGroup, Label} from "reactstrap";
import AnimatedMulti from "./AnimatedMulti.jsx";
import {useEffect, useRef, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";


function CategoryFilter(props) {

    const [categories, setCategories] = useState()
    const [selectRef, setSelectRef] = useState();

    useEffect(() => {
        axiosClient.get(`/categories`, props.filters)
            .then(response => {
                const _categories = response.data;
                setCategories(_categories.data)
            })
    }, []);

    useEffect(() => {
        props.setCategory(selectRef)
    }, [selectRef]);

    return (
        <FormGroup className={'p-lg-2'}>
            <Label>Category</Label>
            <AnimatedMulti
                options={categories}
                setSelectRef={setSelectRef}
                defaultValue={props.defaultValue}
            />
        </FormGroup>
    );
}

export default CategoryFilter;
