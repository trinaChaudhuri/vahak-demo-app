import React,{useState} from 'react';
//style imports
import "../styles/placeyourbid.css";
export default function PlaceYourBid(){
    const [amount,setamount]=useState("");
    return(
        <>
       <div className="placeyourbidcontainer">
           <div className="placeyourbidtext">Place Your BID</div>
            <div className="bar"></div>
            <div style={{textAlign:'center'}}>
            <input name="amount" type="number" size="20" placeholder="&#x20B9; 0" className="amountplaceholder" 
            value={amount} onChange={(event)=>setamount(event.target.value)}/>
            </div>
            <div className="buttons">
                <div className="fixedpricecontainer">
                <div className="fixedprice">Fixed Price</div>
                </div>
                <div className="fixedpricecontainer">
                <div className="ratenegotiable">Rate Negiotable</div>
                </div>
            </div>
            
       </div>
            <div className="bidnowbuttoncontainer">
           <div className="bidnowtext">
           Bid Now
           </div>
       </div>
       </>
    )
} 