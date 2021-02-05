import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content } from './styles';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Okay!');
  }, []);

  return (
    <Container>
      <Background>
        <div>
          <img src={logo} alt="Gym Manager" />
        </div>
      </Background>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Área de acesso</h1>

          <Input type="email" name="email" icon={FiMail} placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Digite sua senha"
          />

          <Button>Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
