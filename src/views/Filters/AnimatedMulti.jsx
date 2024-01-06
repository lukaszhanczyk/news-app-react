import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function AnimatedMulti(props) {

    const animatedComponents = makeAnimated();
    let firstOption = '';
    let options = [];

    if (props.options){
        firstOption = props.options[0];
        options = props.options;
    }

    return (
        <Select
            innerRef={props.ref}
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[firstOption]}
            isMulti
            options={options}
        />
    );
}

export default AnimatedMulti;
