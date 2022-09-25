import { MainContainer, PreviewContainer } from "./main.styled";
import { useSelector, useDispatch} from "react-redux";
import { ApiProps, UseSelectorProps } from "../../types/Types";
import { useEffect, useState } from "react";
import { productAction } from "../../redux/reducers/productReducer";
import Card from "../../component/card";
import News from "../../component/news";
const Main = () => {
    const {isLoading, data, isError} = useSelector((state : UseSelectorProps) => state.products);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(productAction('10'))
    }, [dispatch]);

  return (
    <MainContainer>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{isError}</p>}
        {data.length > 0 && <>
            <PreviewContainer>
                <img src='https://api.lorem.space/image/fashion?w=640&h=480&r=1485' alt="img" />
                <div>
                <h4>Awesome Frozen Hat</h4>
                <p>The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7</p>
                <p>$466.99</p>
                </div>
            </PreviewContainer>
            <Card />
            <News/>
        </>}
    </MainContainer>
  )
}

export default Main