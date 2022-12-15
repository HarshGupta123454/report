import React from 'react'
import "./dashboard.css"
import { BsFillBellFill } from "react-icons/bs";
export default function Dashboard() {
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
                            <td>Shreyaan Daga</td>
                            <td>0987654321</td>
                            <td>Query type</td>
                            <td>Status</td>
                            <td>Source</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>10:40</td>
                            <td>Shreyaan Daga</td>
                            <td>0987654321</td>
                            <td>Query type</td>
                            <td>Status</td>
                            <td>Source</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>10:40</td>
                            <td>Shreyaan Daga</td>
                            <td>0987654321</td>
                            <td>Query type</td>
                            <td>Status</td>
                            <td>Source</td>
                            <td>Action</td>
                        </tr>
                            <tr>
                                <td>01</td>
                                <td>10:40</td>
                                <td>Shreyaan Daga</td>
                                <td>0987654321</td>
                                <td>Query type</td>
                                <td>Status</td>
                                <td>Source</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>10:40</td>
                                <td>Shreyaan Daga</td>
                                <td>0987654321</td>
                                <td>Query type</td>
                                <td>Status</td>
                                <td>Source</td>
                                <td>Action</td>
                            </tr>

                    </table>
                </div>
            </div>
        </>
    )
}
