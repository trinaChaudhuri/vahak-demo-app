import React from 'react';
//image imports
import specification1 from '../assets/specification1.png';
import specification2 from '../assets/specification2.png';
import specification3 from '../assets/specification3.png';
import arrowdown from '../assets/arrowdown.png';
import profile from '../assets/Profile.png';
import rupee from '../assets/rupee.png';
//style imports
import '../styles/cardetails.css';
export default function CarDetails(){
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
                <div className="moredetails">
                    <div className="moredetailscontainer">
                        <div className="moredetailstext">More Details</div>
                        <img className="arrowdown" src={arrowdown} alt=""/>
                    </div>
                </div>
                <div className="profiletextcontainer">
                    <img alt="" src={profile} className="profile"/>
                    <div className="profilechildcontainer">
                        <div className="profiletext">Rohan Sharma</div>
                        <div className="profileplace">Bengaluru, Karnataka</div>
                    </div>
                </div>
            </div>
            <div className="placeyourbidcontainer">
                <div className="placeyourbidtext">Place Your BID</div>
                <div className="bar"></div>
                <div className="placeyourbidchildcontainer">
                <div className="placeholdercontainer">
            </div>
         </div>
         </div>
        </div>
    )
}