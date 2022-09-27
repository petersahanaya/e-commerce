import { AiFillCheckCircle } from "react-icons/ai"
import { PopUpContainer } from "./toast.styled"

const Toast = () => {
  return (
    <PopUpContainer>
        <section>
            <nav>
                <AiFillCheckCircle/>
            </nav>
            <p>Item Was Added</p>
        </section>
    </PopUpContainer>
  )
}

export default Toast