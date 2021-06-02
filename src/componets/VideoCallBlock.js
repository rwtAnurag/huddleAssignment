
import { useEffect, useState } from "react";
import "./VideoCallBlock.css"

const VideoCallBlock =()=>{
    const [videoIcon,setVideoIcon] = useState("https://beta.huddle01.com/static/media/VideoOn.4fc76b20.svg");
    const [audioIcon,setAudioIcon] = useState("https://beta.huddle01.com/static/media/MicOn.d3732787.svg");
    const [videoDropdown,setVideodropdown] = useState(" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABvSURBVHgBfY8xDoAgDEVb4+Tg4OIiKyv3P4Ezq6sn0MHFoX4SSEojNPlA+18pECFExEMrNaL4I5YJuc/FyMynAQM2B10DzAeHI3sBpvsBXyiyHlUmJANaFLjj0pvt21QDaTAlFWwaKpA6v9+g2dY/7Yc76JlWL/IAAAAASUVORK5CYII=")
    const [videoDropdownClass,setVideodropdownClass] =useState("");
    const [onClickDropdown,setClickDropdown] = useState(true);
    const [AudioDropdownClass,setAudiodropdownClass] =useState("");
    const [onAudioClickDropdown,setAudioClickDropdown] = useState(true);
    const [openVideo,setOpenVideo] =useState(true);
    const [openAudio,setOpenAudio] =useState(true);
     
   const changeVideoIcon = ()=>{
            if(openVideo===true)
                setOpenVideo(false);
            else
               setOpenVideo(true);            
        }
    const changeAudioIcon =()=>{
        if(openAudio===true)
               setOpenAudio(false);
            else
               setOpenAudio(true);
    };
    const changeVideoDropdown =()=>{
        if(onClickDropdown===false)
           setClickDropdown(true);
        else
        setClickDropdown(false);
        
    }
    const changeAudioDropdown =()=>{
        if(onAudioClickDropdown===false)
           setAudioClickDropdown(true);
        else
           setAudioClickDropdown(false);
        
    }
    useEffect(()=>{
        if(openVideo===true){
            setVideoIcon("https://beta.huddle01.com/static/media/VideoOn.4fc76b20.svg");
        }
        else
            setVideoIcon("https://beta.huddle01.com/static/media/VideoOff.0ae8beee.svg");
        if(openAudio===true){
            setAudioIcon("https://beta.huddle01.com/static/media/MicOn.d3732787.svg");
        }
        else
        setAudioIcon("https://beta.huddle01.com/static/media/MicOff.42f250f2.svg");
        if(onClickDropdown===true)
          setVideodropdownClass("videodropdownClass")
        else
          setVideodropdownClass("");
        if(onAudioClickDropdown===true)
          setAudiodropdownClass("videodropdownClass")
        else
          setAudiodropdownClass("");
    },[openVideo,openAudio,onClickDropdown,onAudioClickDropdown])
    return (
        <div className="callBlock">
            <div className="videoBlock">
                  <div className="screen">
                      <div className="userLogo">
                          <div className="defaultUser">
                                
                          </div>
                      </div>
                      <div className="playIcons" style={{height:"18%",paddingLeft:"7px",paddingRight:"7px",backgroundColor:" rgb(32, 32, 32)",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px"}}>
                         <span onClick={changeVideoIcon} className="vidoIcon">
                              <img src={videoIcon}></img>
                         </span>
                              <span className="setting" style={{color:"white",marginLeft:"0.6rem"}}>Video Settings</span>
                              <img onClick={changeVideoDropdown} src={videoDropdown} style={{cursor:"pointer",marginLeft:"0.5rem"}} className={videoDropdownClass}></img>
                         <span onClick={changeAudioIcon} className="audioIcon"> <img src={audioIcon}></img></span>
                         <span className="setting"  style={{color:"white",fontWeight:"600",marginLeft:"1%"}}>Audio Settings</span>
                         <img onClick={changeAudioDropdown} src={videoDropdown} style={{cursor:"pointer",marginLeft:"0.5rem"}}class={AudioDropdownClass}></img>
                      </div>    
                      <div className="dropdown">
                            <div style={{ display: onClickDropdown? 'none' : null }} className="dropdowns1">
                                <label className="options">
                                    Webcam
                                    <input type="radio" name="radio"/>
                                </label>
                                <label className="options">
                                    Default-Webcam
                                    <input type="radio" name="radio"/>
                                </label>
                                <label className="options">
                                    Preferred-Webcam
                                    <input type="radio" name="radio"/>
                                </label>
                                
                            </div>
                            <div style={{ display: onAudioClickDropdown? 'none' : null }} className="dropdowns2">
                                    <label className="options">
                                        audio 1
                                        <input type="radio" name="radio"/>
                                    </label>
                                    <label className="options">
                                        audio 2
                                        <input type="radio" name="radio"/>
                                    </label>
                                    <label className="options">
                                        audio 2
                                        <input type="radio" name="radio"/>
                                    </label>
                            </div>
                      </div>
                  </div>
                 
                  
            </div>
            <div className="Userdetail">
              <div className="detail">
                 <div style={{textAlign:"center"}}>
                      <h1>Have a Look Around</h1>
                      <p style={{color:"gray",  fontWeight: "600"}}>Review how your audio and video work in calls</p>
                 </div>
                 <div className="detail-input">
                        <div >
                            <label >Your Name*</label><br/>
                            <input placeholder="Please Enter your Name" />
                        </div>
                        <div>
                            <label>Password</label><br/>
                            <input placeholder="Please Enter Your password (if any one)"/>
                        </div>
                        <div>
                            <button>Start Meeting</button>
                        </div>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default VideoCallBlock;