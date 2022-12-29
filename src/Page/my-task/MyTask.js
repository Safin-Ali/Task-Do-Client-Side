import React from 'react';
import { useFetchWithJWT } from '../../hooks/fetchHooks';

const MyTask = () => {

    const [data] = useFetchWithJWT('http://localhost:5000/my-task');

    return (
        <div>
            
        </div>
    );
};

export default MyTask;