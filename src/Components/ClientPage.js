import React, {useState} from 'react'
import ClientClasses from './ClientClasses'
import styled from 'styled-components'
import crunch from '../images/crunch.jpg'
import dummyData from "../dummy-data/classes";

export default function ClientPage() {
    const [AvailClasses, setAvailClasses] = useState(dummyData);

    return (
        <ClientPageStyle className='client-page-container'>
            <div className='left-side'>
                <div className='heading-container'>
                    <h2 className='client-heading'>FIND A CLASS</h2>
                </div>
                <div className='client-img'>
                <img className='crunchImg' src={crunch} alt="Girl in a jacket" width="600" height="400"/>
                </div>
            </div>
            <div className='right-side'>
                <div className='heading-right'>
                    <h3 className='top-text'>Are You Ready To Begin Your Next Fitness Journey? </h3>
                    <br/>
                    <h3 className='second-text'>Select an option below, and find available classes</h3>
                    {/* <button className='LocationSubmit'><text>⬇️⬇️⬇️</text></button> */}
                </div>
                {/* <div className='button-container'>
                    <h3>Select your location to view our schedules</h3>
                    <button className='LocationSubmit'><text>Click Here</text></button>
                </div> */}
                <button className='LocationSubmit'><text className="arrow">⬇️⬇️⬇️</text></button>
            </div>
            <div className='bottom-div'>
                    <h1>HELLO</h1>
            </div>
            <ClientClasses />
        </ClientPageStyle>
    )
}

const ClientPageStyle = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
/* height: 80vh; */
background: linear-gradient(-45deg, #000000, #14213d, #fca311, #e5e5e5, #ffffff);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 180vh;


@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.bottom-div{
    margin:0;
    width:100%;
    height: 91vh;
    background-color: black;
}
.left-side{
    margin: 0;
    width: 50%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-content: space-around; 
    background-color: white;
.heading-container{
    display: flex;
    padding-top: 100px;
    margin-left: 80px;
    width: 50%;
    
.client-heading{
    color: #2B2B2B;
    font-size: 5rem;
    font-weight: bold;
}
}
.client-img{
    padding-top: 50px;
    margin-left: 50px;
    border: 3px black;
    overflow: hidden;
.crunchImg{
    border-radius: 50%;
    border: 10px black;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
    transition: transform .5s ease;
}
.client-img:hover .crunchI{
    transform: scale(1.5);
}
}
}

.right-side{
    margin:0;
    width:50%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
.heading-right{
    /* margin-top: 30px; */
    padding: 20px;
    /* margin-left: 80px; */
    width:75%;
    height:70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: #F7F2F2;
    border-radius: 2.5rem;
    box-shadow: 0 10px 20px rgba(0,0,0,.2); */
    
.top-text{
    color: white;
    text-shadow: 2px 2px 10px gray;
    font-size: 4rem;
    text-align: left;
    text-decoration: underline;
}
.second-text{
    margin-left: 40px;
    color: white;
    font-size: 3rem;
    text-align: right;
}
}
.LocationSubmit{
    display: flex;
    justify-content: center;
    align-content: color;
    cursor: pointer;
        border: 0px solid #3498db;
        background-color: transparent;
        height: 20px;
        width: 10px;
        color: #3498db;
        font-size: 5rem;
        margin-bottom: 40px;
        margin-right: 868px;

.arrow{
    font-weight: bold;
    background-position: left;
    color: white;
    transition: transform .2s;
}
 }
 .arrow:hover{
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
    transform: scale(1.1);

    /* text-transform: uppercase; */
 }
 /* .LocationSubmit */
}
/* .button-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 50%;
    background-color: #E5E5E5;
    margin-bottom: 30px;
    /* box-shadow: 0 10px 20px rgba(0,0,0,.2); */
/* h3{
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
} */ 

}
`
// 
//     /* margin: 20px;
// height: 5rem;
// background-color: darkblue;
// box-shadow: 0 10px 10px rgba(0,0,0,.2);

// border-radius: 2rem; */
/* border:none; */