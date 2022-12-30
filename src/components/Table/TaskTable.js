import { Button } from '@mui/material';
import React from 'react';
import { fetchWithPatch } from '../../hooks/fetchHooks';

const TaskTable = ({
    data,
    setData,
    SetPostBool
}) => {
    const {taskImgURL,userEmail,_id,taskName} = data;

    const handleCompleteTask = async (id,email) => {
        try{
            SetPostBool(true);
            const res = await fetchWithPatch('http://localhost:5000/add-task',{id,email});
            if(res.modifiedCount > 0) {
                setData(current => {
                    const remainingData = current.filter(elm => elm._id !== id);
                    return remainingData;
                })
                return SetPostBool(false)
            } 
        }
        catch(e){
            window.alert(e.message);
            return SetPostBool(false)
        }
    }

    const handleUpdateTask = (id,email) => {
        console.log(id,email)
    }

    return (
        <div className={`bg-[#F7F5F5] shadow-md rounded-[10px] py-2`}>
           <div className={``}>
                <img className={`mx-auto w-[150px] h-[150px] object-cover`} src={taskImgURL ? taskImgURL : 'https://i.ibb.co/cFgN4vq/Checklist.jpg'} alt="Task_Thumb" />
           </div>
           <div className={`my-2 text-center`}>
            <h4 className={`text-2xl mb-3 font-semibold`}>{taskName}</h4>

            <div className={`grid justify-center items-center grid-cols-1 gap-y-3 md:gap-y-0 md:grid-cols-3 md:gap-5 mx-[5%]`}>
                <Button variant="contained" type='submit' sx={{width: '100%',m:'0 auto',textAlign: 'center'}} onClick={()=>handleCompleteTask(_id,userEmail)}>Complete</Button>

                <Button variant="contained" type='submit' sx={{width: '100%',m:'0 auto',textAlign: 'center'}} onClick={()=>handleUpdateTask(_id,userEmail)}>Update</Button>

                <Button variant="contained" type='submit' sx={{width: '100%',m:'0 auto',textAlign: 'center'}} className={'hover:bg-green-700'} onClick={()=>handleUpdateTask(_id,userEmail)}>Delete</Button>
            </div>
           </div>
        </div>
    );
};

export default TaskTable;