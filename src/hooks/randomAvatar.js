import axios from 'axios';

const randomAvatar = async () => {
    const res = await axios.get('http://localhost:5000/avatar')
    return res.data
}

export default randomAvatar;
