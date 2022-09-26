import { FooterContainer } from "./footer.styled"
import { BiCart,BiHomeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <FooterContainer>
        <section>
          <Link to='/'>
            <BiHomeAlt/>
          </Link>
        </section>
        <nav>
          <Link to='/product/cart'>
            <BiCart/>
          </Link>
        </nav>
        <section>
          <Link to='/profile'>
            <CgProfile/>
          </Link>
        </section>
    </FooterContainer>
  )
}

export default Footer