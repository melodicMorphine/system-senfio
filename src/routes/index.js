import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Logar from "../pages/Logar";
import Registrar from "../pages/Registrar";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Logar />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Logar />} />
          <Route exact path="/registrar" element={<Registrar />} />
          <Route path="*" element={<Logar />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;