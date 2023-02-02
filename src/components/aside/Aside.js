import React from "react";


function Aside(props){
    return(
        <div className="aside_container">

            <h2>Add to Album</h2>
            {/* <form > */}

                {/* <div>
                    <label form="id">Id:</label>
                    <input onChange={props.handleState} id="id" name="id" value={props.mystate.id}></input>
                </div> */}

                <div>
                    <label form="title">Title:</label>
                    <input onChange={props.handleState} id="title" value={props.mystate.title} name="title" placeholder="Title..."></input>
                </div>

                <div>
                    <button onClick={props.myhandleState}>Submit</button>
                </div>
            {/* </form> */}
        </div>
    )
}


export default Aside;