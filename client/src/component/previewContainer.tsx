
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { convertNumber } from "../functions/convert";
import { UseSelectorProps } from "../types/Types";
import { LoadingPreview, PreviewContainer } from "./preview.styled";

const PreviewContainerr= () => {
    const { data, isLoading } = useSelector((state : UseSelectorProps) => state.products);
    
    if(!isLoading){
        return (
            <>
            <PreviewContainer>
                        <Link to={`/product/${data[1].title}/${data[1]?.id}`}><img src={data[1]?.images[1]} alt="img" /></Link>
                        <div>
                        <h4>{data[1]?.title}</h4>
                        <p>{data[1]?.description}</p>
                        <p>{convertNumber(data[1]?.price)}</p>
                        </div>
            </PreviewContainer>
            </>
          )
    }else {
       return ( <LoadingPreview>

            <section>

            </section>
        </LoadingPreview>)
    }
  
}

export default PreviewContainerr