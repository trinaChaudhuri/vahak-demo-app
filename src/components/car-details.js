import React,{useState} from 'react';
//image imports
import specification1 from '../assets/specification1.png';
import specification2 from '../assets/specification2.png';
import specification3 from '../assets/specification3.png';
import arrowdown from '../assets/arrowdown.png';
import profile from '../assets/Profile.png';
import hide from '../assets/Hide.png';
//style imports
import '../styles/cardetails.css';
//screen imports
import PlaceYourBid from './place-your-bid-card';

export default function CarDetails(){
    const [hidedetails,sethidedetails]=useState(false);
    return(
        <div>
            <div className="title">Old Car Available</div>
            <div className="bar"></div>
            <div className="containerforavailability">
                <div className="childheadercontainer">
                <div className="carname">Honda City</div>
                <div className="postingtime">Posted at 1 Nov,9.30 AM</div>
                </div>
                <div className="childspecificationcontainer">
                    <div className="specificationcontainer">
                        <img src={specification1} alt="" className="specificationimage"/>
                        <div className="specificationtext">Specification 01</div>
                    </div>
                    <div className="specificationcontainer">
                        <img src={specification2} alt="" className="specificationimage"/>
                        <div className="specificationtext">Specification 01</div>
                    </div>
                    <div className="specificationcontainer">
                        <img src={specification3} alt="" className="specificationimage"/>
                        <div className="specificationtext">Specification 01</div>
                    </div>
                </div>
                {hidedetails===true && (
                    <div className="details">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                )}
                {hidedetails===false?(
                    <div className="moredetails">
                    <div className="moredetailscontainer" onClick={()=>sethidedetails(true)}>
                        <div className="moredetailstext">More Details</div>
                        <img className="arrowdown" src={arrowdown} alt=""/>
                    </div>
                </div>
                ):(
                    <div className="moredetails">
                    <div className="moredetailscontainer" onClick={()=>sethidedetails(false)}>
                        <div className="moredetailstext">Hide Details</div>
                        <img className="arrowdown" src={hide} alt=""/>
                    </div>
                </div>
                )}
                
                <div className="profiletextcontainer">
                    <img alt="" src={profile} className="profile"/>
                    <div className="profilechildcontainer">
                        <div className="profiletext">Rohan Sharma</div>
                        <div className="profileplace">Bengaluru, Karnataka</div>
                    </div>
                </div>
            </div>
            <PlaceYourBid />
            
        </div>
    )
}