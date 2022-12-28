import axios from 'axios';

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