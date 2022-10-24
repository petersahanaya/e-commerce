import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PreviewContainerr from "../../component/previewContainer";
import { fetchProducts } from "../../redux/feature/productsSlice";
import { UseSelectorProps } from "../../types/Types";
import { MainContainer } from "./main.styled";
const Card = lazy(() =>import("../../component/card"))
const News = lazy(() => import("../../component/news"))

const Main = () => {
    const {isLoading, data} = useSelector((state : UseSelectorProps) => state.products);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    useEffect(() => {
      if(!data.length){
        dispatch(fetchProducts('12'));
      }
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