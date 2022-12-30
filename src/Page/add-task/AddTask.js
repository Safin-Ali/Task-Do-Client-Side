import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { LoadingSpinModal } from '../../components/loader-spin/LoadingSpin';
import { AuthData } from '../../Context/AuthContext';

async function uploadImage (imgData,func) {
    try{
        const fileData = new FormData();

        fileData.append("image",imgData[0]);
    
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`,fileData);
    
        if(res.data.success){
            return res.data.data.display_url;
        }
    }
    catch(e){
        window.alert(e.message);
        return func(false)
    }
}

const AddTask = () => {

    const {userData} = useContext(AuthData);

    const [onPosting,SetPostBool] = useState(false);

    const handleTaskForm = async (event) => {
        event.preventDefault();
        const form = event.target;
        try{
            const task = form.taskName.value;
            const img = form.img;
            let taskImgURL = null;

            if(!task) return window.alert('Please Add Task Name');

            SetPostBool(true);
    
            if(img.files.length){
                const imgURL = await uploadImage(img.files,SetPostBool);
                taskImgURL = imgURL;
            }
    
            const dataFormat = {taskName: task,userEmail:userData.email,taskImgURL};

            axios.post('http://localhost:5000/add-task',dataFormat)
            .then(res => {
                if(res.data.acknowledged) {
                    form.reset();
                    window.alert('task Added Successfully')
                    return SetPostBool(false)
                };
            })
            .catch(e => {                
                window.alert(e.message);
                return SetPostBool(false)
            });
        }
        catch(e){
            console.log(e.message);
        }
    };

    return (
        <>
            <section className={`text-center my-5`}>
            <form onSubmit={handleTaskForm} className='w-[90%] mx-auto md:w-[40%]'>
                <TextField id="outlined-basic" name={'taskName'} sx={{my: 2, width: '100%'}} label="Add Task" variant="outlined" disabled={onPosting}/>
                    
                <div className="flex items-center justify-center">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input name={'img'} id="dropzone-file" type="file" className="hidden" disabled={onPosting}/>
                    </label>
                </div>

                <Button variant="contained" type='submit' sx={{my: 2, width: '50%'}} disabled={onPosting}>Add Task</Button>

                {
                    onPosting && <LoadingSpinModal></LoadingSpinModal>
                }
            </form>
            </section>
        </>
    );
};

export default AddTask;