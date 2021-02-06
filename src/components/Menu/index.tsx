import React, { useCallback, useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

import { Container, ToggleButton } from './styles';

import logo from '../../assets/logo.png';

const Menu: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleTransition = useCallback(() => setIsMenu(oldValue => !oldValue), []);

  return (
    <>
      <Container isMenuActive={isMenu}>
        <img src={logo} alt="Top Fit" />

        <aside>
          <a href="/">Instrutores</a>
          <a href="/">Membros</a>
        </aside>
      </Container>

      <ToggleButton isMenuActive={isMenu} onClick={handleTransition}>
        {isMenu ? <FiX size={28} /> : <FiMenu size={28} />}
      </ToggleButton>
    </>
  );
};

export default Menu;
