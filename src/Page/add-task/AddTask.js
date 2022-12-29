import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'


const AddTask = () => {

    const handleTaskForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const task = form.taskName.value;
        console.log(task)
    };

    return (
        <>
            <section className={`text-center my-5`}>
            <form onSubmit={handleTaskForm}>
                <TextField id="outlined-basic" name={'taskName'} sx={{my: 2, width: '50%'}} label="Add Task" variant="outlined" />
                    
                <div className="flex items-center justify-center">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-1/2 h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>

                <Button variant="contained" type='submit' sx={{my: 2, width: '50%'}}>Add Task</Button>
            </form>
            </section>
        </>
    );
};

export default AddTask;