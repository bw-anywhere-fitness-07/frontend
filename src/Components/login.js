import react, {useState} from 'react'
import styled from 'styled-components'


export default function Login(props) {
    
    return(
        <CardStyle>
            <div className='card'>
           <h1>Login</h1> 
           <div>
               <form >
                   <label>
                    <h3>Username</h3>
                    <input name = 'name' type = 'text' value = {props.username}  />
                    </label>
                    <label>
                    <h3>Password</h3>
                    <input name = 'name' type = 'text' value = {props.password}  />
                    </label>
                    <button>submit</button>
               </form>
           </div>
           <div>
               
           </div>
           </div>
        </CardStyle>
    )
};

const CardStyle = styled.div `
 .card{
     border: 2px black;
 }
`