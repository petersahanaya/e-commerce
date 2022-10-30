import { useSelector } from "react-redux";
import { ApiProps, UseSelectorProps } from "../types/Types";
import { CardContainer, CardLoadingContainer, CardTopSale } from "./card.styled";
import { convertNumber } from "../functions/convert";
import { Link } from "react-router-dom";
const Card = ({ sale = "Hot Sales"}) => {
    const {data,isLoading} = useSelector((state : UseSelectorProps) => state.products);
    const previewLoad = [1,2, 3, 4, 5, 6, 7, 8]
  
    return (
      <CardTopSale>
      <main>
        <h5>{sale}</h5>
      </main>
    {!isLoading ? <CardContainer >
        {
          data.map((s : ApiProps) => (
            <Link key={s.id} to={`/product/${s.title}/${s.id}`}>
            <section >
                <img src={s.images[0]} alt="" />
                <div>
                <h4>{s.title}</h4>
                <p>{convertNumber(s.price)}</p>
                </div>
                <p>{s.description}</p>
            </section>
            </Link>
        ))}
    </CardContainer> : <CardLoadingContainer>
            {previewLoad.map((s, i) => (
              <section key={i}>
                <header></header>
                <nav></nav>
                <nav></nav>
              </section>
            ))
            }
      </CardLoadingContainer>}
    </CardTopSale>
  )

}

export default Card