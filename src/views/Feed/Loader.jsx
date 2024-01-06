import {Spinner} from "reactstrap";

function Loader() {

    return (
        <div className={'flex justify-content-center align-items-center w-100'}>
            <Spinner
                color="dark"
                type="grow"
            >
                Loading...
            </Spinner>
        </div>
    )
}

export default Loader
