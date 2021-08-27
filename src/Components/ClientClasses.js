// Client view of the classes

import React, { useState } from 'react'
import styled from 'styled-components'
import ClientClass from './ClientClass';
import dummyData from "../dummy-data/classes";

export default function ClientClasses() {
    const [classes] = useState(dummyData)
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <StyledClasses className='client-page-container'>
            <div className='top-style'>
          <h2 className='class-header'>🏋🏾‍♀️Available Classes🏃‍♀️</h2>
            <div className='searchBar'>
                <input type="text" className='searchbar' placeholder="Search for a class..." onChange={event => {setSearchTerm(event.target.value)}}/>
            </div>
            </div>
            <div className='client-class-container'>
            <div className='fullSpace'>
            {classes.filter((item) => {
                if (searchTerm == '') {
                    return item
                } else if (item.type.toLowerCase().includes(searchTerm.toLowerCase())){
                   return  item
                }
            }).map((item) => {
                return (
                
                <div className='client-class'>
                    <div className='class-content-container'>
                        <div className='class-header'>
                            <h3>{item.type}</h3>
                            <h4><text className='bold'>Instructor:</text> {item.instructor_name}</h4>
                            <p><text className='bold'>When:</text> {item.date} -- {item.time}</p>
                            <p><text className='bold'>Level:</text> {item.intensity}</p>
                            <p><text className='bold'>Location:</text> {item.location}</p>
                           
                        </div>
                        <div className='button'>
                          <button className='add-bttn'>Add Class</button>
                          </div>
                    </div>
                </div>
                
                )
            })}
            </div>
            </div>
        </StyledClasses>    
)
}


const StyledClasses = styled.div `
width: 100%;
height: auto;
display: flex;
flex-direction: column;
.top-style{
    display: flex;
flex-direction: column;
width: 100%;
.searchbar{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    border-radius: 1rem;
    font-size: 2.5rem;
    color: #14213d;
    input{
        width: 100%;
    }
}
}
.class-header{
    color: #e5e5e5;

}

.fullSpace{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.client-class{
    padding: 10px;
    border-radius: 1rem;
    background-color: #e5e5e5 ;
    width: 300px;
    height: 250px;
    margin-top:40px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
 h3{
    color: black;
}
p{
    color: black;
}
h4{
    color: black;
}
.button{
    width: 100%;
}
.add-bttn{
        padding: 10px;
        background: #003459 ;
        border-radius: 1.5rem;
    }
    .add-bttn:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,.2);
    }
.bold{
    font-weight: bold;
    font-size: 2rem;
}
`