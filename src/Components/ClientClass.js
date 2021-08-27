import React, {useState} from 'react'
import styled from 'styled-components'
import dummyData from "../dummy-data/classes";


export default function ClientClasses() {
    const [classes] = useState(dummyData)
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <div>
            <h2 className='class-header'>Available Classes</h2>
            <div className='searchBar'>
                <input type="text" placeholder="Search for a class..." onChange={event => {setSearchTerm(event.target.value)}}/>
            </div>
        <div className='client-page-container'>
            <ClassesCard className='client-class-container'>
            {classes.filter((item) => {
                if (searchTerm == '') {
                    return item
                } else if (item.type.toLowerCase().includes(searchTerm.toLowerCase())){
                   return  item
                   
                }console.log(item)
            }).map((item) => {
                return (
                <div className='client-class'>
                    <div className='class-content-container'>
                        <div className='class-hdr'>
                            <h3>{item.type}</h3>
                            <p>{item.date}</p>
                            <p>{item.time}</p>
                            <p>{item.intensity}</p>
                            <p>{item.location}</p>
                        </div>
                    </div>
                </div>
                )
            })}
            </ClassesCard>
        </div>
        </div>
    )}

// export default function ClientClass(props) {
//     const {course} = props
//     return(
//         <ClassesCard>
//         <h3 className="card-heading">{course.type}</h3>
//         <div>
//             <div>
//             {course.date} @ {course.time}
//             <span> -- length: {course.duration}</span>
//             </div>
//             <div>level: {course.intensity}</div>
//             <div>location: {course.location}</div>
//             <div>
//             registered: {course.registered}/{course.capacity}
//             </div>
//         </div>
//         <div>
//             <button className='add-bttn'>Add Class</button>
//         </div>
//         </ClassesCard>
//     )
// }

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
    .bottom-heading{
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
}
`