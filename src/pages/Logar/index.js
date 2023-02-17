import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

const Logar = () =>{
const { logar } = useAuth();
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [error, setError] = useState("");

const handleLogin = () => {
  if (!email | !senha) {
    setError("Preencha todos os campos");
    return;
  }

  const res = logar(email, senha);

  if (res) {
    setError(res);
    return;
  }

  navigate("/home");
};

return (

  <C.Container>
  <div class="image">
  <img src= './Senfio.png' width={350} height={230}></img></div>
  
    <C.Label></C.Label>
    <C.Content>
      <Input
        type="email"
        placeHolder="Digite seu e-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        type="password"
        placeHolder="Digite sua senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
      />
      <C.labelError>{error}</C.labelError>
      <Button Text="Entrar" onClick={handleLogin} />
      <C.LabelSignup>
        Não possui uma conta?
        <C.Strong>
          <Link to="/Registrar">&nbsp;Registre-se</Link>
        </C.Strong>
      </C.LabelSignup>
    </C.Content>
  </C.Container>

);
}

export default Logar;
