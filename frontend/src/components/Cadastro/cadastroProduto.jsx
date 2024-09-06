import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFornecedores, registerProduct } from '../../services/authService';
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';
import { FormContainer, FormTitle, Input, SubmitButton, StyledSelect, Label, InputField, StyledForm, StyledOption } from '../styles/styles';

function CadastroProduto() {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState(null);
    const [fornecedor, setFornecedor] = useState([]);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState('');
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
                const fornecedor = await getFornecedores();
                setFornecedor(fornecedor);
            } catch (error) {
                console.error('Erro ao buscar fornecedores:', error);
            }
        };

        fetchFornecedores();
    }, []);

    const enviarDados = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('quantidade', quantidade);
        formData.append('preco', preco);
        formData.append('imagem', imagem);
        formData.append('fornecedorSelecionado', fornecedorSelecionado);

        console.log(nome, quantidade, preco, imagem, fornecedorSelecionado)

        try {
            const data = await registerProduct(formData);

            if (data.sucess) {
                alert('Cadastro realizado!');
            } else {
                alert('Erro: ' + data.message);
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <FormContainer>
                <FormTitle>Cadastro Produto</FormTitle>
                <StyledForm onSubmit={enviarDados}>
                    <InputField>
                        <Input
                            type="text"
                            name="nome"
                            value={nome}
                            required
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Label>Nome</Label>
                    </InputField>
                    <InputField>
                        <Input
                            type="text"
                            name="quantidade"
                            value={quantidade}
                            required
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <Label>Quantidade</Label>
                    </InputField>

                    <InputField>
                        <Input
                            type="text"
                            name="preco"
                            value={preco}
                            required
                            onChange={(e) => setPreco(e.target.value)}
                        />
                        <Label>Preço</Label>
                    </InputField>
                    <InputField>
                        <Input
                            type="file"
                            name="imagem"
                            onChange={(e) => setImagem(e.target.files[0])}
                        />
                        <Label>Imagem</Label>
                    </InputField>
                    <StyledSelect
                        name="fornecedor"
                        value={fornecedorSelecionado}
                        onChange={(e) => setFornecedorSelecionado(e.target.value)}
                    >
                        <StyledOption value="">Selecione um fornecedor</StyledOption>
                        {fornecedor.map((fornecedor) => (
                            <StyledOption key={fornecedor.fornecedorID} value={fornecedor.fornecedorID}>
                                {fornecedor.fornecedorNome}
                            </StyledOption>
                        ))}
                    </StyledSelect>
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                </StyledForm>
            </FormContainer>
        </>
    );
}

export default CadastroProduto;
