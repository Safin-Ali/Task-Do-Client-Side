import axios from "axios";

const generateJWT = async (email) => {
    const res = await axios.post('http://localhost:5000/crypto-jwt',{email});
    return localStorage.setItem('token',res.data.encryptKey);
};

export default generateJWT;