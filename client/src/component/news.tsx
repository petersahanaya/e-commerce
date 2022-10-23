import { useSelector } from "react-redux";
import { ApiProps, UseSelectorProps } from "../types/Types";
import { NewsContainer, NewsHeading, NewsLoadingContainer } from "./news.styled"
import { convertNumber } from "../functions/convert";
import { Link } from "react-router-dom";

const News = () => {
    const {isLoading, data} = useSelector((state : UseSelectorProps) => state.products);
    const previewLoad = [1,2, 3, 4, 5, 6, 7, 8];

    if(!isLoading){
        return (
            <>
            <NewsHeading>
            <h3>Product's</h3>
            </NewsHeading>
            <NewsContainer>
                {isLoading && <p>Loading...</p>}
                {data && <>   
                    {data.map((s : ApiProps) => (
                        <Link key={s.id} to={`/product/${s.title}/${s.id}`}>
                        <section key={s.id}>
                            <img src={s.images[0]} alt={s.title} />
                            <nav>
                                <h4>{s.title}</h4>
                                <p>{convertNumber(s.price)}</p>
                            </nav>
                            <p>{s.description}</p>
                        </section>
                        </Link>
                    ))}
                </>}
            </NewsContainer>
            </>
          )
    }else {
        return (
            <NewsLoadingContainer>
                {previewLoad.map((s, i) => (
                    <section key={i}>
                        <header></header>
                        <nav></nav>
                        <nav></nav>
                    </section>
                ))}
            </NewsLoadingContainer>
        )
    }
  
}

export default News