import { useSelector } from "react-redux";
import { ApiProps, UseSelectorProps } from "../types/Types";
import { NewsContainer } from "./news.styled"
import { convertNumber } from "../functions/convert";

const News = () => {
    const {isLoading, data, isError} = useSelector((state : UseSelectorProps) => state.products);
  return (
    <NewsContainer>
        <h3>Recenly Added</h3>
        {isLoading && <p>Loading...</p>}
        {data && <>   
            {data.map((s : ApiProps) => (
                <section>
                    <img src={s.images[0]} alt={s.title} />
                    <nav>
                        <h4>{s.title}</h4>
                        <p>{convertNumber(s.price)}</p>
                    </nav>
                    <p>{s.description}</p>
                </section>
            ))}
        </>}
    </NewsContainer>
  )
}

export default News