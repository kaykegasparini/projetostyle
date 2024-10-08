import React, { useState } from "react";
import { SidebarContainer, SidebarButton, Overlay, DropdownButton } from '../styles/styles';
import { Link, useLocation } from "react-router-dom";

// Componente Sidebar
const Sidebar = ({ isOpen, closeSidebar }) => {
    const location = useLocation();
    const [isCadastroDropdownOpen, setCadastroDropdownOpen] = useState(false);
    const [isConsultaDropdownOpen, setConsultaDropdownOpen] = useState(false);

    // Funções para alternar a visibilidade dos dropdowns
    const toggleCadastroDropdown = () => {
        setCadastroDropdownOpen(!isCadastroDropdownOpen);
    };

    const toggleConsultaDropdown = () => {
        setConsultaDropdownOpen(!isConsultaDropdownOpen);
    };

    // Função para determinar o conteúdo da sidebar com base na rota
    const getSidebarContent = () => {
        switch (location.pathname) {
            case "/login":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Voltar</SidebarButton>
                    </>
                );
            case "/cadastroUsuario":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Home</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroProduto">Cadastro Produto</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroFornecedor">Cadastro Fornecedor</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/produtos">Consultar Produtos</DropdownButton>
                                <DropdownButton as={Link} to="/fornecedores">Consultar Fornecedores</DropdownButton>
                                <DropdownButton as={Link} to="/usuarios">Consultar Usuários</DropdownButton>
                            </>
                        )}
                    </>
                );
            case "/cadastroProduto":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Home</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroUsuario">Cadastro Usuário</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroFornecedor">Cadastro Fornecedor</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/produtos">Consultar Produtos</DropdownButton>
                                <DropdownButton as={Link} to="/fornecedores">Consultar Fornecedores</DropdownButton>
                                <DropdownButton as={Link} to="/usuarios">Consultar Usuários</DropdownButton>
                            </>
                        )}
                    </>
                );
            case "/cadastroFornecedor":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Home</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroUsuario">Cadastro Usuário</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroProduto">Cadastro Produto</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/produtos">Consultar Produtos</DropdownButton>
                                <DropdownButton as={Link} to="/fornecedores">Consultar Fornecedores</DropdownButton>
                                <DropdownButton as={Link} to="/usuarios">Consultar Usuários</DropdownButton>
                            </>
                        )}
                    </>
                );
            case "/produtos":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Home</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroUsuario">Cadastro Usuário</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroFornecedor">Cadastro Fornecedor</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroProduto">Cadastro Produto</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/fornecedores">Consultar Fornecedores</DropdownButton>
                                <DropdownButton as={Link} to="/usuarios">Consultar Usuários</DropdownButton>
                            </>
                        )}
                    </>
                );
            case "/usuarios":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Home</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroUsuario">Cadastro Usuário</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroFornecedor">Cadastro Fornecedor</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroProduto">Cadastro Produto</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/fornecedores">Consultar Fornecedores</DropdownButton>
                                <DropdownButton as={Link} to="/produtos">Consultar Produtos</DropdownButton>
                            </>
                        )}
                    </>
                );
            case "/fornecedores":
                return (
                    <>
                        <SidebarButton as={Link} to="/">Home</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroUsuario">Cadastro Usuário</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroFornecedor">Cadastro Fornecedor</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroProduto">Cadastro Produto</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/produtos">Consultar Produtos</DropdownButton>
                                <DropdownButton as={Link} to="/usuarios">Consultar Usuários</DropdownButton>
                            </>
                        )}
                    </>
                );
            case "/":
                return (
                    <>
                        <SidebarButton as={Link} to="/login">Login</SidebarButton>

                        {/* Botão do Dropdown de Cadastro */}
                        <SidebarButton onClick={toggleCadastroDropdown}>
                            Cadastro
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Cadastro */}
                        {isCadastroDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/cadastroUsuario">Cadastro Usuário</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroProduto">Cadastro Produto</DropdownButton>
                                <DropdownButton as={Link} to="/cadastroFornecedor">Cadastro Fornecedor</DropdownButton>
                            </>
                        )}

                        {/* Botão do Dropdown de Consulta */}
                        <SidebarButton onClick={toggleConsultaDropdown}>
                            Consulta
                        </SidebarButton>

                        {/* Conteúdo do Dropdown de Consulta */}
                        {isConsultaDropdownOpen && (
                            <>
                                <DropdownButton as={Link} to="/produtos">Consultar Produtos</DropdownButton>
                                <DropdownButton as={Link} to="/fornecedores">Consultar Fornecedores</DropdownButton>
                                <DropdownButton as={Link} to="/usuarios">Consultar Usuários</DropdownButton>
                            </>
                        )}
                    </>
                );
            default:
                return (
                    <>
                        <SidebarButton as={Link} to="/">Voltar</SidebarButton>
                    </>
                );
        }
    };

    return (
        <>
            <Overlay isOpen={isOpen} onClick={closeSidebar} />
            <SidebarContainer isOpen={isOpen}>
                {getSidebarContent()}
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
