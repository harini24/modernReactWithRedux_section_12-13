import React, { useState } from "react"

const Accordion = ({items}) => {

    const [activeInd,setActiveInd]= useState()

    const renderedItems = items.map((item,ind)=>{
        return(
           <React.Fragment key={item.title}>
                <div className={`title ${ind==activeInd && 'active'}`} onClick={()=>setActiveInd(ind)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${ind==activeInd && 'active'}`}>
                <p>{item.content}</p>
            </div>
           </React.Fragment>
        )
    })
    return(
        <div className="ui styled accordion">{renderedItems}</div>
    )
}

export default Accordion