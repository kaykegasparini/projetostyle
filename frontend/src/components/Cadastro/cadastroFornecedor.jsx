import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategorias, registerSupplier } from '../../services/authService';
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';
import { FormContainer, FormTitle, InputField, StyledForm, StyledOption, StyledSelect, SubmitButton, Input, Label } from "../styles/styles";

function CadastroFornecedor() {
    const [nome, setNome] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const categorias = await getCategorias();
                setCategorias(categorias);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchCategorias();
    }, []);

    const enviarDados = async (event) => {
        event.preventDefault();

        try {
            const data = await registerSupplier(nome, estado, telefone, email, categoriaSelecionada);

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
                <FormTitle>Cadastro Fornecedor</FormTitle>
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
                            name="estado"
                            value={estado}
                            required
                            onChange={(e) => setEstado(e.target.value)}
                        />
                        <Label>Estado</Label>
                    </InputField>
                    <InputField>
                        <Input
                            type="text"
                            name="telefone"
                            value={telefone}
                            required
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <Label>Telefone</Label>
                    </InputField>
                    <InputField>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label>E-mail</Label>
                    </InputField>
                    <Label>Categoria</Label>
                    <StyledSelect
                        name="categoria"
                        value={categoriaSelecionada}
                        onChange={(e) => setCategoriaSelecionada(e.target.value)}
                    >
                        <StyledOption value="">Selecione uma categoria</StyledOption>
                        {categorias.map((categoria) => (
                            <StyledOption key={categoria.idCategoria} value={categoria.idCategoria}>
                                {categoria.nomeCategoria}
                            </StyledOption>
                        ))}
                    </StyledSelect>
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                </StyledForm>
            </FormContainer>
        </>
    );
}

export default CadastroFornecedor;
