import React from 'react'
import styled from 'styled-components'

export default function ClientClass(props) {
    const {course} = props
    return(
        <ClassesCard>
        <h3 className="card-heading">{course.type}</h3>
        <div>
            <div>
            {course.date} @ {course.time}
            <span> -- length: {course.duration}</span>
            </div>
            <div>level: {course.intensity}</div>
            <div>location: {course.location}</div>
            <div>
            registered: {course.registered}/{course.capacity}
            </div>
        </div>
        <div>
            <button className='add-bttn'>Add Class</button>
        </div>
        </ClassesCard>
    )
}

const ClassesCard = styled.div `
    padding: 15px;
    border-radius: 1rem;
    background-color: #e5e5e5 ;
    width: 300px;
    height: 250px;
    margin-top:50px ;
    text-shadow: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    .card-heading{
        color:#003459 ;
        font-size: 3rem;
        text-decoration: underline;
    }
    .add-bttn{
        padding: 10px;
        margin: 20px;
        background: #003459 ;
        border-radius: 1.5rem;
    }
    .add-bttn:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,.2);
    }
`