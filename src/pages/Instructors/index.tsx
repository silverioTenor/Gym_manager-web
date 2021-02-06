import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Menu from '../../components/Menu';

import { Container, View, Table } from './styles';

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
            <a href="/">Novo instrutor</a>
          </Button>
        </header>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Área(s)</th>
              <th>Nº Alunos</th>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="" alt="" /> <span>Rodrigo</span>
              </td>
              <td className="skills">
                <span>Musculação</span>
                <span>CrossFit</span>
                <span>Natação</span>
              </td>
              <td>7</td>
              <td>
                <Button pad="12px" size="14px">
                  <a href="/">Visualizar</a>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="" alt="" /> <span>Patrícia</span>
              </td>
              <td className="skills">
                <span>Dança</span>
                <span>Aeróbica</span>
              </td>
              <td>7</td>
              <td>
                <Button pad="12px" size="14px">
                  <a href="/">Visualizar</a>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="" alt="" /> <span>Gustavo</span>
              </td>
              <td className="skills">
                <span>Musculação</span>
                <span>CrossFit</span>
                <span>Aeróbica</span>
              </td>
              <td>7</td>
              <td>
                <Button pad="12px" size="14px">
                  <a href="/">Visualizar</a>
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
