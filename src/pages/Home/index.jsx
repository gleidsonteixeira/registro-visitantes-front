
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useBuscarCidades, useBuscarEstados } from '../../hooks/IBGEHooks';


const HomeContainer = styled.section`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  & form{
    width: 400px;
    & h3{
      text-align: center;
    }
    & label{
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
      color: #777;
      display: block;
    }
    & input{
      width: 100%;
      margin-bottom: 10px;
    }
    & .lado-a-lado{
      display: flex;
      justify-content: space-between;
      & .lado{
        width: calc(50% - 8px);
      }
    }
    & .p-dropdown{
      width: 100%;
    }
    & .p-button{
      width: 100%;
      margin-top: 16px;
    }
  }

`;

const Home = () => {

  const [genero, setGenero] = useState();
  const [estado, setEstado] = useState();
  const [cidade, setCidade] = useState();
  const generos = [
    {
      label: 'Masculino',
      value: 0
    },
    {
      label: 'Feminino',
      value: 1
    },
    {
      label: 'Outros',
      value: 2
    },
    {
      label: 'Prefiro não informar',
      value: 3
    },
  ];

  const { data: estados } = useBuscarEstados();
  const { data: cidades, refetch: cidadesRefetch } = useBuscarCidades(estado);

  useEffect(() => {
    cidadesRefetch();
  }, [estado, cidadesRefetch]);

  return (
    <HomeContainer>
      <form>
        <h3>Seja bem-vindo(a) visitante</h3>
        <label htmlFor="nome">Nome</label>
        <InputText
          id="nome" 
          placeholder="Digite seu nome"
        />
        <label htmlFor="cpf">CPF</label>
        <InputMask
          id="cpf" 
          placeholder="000.000.000-00"
          mask="999.999.999-99"
        />
        <label htmlFor="profissao">Profissão</label>
        <InputText
          id="profissao" 
          placeholder="Digite sua profissão"
        />
        <div className="lado-a-lado">
          <div className="lado">
            <label htmlFor="genero">Gênero</label>
            <Dropdown 
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              options={generos}
              optionLabel="label"
              optionValue="value"
              placeholder="Escolha um gênero"
            />
          </div>
          <div className="lado">
            <label htmlFor="idade">Idade</label>
            <InputText
              id="idade" 
              type="number"
            />
          </div>
        </div>
        <div className="lado-a-lado">
          <div className="lado">
            <label htmlFor="estado">Estado</label>
            <Dropdown 
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              options={estados}
              optionLabel="nome"
              optionValue="sigla"
              placeholder="Escolha um estado"
            />
          </div>
          <div className="lado">
          <label htmlFor="cidade">Cidade</label>
            <Dropdown 
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              options={cidades}
              optionLabel="nome"
              optionValue="nome"
              placeholder="Escolha uma cidade"
            />
          </div>
        </div>
        <Button 
          type="submit"
          label="Enviar"
        />
      </form>
    </HomeContainer>
  );
}

export default Home;