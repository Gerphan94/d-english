import React from 'react';
import ViewRow from './wordRowView';

function WordTable() {
    return (
        <div className='w-2/3 top-0'>
            <div className='top-0 sticky bg-white pt-2'>
                <div className='flex w-full bg-slate-700 text-white text-md p-1'>
                    <div className='w-10 text-center'>#</div>
                    <div className='w-2/3 text-left ml-5'>English</div>
                    <div className='w-2/3 text-left'>Vietnamese</div>
                </div>
            </div>
            <table className='w-full'>
                <tbody>
                    <ViewRow />
                </tbody>
            </table>
           
        </div>
    );
}

export default WordTable;

