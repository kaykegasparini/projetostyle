import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { enviarEmail } from "./enviarEmail";
import Header from "../Header/header";
import Sidebar from "../Header/sidebar";
import { fetchUserName, loginUser } from "../../services/authService";
import { FormContainer, FormTitle, Input, SubmitButton, StyledLink, Label, InputField, StyledForm } from '../styles/styles';

function Login() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [codigo, setCodigo] = useState('');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
        setCodigo(generatedCode);
    }, []);

    useEffect(() => {
        if (email) {
            const fetchNomeUsuario = async () => {
                try {
                    const data = await fetchUserName(email);

                    if (data.nome) {
                        setNome(data.nome);
                    } else {
                        console.error(data.message);
                    }
                } catch (error) {
                    console.error('Erro ao buscar o nome do usuário:', error);
                }
            };

            fetchNomeUsuario();
        }
    }, [email]);


    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const data = await loginUser(email, senha);

            if (data.usuario) {
                alert('Login bem-sucedido!');
                enviarEmail(nome, codigo, email);
                navigate('/mfa', { state: { codigo, email } });
            } else {
                alert('Email ou senha incorretos!');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <FormContainer>
                <FormTitle>Login</FormTitle>
                <StyledForm onSubmit={handleLogin}>
                    <InputField>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label>Email</Label>
                    </InputField>
                    <InputField>
                        <Input
                            type="password"
                            name="password"
                            value={senha}
                            required
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <Label>Senha</Label>
                    </InputField>
                    <SubmitButton type="submit">Entrar</SubmitButton>
                </StyledForm>
                <StyledLink to={"/cadastroUsuario"}>Não tem cadastro? </StyledLink>
            </FormContainer>
        </>
    );
}

export default Login;
