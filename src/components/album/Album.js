import React  from "react";
import Edit from "../Edit/Edit";

function Album(props){
    // console.log(props)
    let arr2 = props.list;
        const eles= arr2.map(data=>{
        //  console.log(data)
             return (
                //  <div className="each_info" key={data.id}>
                //      <h4>{data.title}</h4>
                //  </div>
                <Edit key={data.id} dell={props.del} data={data}/>
             )

         })
         


    return(
        <div className="album_container">
            {/* {props.list.map(data=><Edit data={data}/>)} */}
            {eles}
        </div>
    )
}

export default Album;