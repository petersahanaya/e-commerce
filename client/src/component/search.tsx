import { useEffect, useState } from "react";
import { GrFormClose } from 'react-icons/gr';
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { convertNumber } from "../functions/convert";
import Footer from "../pages/home/footer";
import { SearchProduct } from "../redux/feature/searchSlice";
import { ApiProps, UseSelectorPropsSearch } from "../types/Types";
import { NewsContainer } from "./news.styled";
import { SearchContainer, SearchHeading } from "./search.styled";

const Search = () => {
    const { data } = useSelector((state : UseSelectorPropsSearch) => state.search);
    const dispatch = useDispatch<any>();
    const [search, setSearch] = useState('');
    const [result, setResult] = useState<ApiProps[]>([]);

    useEffect(() => {
        if(!data.length){
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
            <Link to="/"><IoIosArrowBack/></Link>
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

        {search && <>
            {data.length > 0 && <>
            <SearchHeading>
                <h3>Product's</h3>
            </SearchHeading>
                {result.map((s) => (
                    <>
        <NewsContainer key={s.id}>
                        <Link to={`/product/${s.title}/${s.id}`}>
                        <section>
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
        </>
        }
    </SearchContainer>
    <Footer/>
    </>
  )
}

export default Search