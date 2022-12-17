import React from 'react'
import "./dashboard.css"

import Tables from './Tables';
const student=["Course curriculum & content",
    "Homework and assignment related issues",
    "Class not started", 
    "Wrong course selection ",
    "Course enquiry",
    "Coupon not working or required",
    "Demo request",
    "Refund", 
    "Any type of payment issue for students ",
    "Technical issue on website ",
    "Unable to login ",
    "Join session ",
    "Recording not available ",
    "Incorrect reminder",
    "Not available to understand the homework ",
    "Other"]
    const educators=["Course curriculum and content ",
        "Educator support",
        "Want to join as teacher",
        "Want to leave OLL as Educator",
        "Teacher payment issue",
        "Batch cancellation", 
        "Rescheduling ",
        "Demo request",
        "Payment received or not", 
        "Technical issue on website",
        "Unable to login",
        "Join session",
        "Incorrect reminder",
        "Confirmation message not recieved on email & whatsapp",
        "Other"]
export default function Dashboard() {
    

    return (
        <>
            <div className="container">
                <div className='first-div'>
                    <div className='profile'>
                        <h3>Shakshi Verma</h3>
                        <div className='img'></div>
                    </div>
                </div>
            </div>
           
        <Tables query={[student]} heading="Student Support"/>
        <Tables query={[educators]} heading="Educator Support"/>
        

            
        </>
    )
}
