import { FooterContainer } from "./footer.styled"
import { BiCart,BiHomeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';


const Footer = () => {
  return (
    <FooterContainer>
        <section>
            <BiHomeAlt/>
        </section>
        <nav>
            <BiCart/>
        </nav>
        <section>
            <CgProfile/>
        </section>
    </FooterContainer>
  )
}

export default Footer