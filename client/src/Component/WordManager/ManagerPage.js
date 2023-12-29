import React, { useState } from 'react';
import PageHeader from './PageHeader';

function ManagerPage() {



    const [curSubject, setCurSubject] = useState([]);

    return (

        <div className='mt-16'>
            <PageHeader setCurSubject={setCurSubject} />
            {curSubject.value}
        </div>
    )
}

export default ManagerPage;