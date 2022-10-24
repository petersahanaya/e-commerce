import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { UseSelectorPropsCart, UseSelectorPropsDetail } from "../../types/Types";
import { IoIosArrowBack } from 'react-icons/io'
import { lazy, useEffect } from "react";
import { ContainerDetail, DetailProductLoading } from "./detail.styled";
import { convertNumber } from "../../functions/convert";
import {  AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillCartFill,  BsFillPlusCircleFill } from 'react-icons/bs'
import { fetchProductId } from "../../redux/feature/getProductIdSlice";
import { increaseQuantity, decreaseQuantity } from "../../redux/feature/getProductIdSlice";
import { addItem, reset } from "../../redux/feature/cartSlice";
const Toast = lazy(() =>import("../../component/toast"))

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch<any>();
    const { data, isLoading } = useSelector((state : UseSelectorPropsDetail) => state.getProductId);
    const { data : datas, successAdd } = useSelector((state : UseSelectorPropsCart) => state.cart);

    useEffect(() => {
        setTimeout(() => {
                dispatch(reset(''));
        }, 3000);
        if(parseInt(id!) !== data?.id){   
            dispatch(fetchProductId(id!));
        }
    }, [dispatch, successAdd]);

        return (
            <>
            {successAdd && <>
                <Toast/>
            </>}
            <ContainerDetail>
        <header>
            <Link to={'/'}>
                <IoIosArrowBack/>
            </Link>
            <h4>Detail Products</h4>
            <main>
            <Link to='/product/cart'>
                <BsFillCartFill/>
                {datas.length > 0 && <div></div>}
            </Link>
            </main>
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
                    <button onClick={() => dispatch(decreaseQuantity())} 
                    disabled={data?.quantity === 1}
                    >
                    <AiOutlineMinusCircle
                    />
                    </button>
                        <p>{data?.quantity}</p>
                    <button onClick={() => dispatch(increaseQuantity())}
                    disabled={data?.quantity === 5}
                    >
                    <BsFillPlusCircleFill />
                    </button>
                </main>
                <Link to='' onClick={() => dispatch(addItem(data))}>Add To Cart</Link>
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
        </>
  )

}

export default DetailProduct