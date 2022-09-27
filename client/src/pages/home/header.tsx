import { BiLeftArrow } from 'react-icons/bi';
import { ArrowUp, HeaderContainer } from './header.styled';
import { BsFillArrowUpCircleFill, BsSearch } from 'react-icons/bs';
import { UseInView } from '../../functions/UseInView';
import { Link } from 'react-router-dom';


const Header = () => {
  const { elementRef, isInView } = UseInView({rootMargin : '0px', threshold : 0});
  return (
    <>
    <HeaderContainer id='header' ref={elementRef}>
      <nav>
      <BiLeftArrow />
      </nav>
      <section>
        <Link to='/search'><BsSearch/></Link>
      </section>
    </HeaderContainer>
    {isInView &&
      <ArrowUp>
      <a href="#header">
      <BsFillArrowUpCircleFill/>
      </a>
    </ArrowUp>
    }
    </>
  )
}

export default Header