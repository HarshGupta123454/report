import React, { useState } from 'react'
import "./dashboard.css"
import { BsFillBellFill,BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { TiMessage} from "react-icons/ti";
export default function Dashboard() {
    const [value, setvalue] = useState("ongoing")
    const [value1, setvalue1] = useState("pending")
    const[disp, setdisp]=useState(false)
    const select_change = (event) => {
        setvalue(event.target.value)
    }
    const select_change1 = (event) => {
        setvalue1(event.target.value)
    }
    const details=()=>{
        setdisp(true)
    }
    return (
        <>
            <div className="container">
                <div className='first-div'>
                    <div className='inputs'>
                        <input className='input' type="text" name="students" placeholder='students' />
                        <input className='input' type="text" name="Query Type" placeholder='Query Type' />
                        
                        <input className='input' type="text" name="sources" placeholder='sources' />
                        <button className='button'>Add Query</button>
                    </div>
                    <div className='profile'>
                        <h3>Shakshi Verma</h3>
                        <div className='img'></div>
                    </div>
                </div>
            </div>

            <div className="container border">
                <div className='dashboard-heading'>
                    <h1 className='heading'>Dashboard</h1>
                    <div className='refund'><pre>Refunds: 2    <BsFillBellFill /> </pre></div>
                </div>

                <div className="table">
                    <table id="customers">
                        <tr>
                            <th>SID</th>
                            <th>Time</th>
                            <th>Student</th>
                            <th>Number</th>
                            <th>Query type</th>
                            <th>Status</th>
                            <th>Source</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td>01</td>
                            <td>10:40</td>
                            <td onClick={details}>Shreyaan Daga</td>
                            <td>0987654321</td>
                            <td>Query type</td>
                            <td><div><select value={value} className={value} onChange={select_change}>

                                <option className='pending' value="pending">pending</option>
                                <option className='Ressolved' value="Ressolved">Ressolved</option>
                                <option className='ongoing' value="ongoing">Ongoing</option>

                            </select></div></td>
                            <td>Source</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>10:40</td>
                            <td>Shreyaan Daga</td>
                            <td>0987654321</td>
                            <td>Query type</td>
                            <td><div> <select value={value1} className={value1} onChange={select_change1}>

                                <option className='pending' value="pending">pending</option>
                                <option className='Ressolved' value="Ressolved">Ressolved</option>
                                <option className='ongoing' value="ongoing">Ongoing</option>

                            </select></div></td>
                            <td>Source</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>10:40</td>
                            <td>Shreyaan Daga</td>
                            <td>0987654321</td>
                            <td>Query type</td>
                            <td><div> <select value={value} className={value} onChange={select_change}>

                                <option className='pending' value="pending">pending</option>
                                <option className='Ressolved' value="Ressolved">Ressolved</option>
                                <option className='ongoing' value="ongoing">Ongoing</option>

                            </select></div></td>
                            <td>Source</td>
                            <td>Action</td>
                        </tr>

                    </table>
                </div>
            </div>
            <div className={disp?'side-bar click':'side-bar'}>
                <div className='side-heading'>
                    <h1 className='heading'>Shreyan Daga</h1>
                    <div><select value={value} className={value} onChange={select_change}>
                        <option className='pending' value="pending">pending</option>
                        <option className='Ressolved' value="Ressolved">Ressolved</option>
                        <option className='ongoing' value="ongoing">Ongoing</option>

                    </select></div>
                </div>
                <div className="contact">
                <input className='detail-issue-input' type="tel" name="telphone" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" required/>
                <input className='detail-issue-input' type="email" placeholder='@gmail.com' /> 
                <input className='detail-issue-input' type="email" placeholder='@gmail.com' /> 
                <input className='detail-issue-input' type="email" placeholder='@gmail.com' /> 
                </div>
                <div className='contact-icon'>
                    <h3>Contact</h3>
                    <div>
                        <div className='contact-icons_'><BsFillTelephoneFill/></div>
                        <div className='contact-icons_'><TiMessage/></div>
                        <div className='contact-icons_'><AiOutlineCopy/></div>
                    </div>
                </div>
                <div className='detail'>
                    <h3>Issue Details</h3>
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
                    <pre>    Issue Reports</pre>
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
