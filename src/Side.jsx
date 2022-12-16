import "./dashboard.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { TiMessage} from "react-icons/ti";
import React,{useState} from 'react'

export default function Side(props) {
    const [value, setvalue] = useState("ongoing")
    const select_change = (event) => {
        setvalue(event.target.value)
    }
    
  return (
    <>
    {/* <button onClick={details}>cross</button> */}
    <div className={props.disp?'side-bar click':'side-bar'}>
                <div className='side-heading'>
                    <h1 className='heading'>Shreyan Daga</h1>
                    <div><select value={value} className={value} onChange={select_change}>
                        <option className='pending' value="pending">pending</option>
                        <option className='Ressolved' value="Ressolved">Ressolved</option>
                        <option className='ongoing' value="ongoing">Ongoing</option>

                    </select></div>
                </div>
                <div className="contact">
                <input className='detail-issue-input input-number'  type="number" placeholder='1'/>
                <input className='detail-issue-input' type="tel" name="telphone" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" required/>
                <input className='detail-issue-input' type="email" placeholder='@gmail.com' /> 
                <input className='detail-issue-input input-number'  type="number" placeholder='1'/>
                <input className='detail-issue-input' type="text" placeholder='school' /> 
                <input className='detail-issue-input' type="text" placeholder='Address' /> 
                
                </div>
                <div className='contact-icon'>
                    <h3>Contact</h3>
                    <div id='contact-icon'>
                        <button className='contact-icons_'><BsFillTelephoneFill/></button>
                        <button className='contact-icons_'><TiMessage/></button>
                        <button className='contact-icons_'><AiOutlineCopy/></button>
                        <button className='template-history'>Template</button>
                        <button className='template-history'>History</button>
                    </div>
                </div>
                <div className='detail'>
                    <p style={{fontSize:"21px"}}>Issue Details</p>
                    <div className='detail-issue'>
                        <div className='detail-issue-div'><pre>Cources:  <input className='detail-issue-input cources' type="text" /></pre></div>
                        <div className='detail-issue-div'><pre>Time:       <input className='detail-issue-input' type="text" /> <input className='detail-issue-input' type="text" /></pre></div>
                        <div className='detail-issue-div'><pre>Sessions: <input className='detail-issue-input' type="text" /> <input className='detail-issue-input' type="text" /></pre></div>
                        <div className='detail-issue-div'><pre>Type:       <input className='detail-issue-input' type="text" /> <input className='detail-issue-input' type="text" /></pre></div>
                        <div className='detail-issue-div'><pre>Sources:  <input className='detail-issue-input' type="text" /> <input className='detail-issue-input' type="text" /></pre></div>
                    </div>
                    <div className='comments'>
                        <h3>Comments  </h3>
                        <input className='comments-input' type="text" placeholder='Add comments' />
                    </div>

                </div>
                <div>
                    <pre style={{fontSize:"21px"}}>    Issue Reports</pre>
                    </div>
                <div className='issue-report'>
                    <p>Start time:</p>
                    <p>Due time:</p>
                    <p>End time:</p>
                    <p>Assigne:</p>
                </div>
                <div className="buttons">
                    <button className='report'>Share Report</button>
                    <button className="delete">Delete Query</button>
                </div>

            </div>
    </>
  )
}
