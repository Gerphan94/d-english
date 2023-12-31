/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";


function SectionForm({ subject_id, sections, setSections }) {

    const [isOpenSectionForm, setIsOpenSectionForm] = useState(false);
    console.log(sections);
    const handleClickSectionForm = (e) => {
        e.preventDefault();
        setIsOpenSectionForm(!isOpenSectionForm);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const section_name = formJson["name"].trim();

        try {
            const response = await fetch(process.env.REACT_APP_API_URL + 'add_section/' + subject_id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "section_name": section_name

                }),
            });

            if (response.ok) {
                const data = await response.json();
                const new_data = data;
                setSections([...sections, new_data]);
                setIsOpenSectionForm(false);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }

    }

    return (
        <div className='flex mb-40'>
            {isOpenSectionForm ? (
                <form autoComplete='off' method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className='flex gap-2'>
                        <label htmlFor='section-name' className='text-gray-400'>Title</label>
                        <input
                            type='text'
                            name='name'
                            id='section-name'
                            required={true}
                            className='border rounded-md outline-none px-3 pt-0.5' />
                        <button
                            type='submit'
                            className='aspect-w-1 aspect-h-1 w-7 border rounded-sm cursor-pointer bg-green-600 opacity-80 hover:opacity-100 flex items-center justify-center text-white'

                        >

                            <FaCheck />
                        </button>
                        <a
                            href='#'
                            className='aspect-w-1 aspect-h-1 w-7 border border-red-600 rounded-sm cursor-pointer opacity-80 hover:opacity-100 flex items-center justify-center text-red-600'
                            onClick={(e) => handleClickSectionForm(e)}
                        >
                            <FaXmark />
                        </a>
                    </div>
                </form>

            ) : (
                <button
                    className='text-blue-400 hover:underline'
                    onClick={(e) => handleClickSectionForm(e)}>
                    Add Section
                </button>
            )}
        </div>
    )
}

export default SectionForm;