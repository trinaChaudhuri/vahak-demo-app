import React,{useState,useRef} from 'react';
//style imports
import "../styles/placeyourbid.css";
//screen imports
import Form from './form';
export default function PlaceYourBid(){
    const [amount,setamount]=useState("");
    const [showform,setshowform]=useState(false);
    const [toggleButtons,setToggleButtons]=useState(0);
    const [enablebidnowbutton,setenablebidnowbutton]=useState(false);
    const handleEnableBidNow=(value)=>{
        setenablebidnowbutton(value);
    }
    const rupeeplaceholder=useRef(null);
   
    return(
        <>
       <div className="placeyourbidcontainer">
           <div className="placeyourbidtext">Place Your BID</div>
            <div className="bar"></div>
            <div style={{textAlign:'center'}}>
            {amount===""?(
            <div style={{marginLeft:82}}>
            <span className="amountplaceholder">₹<input name="amount" type="number" size="20" placeholder="0"  
            value={amount} ref={rupeeplaceholder} onChange={(event)=>setamount(event.target.value)} 
            /></span>
            </div>
            ):(
                <span className="amountplaceholder">₹<input name="amount" type="number" size="20" placeholder="0"  
            value={amount} ref={rupeeplaceholder} onChange={(event)=>setamount(event.target.value)} 
            /></span>
            )}
            
            </div>
            <div className="buttons">
                {showform===true && toggleButtons===1 ?(
                <div className="fixedpricecontainerselected" onClick={()=>
                    setshowform(!showform)          
                    }>
                <div className="fixedpriceselected">Fixed Price</div>
                </div>
                ):(
                <div className="fixedpricecontainer" onClick={()=>{
                    setshowform(!showform)
                    setToggleButtons(1)
                    }
                }>
                <div className="fixedprice">Fixed Price</div>
                </div>
                )}  
                <div className="fixedpricecontainer">
                <div className="ratenegotiable">Rate Negiotable</div>
                </div>
            </div>
            {showform===true && <Form handleEnableBidNow={handleEnableBidNow}/>}
          </div>
            {enablebidnowbutton===true?(
            <div className="bidnowbuttoncontainerenabled">
             <div className="bidnowtextenabled">
             Bid Now
             </div>
             </div>
            ):(
            <div className="bidnowbuttoncontainer">
             <div className="bidnowtext">
             Bid Now
             </div>
             </div>
            )}
            
         
       </>
    )
} 