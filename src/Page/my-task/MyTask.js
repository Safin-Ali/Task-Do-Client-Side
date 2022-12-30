import React, { useContext } from 'react';
import NoDataFound from '../../components/Error/NoDataFound';
import LoadingSpin, { LoadingSpinModal } from '../../components/loader-spin/LoadingSpin';
import TaskTable from '../../components/Table/TaskTable';
import { AuthData } from '../../Context/AuthContext';
import { useFetchWithJWT } from '../../hooks/fetchHooks';

const MyTask = () => {

    const {userData,onPosting,SetPostBool} = useContext(AuthData);

    const [data,setData] = useFetchWithJWT('http://localhost:5000/my-task',userData?.email);

    return (
        <>
            <section className={`mx-[10%] md:mx-[8%] my-3`}>
                {
                    !data && <LoadingSpin></LoadingSpin>
                }
                {
                    !data?.length && <NoDataFound>No Task Found</NoDataFound>
                }
                <div className={`grid grid-cols-1 hide-scrollbar pb-5 lg:grid-cols-3 hide-scrollbar-mz md:grid-cols-2 overflow-y-scroll gap-y-5 md:gap-x-5`}>
                {
                    data?.map(elm => <TaskTable key={elm._id} setData={setData} SetPostBool={SetPostBool} data={elm}></TaskTable>)
                }
                </div>
            </section>
            {
                    onPosting && <LoadingSpinModal></LoadingSpinModal>
            }
        </>
    );
};

export default MyTask;