import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { UseSelectorPropsDetail } from "../../types/Types";
import { IoIosArrowBack } from 'react-icons/io'
import { useEffect } from "react";
import { ContainerDetail, DetailProductLoading } from "./detail.styled";
import { convertNumber } from "../../functions/convert";
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillCartFill, BsFillPlusCircleFill } from 'react-icons/bs'
import { fetchProductId } from "../../redux/feature/getProductIdSlice";
import { increaseQuantity, decreaseQuantity } from "../../redux/feature/getProductIdSlice";

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch<any>();
    const { data, isLoading } = useSelector((state : UseSelectorPropsDetail) => state.getProductId);

    useEffect(() => {
       dispatch(fetchProductId(id!))
    }, [dispatch]);

        return (
            <ContainerDetail>
        <header>
            <Link to={'/'}>
                <IoIosArrowBack/>
            </Link>
            <h4>Detail Products</h4>
            <Link to='/product/cart'>
                <BsFillCartFill/>
            </Link>
        </header>
        {!isLoading ? <section>
            <nav>
            <img src={data.images?.[0]} alt={data.title} />
            </nav>
            <h6>{data?.category?.name}</h6>
            <article>
                <h3>{data?.title}</h3>
                <p>{data?.description}</p>
                <h4>{convertNumber(data?.price)}</h4>
            </article>
            <div>
                <main>
                    <AiOutlineMinusCircle
                    />
                        <p>{data.quantity}</p>
                    <BsFillPlusCircleFill />
                </main>
                <Link to=''>Add To Cart</Link>
            </div>
        </section> : <>
                <DetailProductLoading>
                    <section></section>
                    <nav></nav>
                    <nav></nav>
                    <div>
                    <main></main>
                    <main></main>
                    </div>
                </DetailProductLoading>
            </>
        }
    </ContainerDetail>
  )

}

export default DetailProduct