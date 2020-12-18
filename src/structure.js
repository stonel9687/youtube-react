import React from 'react'
import SideBar from './sidebar'
import Videos from './videos'

const Structure=() => {
    return(
        <div className='d-flex'>
        <SideBar/>
        <Videos/>
        </div>
    )
}

export default Structure