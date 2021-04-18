import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Menu from '../../../components/Menu';

import { Container, View, Table } from './styles';

import avatar from '../../../assets/avatar.jpg';

const Instructors: React.FC = () => {
  const handleSubmit = useCallback(() => console.log('Search'), []);

  return (
    <Container>
      <Menu />

      <View>
        <header>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="search" placeholder="Pesquisar pelo nome" />
            <Button pad="10px" type="submit">
              <FiSearch size={24} />
            </Button>
          </Form>

          <Button>
            <Link to="/members/create">Novo aluno</Link>
          </Button>
        </header>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Aula(s)</th>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={avatar} alt="Member" />
                <span>Rodrigo Silvério</span>
              </td>
              <td className="skills">
                <span>Musculação</span>
                <span>CrossFit</span>
                <span>Natação</span>
              </td>
              <td>
                <Button pad="12px" size="14px">
                  <Link to="/members/show/id">Visualizar</Link>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </View>
    </Container>
  );
};

export default Instructors;
