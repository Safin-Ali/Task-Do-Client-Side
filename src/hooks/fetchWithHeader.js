import axios from 'axios';
import { useState,useEffect } from 'react';



export const useFetchWithQuery = (path) => {

    const[data,setData] = useState(null);

    useEffect(()=>{
                axios.get(`${path}?encryptJWT=${localStorage.getItem('token')}}`)
                .then(res => setData(res.data))
                .catch(() => setData(null));

            },[])
    return [data]

};

const fetchWithHeader = async (path,header) => {

    try{
        const res = await axios.post(path,header);
        console.log(res.data)
        return res.data;
    }
    catch(e){
        return e.message;
    }
};

export default fetchWithHeader;