import { useState, useEffect } from 'react';
import { getUsers } from '../../services/authService';
import { delUser } from '../../services/delService';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';
import { Container, SubmitButton, Table, Th, Title, Td, AcaoButton } from '../styles/styles';

function TabelaUsuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const data = await getUsers();
                setUsuarios(data);
            } catch (error) {
                console.error('Erro ao buscar os usuários:', error);
            }
        }

        fetchUsuarios();
    }, []);

    const deletarUsuario = async (usuarioID) => {
        try {
            await delUser(usuarioID);
            alert('Usuário excluído com sucesso!');
            setUsuarios(usuarios.filter(usuario => usuario.usuarioID !== usuarioID));
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            alert('Erro ao excluir usuário');
        }
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <Container>
                <Title>Usuários Cadastrados</Title>
                <Table border={1}>
                    <thead>
                        <tr>
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Email</Th>
                            <Th>Ação</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <Td>{usuario.usuarioID}</Td>
                                <Td>{usuario.usuarioNome}</Td>
                                <Td>{usuario.usuarioUsuario}</Td>
                                <Td>
                                    <AcaoButton onClick={() => deletarUsuario(usuario.usuarioID)}>
                                        Excluir
                                    </AcaoButton>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TabelaUsuario;
