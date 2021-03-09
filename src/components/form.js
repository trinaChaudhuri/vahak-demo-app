import React,{useState} from 'react';
//style imports
import "../styles/form.css";
export default function Form(props){
    const [mobile,setmobile]=useState("");
    const [name,setname]=useState("");
    const [remarks,setremarks]=useState("");
    return(
        <div className="formwrapper">
            <input type="number" placeholder="Enter your mobile number*" className="forminputplaceholder" 
            onChange={(event)=>
                setmobile(event.target.value)
            } 
            value={mobile}
            max="10"/>
            <input type="text" placeholder="Enter your name*" className="forminputplaceholder" 
            onChange={(event)=>setname(event.target.value)} value={name}/>
            <input type="text" placeholder="Enter remarks(optional)" className="forminputplaceholder"
            onChange={(event)=>setremarks(event.target.value)} value={remarks}/>
            {mobile.length===10 && name.length>1 && props.handleEnableBidNow(true)}
        </div>
    )
}