import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ApiProps, UseSelectorPropsSearch } from "../types/Types"
import { SearchContainer } from "./search.styled";
import { SearchProduct } from "../redux/feature/searchSlice";
import {GrFormClose} from 'react-icons/gr'
import Footer from "../pages/home/footer";
import { NewsContainer } from "./news.styled";
import { Link } from "react-router-dom";
import { convertNumber } from "../functions/convert";

const Search = () => {
    const { data, isLoading } = useSelector((state : UseSelectorPropsSearch) => state.search);
    const dispatch = useDispatch<any>();
    const [search, setSearch] = useState('');
    const [result, setResult] = useState<ApiProps[]>([]);

    useEffect(() => {
        if(data.length < 1){
            dispatch(SearchProduct());
        }

        if(search){
            setResult(() => {
                return data.filter((s) => {
                   return s.title.toLowerCase().search(search.toLowerCase()) != -1;
                })
            })
        }
    }, [dispatch, search])

  return (
    <>
    <SearchContainer>
        <header>
            <main>
            <input value={search} type="text" placeholder="Search For A Products" onChange={(e) => setSearch(e.target.value)}/>
            {search && <button onClick={() => setSearch('')}>
                <GrFormClose/>
            </button>}
            </main>
        </header>
        
        {!search &&
        <footer>
        <img src='https://img.icons8.com/color/344/product--v1.png' alt='icons'/>
            <h4>Searching For A Product?</h4>
            <p>Search Whatever Product You Want !</p>
        </footer>
        }

        {search && <main>
            {data.length > 0 && <>
                <h3>Product's</h3>
                {result.map((s) => (
                <>
        <NewsContainer key={s.id}>
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
            </NewsContainer>
                </>
                ))}

                {result.length < 1 && <>
                    <p style={{textAlign : 'center', letterSpacing :'.1rem'}}>There's No item That You Search</p>
                </>}
            </>}
        </main>
        }
    </SearchContainer>
    <Footer/>
    </>
  )
}

export default Search