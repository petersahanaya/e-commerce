import { AiFillCheckCircle } from "react-icons/ai"
import { PopUpContainer } from "./toast.styled"

const Toast = ({text = "Item Was Added"}) => {
  return (
    <PopUpContainer>
        <section>
            <nav>
                <AiFillCheckCircle/>
            </nav>
            <p>{text}</p>
        </section>
    </PopUpContainer>
  )
}

export default Toast