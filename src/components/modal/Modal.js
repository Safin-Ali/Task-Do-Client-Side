import React, { useContext, useState } from 'react';
import { AuthData } from '../../Context/AuthContext';
import { fetchWithPatch } from '../../hooks/fetchHooks';

const Modal = ({setOpen,curModalData,setCurrModalData,setData}) => {

    const {SetPostBool} = useContext(AuthData);

    const handleDataUpdateTask = async e => {
        e.preventDefault();
        const updateValue = e.target.updateFeild.value;
        try{
            SetPostBool(true);
            const res = await fetchWithPatch('http://localhost:5000/task-update',{updateValue,id: curModalData?._id,email: curModalData?.userEmail});
            if(res.modifiedCount){
                setData(res.updateData);
            }
            setOpen(false);
            return SetPostBool(false)
        }
        catch(e){
            window.alert(e.message);
            setOpen(false);
            return SetPostBool(false)
        }
    }

    return (
        <>
        <div className={`inset-0 fixed flex justify-center items-center bg-[#00000045] w-full min-h-screen max-h-screen`}>
            <form onSubmit={handleDataUpdateTask} className={`bg-[#f7f1f1] shadow-md gap-y-5 rounded-[10px] flex flex-col justify-center items-center w-1/2 h-[30%]`}>
                <div className={`w-[80%] mx-auto`}>
                    <input name='updateFeild' type="text" placeholder={`Update Task Name`} className={`border focus:outline-none focus:shadow focus:border-none rounded-md w-full p-2`} defaultValue={curModalData?.taskName}/>
                </div>
                <div className={`text-white`}>
                    <button className={`py-1.5 px-3 rounded-md bg-green-700 mx-5`}>Update</button>
                    <button type='button' className={`py-1.5 px-3 rounded-md bg-red-700 mx-5`} onClick={()=> {
                        setOpen(false)
                        setCurrModalData(null)
                        }}>Cencel</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default Modal;