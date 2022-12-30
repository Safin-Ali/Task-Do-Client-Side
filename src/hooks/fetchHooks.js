import axios from 'axios';
import { useState,useEffect } from 'react';



export const useFetchWithJWT = (path,header) => {

    const[data,setData] = useState(null);

    useEffect(()=>{
                axios.get(path,{headers:{encryptJWT: `Bearer ${localStorage.getItem('token')}`,header: header}})
                .then(res => setData(res.data))
                .catch(() => setData(null));

            },[])
    return [data,setData]

};

const fetchWithData = async (path,body) => {

    try{
        const res = await axios.post(path,body);
        console.log(res.data)
        return res.data;
    }
    catch(e){
        return e.message;
    }
};

export const fetchWithPatch = async (path,body) => {

    try{
        const res = await axios.patch(path,body);
        return res.data;
    }
    catch(e){
        return e.message;
    }
};

export default fetchWithData;