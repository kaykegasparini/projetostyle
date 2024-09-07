import { useEffect, useState } from "react";
import { getAllSuppliers } from "../../services/authService";
import { delSup } from '../../services/delService';
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';
import { AcaoButton, Container, Table, Td, Th, Title } from "../styles/styles";

function TabelaFornecedor() {
    const [fornecedores, setFornecedores] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        const fetchFornecedores = async () => {
            try {
                const data = await getAllSuppliers();
                setFornecedores(data);
            } catch (error) {
                console.error("Erro ao buscar fornecedores:", error);
            }
        };

        fetchFornecedores();
    }, []);

    const deletarFornecedor = async (fornecedorID) => {
        try {
            await delSup(fornecedorID);
            alert('Fornecedor excluído com sucesso!');
            setFornecedores(fornecedores.filter(fornecedor => fornecedor.fornecedorID !== fornecedorID));
        } catch (error) {
            const errorMessage = error.message;

            if (errorMessage.includes('foreign key')) {
                alert('Erro ao excluir: Este fornecedor está vinculado a outros registros');
            } else {
                alert('Erro ao excluir fornecedor');
            }
        }
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <Container>
                <Title>Fornecedores Cadastrados</Title>
                <Table border={1}>
                    <thead>
                        <tr>
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Estado</Th>
                            <Th>Telefone</Th>
                            <Th>Email</Th>
                            <Th>Categoria</Th>
                            <Th>Ação</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {fornecedores.map((fornecedor, index) => (
                            <tr key={index}>
                                <Td>{fornecedor.fornecedorID}</Td>
                                <Td>{fornecedor.fornecedorNome}</Td>
                                <Td>{fornecedor.fornecedorEstado}</Td>
                                <Td>{fornecedor.fornecedorTelefone}</Td>
                                <Td>{fornecedor.fornecedorEmail}</Td>
                                <Td>{fornecedor.categoriaNome}</Td>
                                <Td>
                                    <AcaoButton onClick={() => deletarFornecedor(fornecedor.fornecedorID)}>
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

export default TabelaFornecedor;
