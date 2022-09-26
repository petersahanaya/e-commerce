import { MainContainer } from "./main.styled";
import PreviewContainerr from "../../component/previewContainer";
import { useSelector, useDispatch} from "react-redux";
import { UseSelectorProps } from "../../types/Types";
import { useEffect } from "react";
import Card from "../../component/card";
import News from "../../component/news";
import { fetchProducts } from "../../redux/feature/productsSlice";

const Main = () => {
    const {isLoading, data} = useSelector((state : UseSelectorProps) => state.products);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchProducts('10'));
    }, [dispatch]);

  return (
    <MainContainer>
        {data.length > 0 && <>
            <PreviewContainerr/>
            <Card/>
            <News/>
        </>}
    </MainContainer>
  )
}

export default Main