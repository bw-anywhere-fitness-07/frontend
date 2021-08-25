import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';

const initialValues = {
    username: "",
    password: ""
  }
  
export default function Login() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
  
//   const userChange = (evt) => {
//     setUsername(evt.target.value)
//     console.log(evt)
//   }
//   const passChange = (evt) => {
//       setPassword(evt.target.value)
//       console.log(evt)
//   }
// const onSubmit = () => {
//   // axios
// }

    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory();

    const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        console.log(formValues)
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/auth/login', formValues)
        .then((res) => {
        push('/user/classes')
        })
        .catch((err)=> console.log(err));
    };

    return(
        <CardStyle>
            <div className='cardLogin'>
                <h4>Log in</h4> 
                <div className='formStyle'>
                    <form onSubmit={handleLoginSubmit}>
                        <div className='username-login'>
                            <label htmlFor='username'>Username</label>
                            <input 
                            id='username' 
                            name = 'name' 
                            type = 'text' 
                            value = {formValues.Linkusername} 
                            placeholder='username' 
                            onChange={handleChanges}/>
                        </div>
                        <div className='password-login'>
                            <label htmlFor='password'>Password</label>
                            <input 
                            id='password' 
                            name = 'password' 
                            type = 'password' 
                            value = {formValues.password} 
                            placeholder='password' 
                            onChange={handleChanges}/>
                        </div>
                        <div className='check'>
                            <label>Remember me</label>
                            <input 
                            class="checkbox" 
                            id=" rememberMe" 
                            type="checkbox" />
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
  align-items: center;
  height: 80vh;
  background-color: #e5e5e511;
 

    .cardLogin{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 58rem;
        width: 45rem;
        border-radius: 40px;
        background-color: white;
        box-shadow: 0px 0px 20px 20px #e5e5e557;
    h4{
        padding: 3rem 2rem 0;
        font-size: 4rem;
        border-bottom: 5px black;

    }
    .formStyle{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        width: 75%;
        height: 100%;
    }
    .username-login input{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
        padding: 2px 8px;
        border: 2px solid #444;
        border-radius: 1rem;
        height: 5rem;
        font-size: 2rem;
        padding: 0 2rem;
    }
    .password-login input{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
        padding: 2px 8px;
        border: 2px solid #444;
        border-radius: 1rem;
        height: 5rem;
        font-size: 2rem;
        padding: 0 2rem;
    }
.check{
    width:50%;
    padding-top: 20px
}
.checkbox{
    /* display: flex;
    flex-direction: row;
    align-items: baseline;
    align-content: center; */
    margin-top: 9px;
    padding: 10px; 
}
 }
 .formSubmit{
    width: 100%;
  height: 5rem;
  border-radius: 2.5rem;
  margin: 5rem 0;
  font-size: 2rem;
  transition: 0.5s;
  background-size: 200%;
  color: white;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  background-color: #118ab2;
  background-image: linear-gradient(319deg, #118ab2 0%, #06d6a0 37%, #ffd166 100%);
 }
 .formSubmit:hover{
    background-position: right;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
 }
 .signup{
     padding-bottom: 10px;
    h5{
        color: gray
    }
    h5:hover{
        color: purple;
        font-weight: bold;
        text-decoration: underline;
    }
 }
`