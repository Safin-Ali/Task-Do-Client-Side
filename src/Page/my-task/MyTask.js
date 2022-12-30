import React, { useContext } from 'react';
import NoDataFound from '../../components/Error/NoDataFound';
import LoadingSpin from '../../components/loader-spin/LoadingSpin';
import { AuthData } from '../../Context/AuthContext';
import { useFetchWithJWT } from '../../hooks/fetchHooks';

const MyTask = () => {

    const {userData} = useContext(AuthData);

    const [data] = useFetchWithJWT('http://localhost:5000/my-task',userData?.email);

    console.log(data)

    return (
        <section className={``}>
            {
                !data ? <LoadingSpin></LoadingSpin> : ''
            }
            {
                !data?.length && <NoDataFound>No Task Found</NoDataFound>
            }
        </section>
    );
};

export default MyTask;