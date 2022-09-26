import { BiLeftArrow } from 'react-icons/bi';
import { HeaderContainer } from './header.styled';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <HeaderContainer ref={headerRef}>
      <nav>
      <BiLeftArrow />
      </nav>
      <section>
      <input placeholder='Search for a products'/>
      <div>
        <BsSearch/>
      </div>
      </section>
    </HeaderContainer>
  )
}

export default Header