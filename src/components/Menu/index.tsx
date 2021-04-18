import React, { useCallback, useState } from 'react';
import { FiX, FiMenu, FiLogOut } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import { Container, ToggleButton } from './styles';

import logo from '../../assets/logo.png';

const Menu: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleTransition = useCallback(() => setIsMenu(oldValue => !oldValue), []);

  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <>
      <Container isMenuActive={isMenu}>
        <img src={logo} alt="Top Fit" />

        <aside>
          <Link to="/instructors">Instrutores</Link>
          <Link to="/members">Membros</Link>
          <Link to="/" title="Sair">
            <Form onSubmit={handleSubmit}>
              <button type="submit">
                <FiLogOut />
              </button>
            </Form>
          </Link>
        </aside>
      </Container>

      <ToggleButton isMenuActive={isMenu} onClick={handleTransition}>
        {isMenu ? <FiX size={28} /> : <FiMenu size={28} />}
      </ToggleButton>
    </>
  );
};

export default Menu;
