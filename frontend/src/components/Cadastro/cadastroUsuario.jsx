import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../Header/header';
import Sidebar from '../Header/sidebar';
import { registerUser } from '../../services/authService';
import { FormContainer, FormTitle, Input, SubmitButton, StyledLink, Label, InputField, StyledForm } from '../styles/styles';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const enviarDados = async (event) => {
        event.preventDefault();

        try {
            const data = await registerUser(nome, email, senha);

            if (data.sucess) {
                alert('Cadastro realizado!');
                navigate('/login');
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
                <FormTitle>Cadastro</FormTitle>
                <StyledForm onSubmit={enviarDados}>
                    <InputField>
                        <Input
                            type="text"
                            name="nome"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Label htmlFor="nome">Nome</Label>
                    </InputField>

                    <InputField>
                        <Input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label htmlFor="email">Email</Label>
                    </InputField>

                    <InputField>
                        <Input
                            type="password"
                            name="password"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <Label htmlFor="password">Senha</Label>
                    </InputField>

                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                </StyledForm>
            </FormContainer>
            <StyledLink to={"/login"}>Já tem cadastro?</StyledLink>
        </>
    );
}

export default Cadastro;
