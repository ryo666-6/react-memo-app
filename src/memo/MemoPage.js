import React from 'react'
import usePersist from '../Persist'
import AddForm from '../components/AddForm'
import FindForm from '../components/FindForm'
import DeleteForm from '../components/DeleteForm'
import Memo from './Memo'

const MemoPage = () => {
    const [mode, setMode] = usePersist('mode', 'default')

    return (
        <div>
            <h5 className='my-3'>mode: {mode}</h5>
            <div className='alert alert-primary'>
                <AddForm/>
                <FindForm/>
                <DeleteForm/>
            </div>
            <Memo/>
        </div>
    )
}

export default MemoPage