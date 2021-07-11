import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
const DbInfo = () => {
    const [getDetails,setGetDetails]=useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5055/getInfo?email='+loggedInUser.email,{
            method:"GET",
            headers:{
                "Content-Type": 'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(result=>setGetDetails(result))
    },[loggedInUser.email])
    console.log(getDetails);
    return (
        <div>
            {
                getDetails.map(singleInfo=><li key={singleInfo._id}>name: {singleInfo.name}, email: {singleInfo.email}</li>)
            }
        </div>
    );
};

export default DbInfo;