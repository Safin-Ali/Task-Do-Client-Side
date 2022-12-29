import React from 'react';
import { useFetchWithQuery } from '../../hooks/fetchWithHeader';

const MyTask = () => {

    const [data] = useFetchWithQuery('http://localhost:5000/my-task');

    return (
        <div>
            
        </div>
    );
};

export default MyTask;