import React,{useState} from 'react';
//style imports
import "../styles/placeyourbid.css";
//screen imports
import Form from './form';
export default function PlaceYourBid(){
    const [amount,setamount]=useState("");
    const [showform,setshowform]=useState(false);
    const [fixedprice,setfixedprice]=useState(0);
    const [ratenegotiable,setratenegotiable]=useState(0);
    const [enablebidnowbutton,setenablebidnowbutton]=useState(false);
    const handleEnableBidNow=(value)=>{
        setenablebidnowbutton(value);
    }
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
                {showform===true  ?(
                <div className="fixedpricecontainerselected" onClick={()=>
                    setshowform(!showform)  
                    
                    }>
                <div className="fixedpriceselected">Fixed Price</div>
                </div>
                ):(
                <div className="fixedpricecontainer" onClick={()=>{
                    setshowform(!showform)
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