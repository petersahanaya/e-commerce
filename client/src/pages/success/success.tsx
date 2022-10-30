import kurir from './kurir.svg'
import { SuccessContainer } from './success.styled'
import { Link } from 'react-router-dom'
const Success = () => { 
  return (
    <SuccessContainer>   
        <section>
            <img src={kurir} alt="courier-img"/>
            <h4>
Your product is on its way, thank you for shopping at our store</h4>

    <Link to='/'>Continue Shopping</Link>
        </section>
    </SuccessContainer>
  )
}

export default Success