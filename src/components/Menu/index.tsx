import React, { useCallback, useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

import { Container, ToggleButton } from './styles';

import logo from '../../assets/logo.png';

const Menu: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleButton = useCallback(() => setIsMenu(!isMenu), [isMenu]);
  return (
    <>
      <Container isMenuActive={isMenu}>
        <img src={logo} alt="Top Fit" />

        <aside>
          <a href="/">Instrutores</a>
          <a href="/">Membros</a>
        </aside>
      </Container>

      <ToggleButton isMenuActive={isMenu} onClick={handleButton}>
        {isMenu ? <FiX size={28} /> : <FiMenu size={28} />}
      </ToggleButton>
    </>
  );
};

export default Menu;
