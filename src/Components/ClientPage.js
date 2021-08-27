import React, {useState} from 'react'
import ClientClasses from './ClientClasses'
import styled from 'styled-components'
import crunch from '../images/fitness4.jpg'
// import dummyData from "../dummy-data/classes";
import axios from 'axios'

// const initialValue = {dummyData}

export default function ClientPage() {
    
    const myName = "Samuel Dunder"; 

    return (
        <ClientPageStyle className='client-page-container'>
            <div className='left-side'>
                <div className='heading-container'>
                    <h2 className='client-heading'>FIND A CLASS</h2>
                </div>
                <div className='client-img'>
                <img className='crunchImg' src={crunch} alt="Gym equipment" width="600" height="400"/>
                </div>
            </div>
            <div className='right-side'>
                <div className='heading-right'>
                    <h3 className='top-text'>
                    Hi {myName},
                    <br/>
                    Are You Ready To Begin Your Next Fitness Journey? </h3>
                    <br/>
                    <h3 className='second-text'>Scroll or click below, and find available classes</h3>
                </div>
                <div className='LocationSubmit'>
                    <a href="#down" className="arrow">↓</a>
                </div>
            </div>
            <div className='bottom-div' >
            <div id='down'></div>
                    <ClientClasses/>
            </div>
        </ClientPageStyle>
    )
    };

 ////////////STYLING COMPONENTS///////////////

const ClientPageStyle = styled.div `
cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🪃</text></svg>") 16 0,auto; /*!emojicursor.app*/
scroll-behavior: smooth;
transition: transform 1s ease;
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
    display: flex;
flex-direction: column;
align-items: center;
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
    margin-left: 60px;
    width: 50%;
    
    
.client-heading{
    text-decoration: underline;
    color: #2B2B2B;
    font-size: 5rem;
    font-weight: bold;
}
}
.client-img{
    padding-top: 50px;
    margin-left: 50px;
    border: 3px black;
    /* overflow: hidden; */
.crunchImg{
    border-radius: 50%;
    border: 10px black;
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
}
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
    color: #e5e5e5;
    text-shadow: 2px 2px 10px gray;
    font-size: 4rem;
    text-align: left;
    text-decoration: underline;
}
.second-text{
    margin-left: 40px;
    color: #e5e5e5;
    font-size: 3rem;
    text-align: right;
    text-shadow: 2px 2px 10px gray;
}
}
.LocationSubmit{
    display: flex;
    justify-content: center;
    align-content: color;
        border: 0px solid #3498db;
        background-color: transparent;
        height: 20px;
        width: 10px;
        color: #3498db;
        font-size: 5rem;
        margin-bottom: 40px;
        margin-right: 0px;

.arrow{
    font-size: 5rem;
    font-weight: bold;
    background-position: left;
    transition: transform .2s;
    color: #3498db;
    transition: width 2s, height 4s;
}
 }
 .arrow:hover{
    font-size: 6rem;
    margin-right:5px;
 }
}

`


////////////JUNK///////////////////

/* .bottom-heading{
    color: #e5e5e5;
}
#searchWrapper{
    height: 5rem;
    width: 75%;
}
#searchBar{
    height: 5rem;
    border-radius: 1rem;
    width: 100%;
    font-size: 2.5rem;
    color: #14213d;
} */

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
// 
//     /* margin: 20px;
// height: 5rem;
// background-color: darkblue;
// box-shadow: 0 10px 10px rgba(0,0,0,.2);

// border-radius: 2rem; */
/* border:none; */
// ------->> However to link the username with API
    // const {searchedClasses} = useState()
    // const [searchTerm, setSearchTerm] = useState("");

    // const includesSearchTerm= (value) => {
    //     return value.toLowerCase().includes(searchTerm.toLowerCase());}
        
    //     const postMatchesSearchTerm= (availClasses) => {
    //     let fields = [];
    //     fields.push(availClasses.type);
    //     fields.push(availClasses.location);
    //     fields.push(availClasses.instructor_name);
    //     fields.push(availClasses.date);
    //     fields.push(availClasses.time);
    //     fields.push(searchTerm)
    //     return fields.find(includesSearchTerm);
    //     };
    //     const getFilteredClasses= (event) => {event.preventDefault(); availClasses.filter(postMatchesSearchTerm)};

    //     const inputHandler = (event) => {
    //          setSearchTerm(event.target.value);
    //         };
                // eslint-disable-next-line no-lone-blocks
                {/* <h1 className='bottom-heading' >🏃‍♀️What're Your Goals🏋️‍♂️</h1>
            <div id="searchWrapper">
                <form onSubmit={getFilteredClasses}>
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    className='searchbar'
                    placeholder="   Filter class by instructor, type, date, intensity, location, etc.."
                    onChange={inputHandler}
                />
                </form>
            </div> */}