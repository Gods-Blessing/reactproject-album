import React,{useState} from "react";

function Edit(props){
    // to set the value of input
    const [values, setValues] = useState(props.data.title);

    // to show the content of album
    const [showntitle, setShowntitle]= useState();
    
    // setting the visibility of input
    const [inputvisible, setInputvisible] = useState(false);

    function handlevisible(e){
        e.preventDefault();
        // console.log("clicked the button");
        setInputvisible(!inputvisible);
    }

    function handleshownvalue(e){
        setShowntitle(e.target.value)
    }

    function handlevalue(e){
        e.preventDefault();
        setValues(showntitle);
        setShowntitle("");
        setInputvisible(false);
    }

    function game(){
        props.dell(props.data.id);
    }


    return(
            <div className="each_info" key={props.data.id}>
                <div className="ammend">
                    <button className="edit" onClick={handlevisible}>Edit</button>
                    <input type="text" onChange={handleshownvalue} value={showntitle} style={{
                        display:inputvisible ? "flex":"none"
                    }}>  
                    </input>
                    <button onClick={handlevalue} style={{
                        display:inputvisible ? "flex":"none"
                    }}>Save</button>
                </div>

                <div>
                    {values}
                </div>
                <div>
                    <button onClick={game} >
                        Delete
                    </button>
                    
                </div>
            </div>
    )
}

export default Edit;