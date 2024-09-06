import { useEffect, useState } from "react";
import { getProducts } from "../../services/authService";
import { Link } from "react-router-dom";
import { delProd } from "../../services/delService";
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';
import { AcaoButton, Container, Title, Table, Th, Td } from "../styles/styles";

function TabelaProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const data = await getProducts();
                setProdutos(data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    const deletarProduto = async (produtoID) => {
        try {
            await delProd(produtoID);
            alert('Produto excluído com sucesso!');
            setProdutos(produtos.filter(produto => produto.produtoID !== produtoID));
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            alert('Erro ao excluir produto');
        }
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <Container>
                <Title>Produtos Cadastrados</Title>
                <Table border={1}>
                    <thead>
                        <tr>
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Quantidade</Th>
                            <Th>Preço</Th>
                            <Th>Imagem</Th>
                            <Th>Fornecedor</Th>
                            <Th>Ação</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, index) => (
                            <tr key={index}>
                                <Td>{produto.produtoID}</Td>
                                <Td>{produto.produtoNome}</Td>
                                <Td>{produto.produtoQuantidade}</Td>
                                <Td>{produto.produtoPreco}</Td>
                                <Td>
                                    <img
                                        src={`http://localhost:3001/uploads/${produto.produtoImagem}`}
                                        alt={produto.produtoNome}
                                        width="100"
                                    />
                                </Td>
                                <Td>{produto.fornecedorNome}</Td>
                                <Td>
                                    <AcaoButton onClick={() => deletarProduto(produto.produtoID)}>
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

export default TabelaProdutos;
