import { useSelector } from "react-redux";
import { ApiProps, UseSelectorProps } from "../types/Types";
import { CardContainer, CardTopSale } from "./card.styled";
import { convertNumber } from "../functions/convert";
const Card = ({ sale = "Hot Sales"}) => {
    const {isLoading, data, isError} = useSelector((state : UseSelectorProps) => state.products);
  return (data && 
    <CardTopSale>
      <main>
        <h5>{sale}</h5>
        <p>See All</p>
      </main>
    <CardContainer >
        {data.map((s : ApiProps) => (
            <section key={s.id}>
                <img src={s.images[0]} alt="" />
                <div>
                <h4>{s.title}</h4>
                <p>{convertNumber(s.price)}</p>
                </div>
                <p>{s.description}</p>
            </section>
        ))}
    </CardContainer>
    </CardTopSale>
  )
}

export default Card