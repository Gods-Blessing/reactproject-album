import React  from "react";

function Album(props){
    // console.log(props.list)
    let arr2 = props.list;
        const eles= arr2.map(data=>{
        //  console.log(data)
             return (
                 <div className="each_info" key={data.id}>
                     <h4>{data.title}</h4>
                 </div>
             )

         })
         


    return(
        <div className="album_container">
            {eles};
        </div>
    )
}

export default Album;