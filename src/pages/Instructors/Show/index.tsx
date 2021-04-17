import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../../components/Button';

import { Container, Background, Content, Instructor } from './styles';

const Create: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Background />

      <Content>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft />
          Voltar
        </button>

        <Instructor>
          <h1>Descrição</h1>

          <div>
            <span>Nome</span>
            <span>Rodrigo Silvério</span>
          </div>

          <div>
            <span>Habilidades</span>
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

          <Button type="button">
            <Link to="/instructors/update/id">Editar</Link>
          </Button>
        </Instructor>
      </Content>
    </Container>
  );
};

export default Create;
