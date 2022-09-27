import { BiLeftArrow } from 'react-icons/bi';
import { ArrowUp, HeaderContainer } from './header.styled';
import { BsFillArrowUpCircleFill, BsSearch } from 'react-icons/bs';
import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
    <HeaderContainer id='header' ref={headerRef}>
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
    <ArrowUp>
      <a href="#header">
      <BsFillArrowUpCircleFill/>
      </a>
    </ArrowUp>
    </>
  )
}

export default Header