import { Fragment } from "react";
import { Button } from 'primereact/button'

const MyButton = ({ count, setCount }) => {

    return (
        <Fragment>
            <Button label="+1" onClick={() => setCount((count) = count + 1)} />
            <h2>{count}</h2>
            <Button label="-1" onClick={() => setCount((count) = count - 1)} />
        </Fragment>
    )

}

export default MyButton
