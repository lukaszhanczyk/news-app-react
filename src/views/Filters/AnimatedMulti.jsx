import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useEffect} from "react";

function AnimatedMulti(props) {

    const animatedComponents = makeAnimated();
    let firstOption = '';
    let options = [];

    if (props.options){
        firstOption = props.options[0];
        options = props.options;
    }
    useEffect(() => {
        if (props.defaultValue){
            const ids = props.defaultValue.map(element => element.value);
            props.setSelectRef(ids)
        }
    }, []);
    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={props.defaultValue}
            isMulti
            options={options}
            onChange={(choices) => props.setSelectRef(choices.map(choice => choice.value))}
        />
    );
}

export default AnimatedMulti;
