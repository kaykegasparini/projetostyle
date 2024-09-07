import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';

function Inicio() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </>
    )
}

export default Inicio;