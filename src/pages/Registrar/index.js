import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { registrar } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("E-mails apresentados não são iguais");
      return;
    }

      else if(email.indexOf("@senfio.com") == -1){
        setError("O e-mail não possui o domínio correto");
        return;
      }

      else if(senha.length <8){
        setError("A senha deve possuir no mínimo 8 caracteres")
        return;
      }

      

    const res = registrar(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
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
          type="email"
          placeHolder="Confirme seu e-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeHolder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já possui uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entrar</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Registrar;