// Client view of the classes

import React, { useState } from 'react'
import styled from 'styled-components'
import ClientClass from './ClientClass';

export default function ClientClasses(props) {
    const {classes} = props
    
    return (
        <StyledClasses className='client-page-container'>
         {classes.map((course, index) =>(
             <ClientClass key={index} course={course}/>
         ))
         
            }
        </StyledClasses>    
    )
};


const StyledClasses = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: stretch;
margin-bottom: 15px;
`