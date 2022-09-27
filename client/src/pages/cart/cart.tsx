import { useEffect } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { convertNumber } from "../../functions/convert";
import { removeItem, reset } from "../../redux/feature/cartSlice";
import { UseSelectorPropsCart } from "../../types/Types"
import Footer from "../home/footer";
import { CartContainer, NoCartItemContainer, PopUpContainer } from "./cart.styled";

const Cart = () => {
    const { data, successAdd, successRemove } = useSelector((state : UseSelectorPropsCart) => state.cart);
    const total = data.reduce((acc, item) => item.price + acc, 0);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        setTimeout(() => {
            dispatch(reset())
        }, 3000)
    }, [successAdd, successRemove]);

    const transformY = {
        transform : successRemove ? 'translateY(4rem)' : ''
    }

  return (
    <CartContainer>
        {data.length > 0 && <>
            <header>
            <Link to={'/'}>
                <IoIosArrowBack/>
            </Link>
            <h4>My Cart</h4>
            </header>
            <main>

            {data.map((s) => <section onDoubleClick={() => dispatch(removeItem(s.id))} key={s.id}>
                <img src={s.images[0]} alt={s.title}/>
                <main>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
                <h5>{convertNumber(s.price)}</h5>
                </main>
                <div>
                <button>
                    <AiOutlineMinusCircle
                    />
                    </button>
                        <p>{s?.quantity}</p>
                    <button>
                    <BsFillPlusCircleFill />
                    </button>
                </div>
            </section>)}

            <footer>
            <nav>
                <h5>Total: </h5>
                <h3>{convertNumber(total)}</h3>
            </nav>
            <button>Check Out</button>
            </footer>
        </main>
        </>}
        {data.length < 1 && <>
        <NoCartItemContainer>
            <header>
            <Link to={'/'}>
                <IoIosArrowBack/>
            </Link>
            <h4>My Cart</h4>
            </header>
            <nav>
            <img src="https://img.icons8.com/color/344/shopping-cart-loaded.png" alt="png" />
            <h3>No Item Yet...</h3>
            <p>Please Go And Buying Something</p>
            </nav>
        </NoCartItemContainer>
        <Footer/>
        </>
        }
        {successRemove && <PopUpContainer style={transformY}>
            <section>
                <nav>
                <IoIosTrash/>
                </nav>
                <p>Item Has Been Removed</p>
            </section>
        </PopUpContainer>}
    </CartContainer>
  )
}

export default Cart