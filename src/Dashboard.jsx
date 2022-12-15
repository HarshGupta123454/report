import React, { useState } from 'react'
import "./dashboard.css"
import { BsFillBellFill} from "react-icons/bs";
import Side from './Side';
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
        <Side disp={disp}/>

            
        </>
    )
}
