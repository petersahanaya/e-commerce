
import adidas from './adidas.png';
import { PreviewContainer} from "./preview.styled";

const PreviewContainerr= () => {
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
}

export default PreviewContainerr