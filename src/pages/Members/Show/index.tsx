import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../../components/Button';

import { Container, Background, Content, Member } from './styles';

const Create: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Background />

      <Content>
        <button type="button" onClick={() => history.goBack()}>
          <FiChevronLeft />
          Voltar
        </button>

        <h1>Descrição</h1>

        <Member>
          <div>
            <span>Nome</span>
            <span>Rodrigo Silvério</span>
          </div>

          <div>
            <span>Email</span>
            <span>r.souza@gmail.com</span>
          </div>

          <div>
            <span>Instrutor</span>
            <span>Murilo Benito</span>
          </div>

          <div>
            <span>Nascimento</span>
            <span>12/07/1996</span>
          </div>

          <div>
            <span>Aula(s)</span>
            <div className="skills">
              <span>Musculação</span>
              <span>CrossFit</span>
              <span>Natação</span>
            </div>
          </div>

          <div>
            <span>Sexo</span>
            <span>Masculino</span>
          </div>

          <div>
            <span>Tipo sanguíneo</span>
            <span>A+</span>
          </div>

          <div>
            <span>Peso (kg)</span>
            <span>1.69</span>
          </div>

          <div>
            <span>Altura (m)</span>
            <span>1.69</span>
          </div>

          <Button type="button">
            <Link to="/instructors/update/id">Editar</Link>
          </Button>
        </Member>
      </Content>
    </Container>
  );
};

export default Create;
