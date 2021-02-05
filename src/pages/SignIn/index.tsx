import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content } from './styles';

import logo from '../../assets/logo.png';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O email é obrigatório!')
          .email('Digite um email válido!'),
        password: Yup.string().required('Senha incorreta!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        console.log(errors);
      }
    }
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

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
