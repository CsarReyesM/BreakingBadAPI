import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%,#007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8s ease ;
    &:hover{
      cursor: pointer;
      background-size: 400px;
    }
  `;

function App() {
  const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
  // Crear Estado para almacenar frase
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(url);
    const fraseAPI = await api.json();
    setFrase(fraseAPI[0]);
    
  }

  // Cargar una Frase la primera vez
  useEffect(() => {

    consultarAPI();

  }, []);
    
    return (
    <>
    <Contenedor>
    {!frase ? null :  <Frase frase={frase} />}
    <Button onClick={consultarAPI} >Ver Dialogo</Button>
    </Contenedor>
    </>
  );
}

export default App;
