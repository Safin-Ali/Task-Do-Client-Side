import axios from 'axios';
import { useState,useEffect } from 'react';



export const useFetchWithJWT = (path) => {

    const[data,setData] = useState(null);

    useEffect(()=>{
                axios.get(path,{headers:{encryptJWT: `Bearer ${localStorage.getItem('token')}`}})
                .then(res => setData(res.data))
                .catch(() => setData(null));

            },[])
    return [data]

};

const fetchWithData = async (path,header) => {

    try{
        const res = await axios.post(path,header);
        console.log(res.data)
        return res.data;
    }
    catch(e){
        return e.message;
    }
};

export default fetchWithData;