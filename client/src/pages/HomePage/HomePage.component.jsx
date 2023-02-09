import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.styles.css";
import note from "../../assets/note.svg";
import Button from '@material-ui/core/Button';


function HomePage(){
    return(
    <div className="homepage">
    <div className="pagetext">
        <div className="heading">
            GET STARTED.
        </div>
        <div className="content">
            To Help Track Tasks and Work<br/>
            <span className="motivation">
            <br/>
            </span>
            <span className="worry">
            </span>
        </div>
        <div className="button">
        <Link to="/signup" style={{textDecoration:"none"}}>
        <Button className="join-button" variant="contained" style={{fontSize:"1.2em"}}>JOIN NOW</Button></Link>
        </div>
        {/* </div> */}
        <div className="image">
            <img src={note} alt="note" style={{width:"900px"}}/>
        </div>
        {/* </div> */}
        {/* <div className="button">
        <Link to="/signup" style={{textDecoration:"none"}}>
        <Button className="join-button" variant="contained" style={{fontSize:"1.2em"}}>JOIN NOW</Button></Link>
        </div> */}
        </div>
    </div>
    )
}

export default HomePage;