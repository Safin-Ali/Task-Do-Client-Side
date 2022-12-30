import React, { useContext, useReducer, useState } from 'react';
import NoDataFound from '../../components/Error/NoDataFound';
import LoadingSpin, { LoadingSpinModal } from '../../components/loader-spin/LoadingSpin';
import Modal from '../../components/modal/Modal';
import TaskTable from '../../components/Table/TaskTable';
import { AuthData } from '../../Context/AuthContext';
import { useFetchWithJWT } from '../../hooks/fetchHooks';

const MyTask = () => {

    const {userData,onPosting,SetPostBool} = useContext(AuthData);

    const [open,setOpen] = useState(false);

    const [curModalData,setCurrModalData] = useState(null);

    const [data,setData] = useFetchWithJWT('http://localhost:5000/my-task',userData?.email);

    return (
        <>
            <section className={`mx-[10%] md:mx-[8%] my-3`}>
                {
                    !data && <LoadingSpin></LoadingSpin>
                }
                {
                    data?.length <= 0 && <NoDataFound>No Task Found</NoDataFound>
                }
                <div className={`grid grid-cols-1 hide-scrollbar pb-5 lg:grid-cols-3 hide-scrollbar-mz md:grid-cols-2 overflow-y-scroll gap-y-5 md:gap-x-5`}>
                {
                    data?.map(elm => <TaskTable setCurrModalData={setCurrModalData} key={elm._id} setOpen={setOpen} setData={setData} SetPostBool={SetPostBool} data={elm}></TaskTable>)
                }
                </div>
            </section>
            {
                    onPosting && <LoadingSpinModal></LoadingSpinModal>
            }
            {
                <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} duration-[700ms]`}>
                    <Modal setData={setData} setCurrModalData={setCurrModalData}  curModalData={curModalData} setOpen={setOpen}></Modal>
                </div>
            }
        </>
    );
};

export default MyTask;