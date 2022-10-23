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
      <footer>
        <Link to="/">Product</Link>
        <Link to="/product/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </footer>
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