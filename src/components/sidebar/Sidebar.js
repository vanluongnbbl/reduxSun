import React, { useState, useEffect } from 'react'
import './sidebar.css'
import Category from './category/Category'
import Refine from './refine/Refine'
function Sidebar() {

    return (
        <aside>
            <div className="sidebar">

                <Category />
                <Refine />

            </div>
        </aside>
    )
}

export default Sidebar
