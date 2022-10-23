
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { convertNumber } from "../functions/convert";
import { UseSelectorProps } from "../types/Types";
import { LoadingPreview, PreviewContainer } from "./preview.styled";
import adidas from './adidas.png'

const PreviewContainerr= () => {
    const { data, isLoading } = useSelector((state : UseSelectorProps) => state.products);
    
    if(!isLoading){
        return (
            <>
            <PreviewContainer>
                       <img src={adidas} alt="img" />
                        <div>
                        <h3>NEW</h3>
                        <h4>ARRIVAL</h4>
                        <p>Shop Now</p>
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