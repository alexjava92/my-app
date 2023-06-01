import preloader from "../../../images/gg.gif";
import React from "react";

let Preloader = (props) => {
    return <div>
        <img alt={"p"} src={preloader} style={{backgroundColor: "yellow"}}/>
    </div>

}

export default Preloader;