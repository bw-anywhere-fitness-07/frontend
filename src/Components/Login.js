import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const userChange = (evt) => {
    setUsername(evt.target.value)
    console.log(evt)
  }

  const passChange = (evt) => {
      setPassword(evt.target.value)
      console.log(evt)
  }

  const onSubmit = () => {
    // axios
  }

    return(
        <CardStyle>
            <div className='cardLogin'>
                    <h1>Log in</h1> 
                    <div>
                        <form onSubmit={onSubmit}>
                            <div className='username-login'>
                                <label htmlFor='username'>Username</label>
                                <input id='username' name = 'name' type = 'text' value = {username} placeholder='username' onChange={userChange}/>
                            </div>
                            <div className='password-login'>
                                <label htmlFor='password'>Password</label>
                                <input id='password' name = 'password' type = 'password' value = {password} placeholder='password' onChange={passChange}/>
                            </div>
                            <div>
                                <label>Remember me</label>
                                <input class="checkbox" id=" rememberMe" type="checkbox" />
                            </div>
                            <div>
                                <button className='formSubmit'>submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='signup'>
                        <Link to='/signup' className="signup-link">
                            <h5>Not A Member?</h5>
                        </Link>
                    </div>
                
            </div>
        </CardStyle>
    )
};

const CardStyle = styled.div `
     display: flex;
     justify-content: center;
     align-content: center;
     flex-direction: column;
     width:100%;
     height: 80vh;
     /* margin-top:170px; */
    
 

 .cardLogin{
    display: flex;
    align-items: space-around;
     align-self: center;
     flex-direction: column;
    width: 30%;
    height: 70vh;
    background-color: #FBFFFB;
    border: 1px black;
    border-radius: 20px;
    box-shadow:10px 10px 50px grey;
    h1{
        color: black

    }
    input{
        border-radius: 10px;
        height: 5rem;
    }
 }
 .formSubmit{
     background-color: black;

 }
 
`