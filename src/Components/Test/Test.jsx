import React from 'react';
import {useEffect,useState} from "react";


const Test = () => {

    const [dogData,setData] = useState([]);

    const fetchData = async () => {
        let url = "https://dog.ceo/api/breeds/image/random"
        try{
            let response = await fetch(url)
            let data = await response.json()
            setData(data);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(dogData)
    },[]);


  return (
    <div className="Test">
        <div className="result">
            <img src={dogData.message} alt="" />
        </div>
        <button className="btn" onClick={fetchData}>Click Here</button>
    </div>
  )
}

export default Test