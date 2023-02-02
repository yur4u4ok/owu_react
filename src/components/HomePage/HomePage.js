import {useContext} from "react";
import {MyContext} from "../../index";
import {Button} from "../Button/Button";

const HomePage = () => {
    const context = useContext(MyContext)

    return (
        <div>
            {JSON.stringify(context)}
            <Button click={() => console.log("clicked")}>click</Button>
        </div>
    )
}

export{
    HomePage
}
