import React from 'react';
import {useEffect,useState} from "react";


const Test = () => {

    const [data,setData] = useState([]);

    const fetchData = async () => {
        let url = ""
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
        fetchData()
    },[]);


  return (
    <div className="Test">
        <h1>{data.id}</h1>
        <button className="btn" onClick={fetchData}>Click Here</button>
    </div>
  )
}

export default Test