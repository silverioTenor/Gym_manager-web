import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft, FiCalendar, FiMail, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Background, Content } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';

interface CreateFormData {
  avatar?: string;
  name: string;
  email: string;
  birth: Date;
  gender: 'male' | 'female';
  skills: Array<string>;
}

const Create: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: CreateFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Formato inválido').required('O email é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      history.push('/instructors');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <button type="button" onClick={() => history.goBack()}>
          <FiChevronLeft />
          Voltar
        </button>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Editar instrutor</h1>

          <Input name="name" icon={FiUser} placeholder="Nome do instrutor" />
          <Input type="email" name="email" icon={FiMail} placeholder="exemplo@mail.com" />
          <Input
            type="date"
            name="birth"
            icon={FiCalendar}
            placeholder="Nome do instrutor"
          />

          <div className="gender">
            <div>
              <Input type="radio" name="gender" value="male" />
              <span>Masculino</span>
            </div>
            <div>
              <Input type="radio" name="gender" value="Female" />
              <span>Feminino</span>
            </div>
          </div>

          <select name="blood">optio</select>

          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Create;
