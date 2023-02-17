import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();


  return (

  <C.Container2>
      
      <div class="image">
      <img src= '/Senfio-White.png' width={370} height={130}></img></div>
  

    <C.Container>
    <h3>&nbsp;/melodicmorphine&nbsp;<br></br>&nbsp;</h3>
    
  

    
    
    </C.Container>
    <Button Text="Desconectar" onClick={() => [signout(), navigate("/")]}>
        Logout </Button>
    </C.Container2>
  );
};

export default Home;