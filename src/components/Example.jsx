import React, {useRef} from "react";

const Example = ()=>{
    const myRef = useRef(null)
    const input = ()=>{
        myRef.current.focus()
    }
    const button = {onClick: input}

    return(
        <div className='block'>
            <button {...button}>Tap me</button>
            <input type="text" ref={myRef}/>
        </div>
    )
}
export default Example