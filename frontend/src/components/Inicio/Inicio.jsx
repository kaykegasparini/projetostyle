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
            <Link to={"/cadastroFornecedor"}>Cadastro de Fornecedor / </Link>
            <Link to={"/cadastroProduto"}>Cadastro de Produto / </Link>
            <br />
            <h1>Consulta</h1>
            <Link to={"/usuarios"}>Usuarios / </Link>
            <Link to={"/fornecedores"}>Fornecedores / </Link>
            <Link to={"/produtos"}>Produtos / </Link>
        </>
    )
}

export default Inicio;