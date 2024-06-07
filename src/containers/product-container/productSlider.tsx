
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./productSlider.css";
import { CdlImage } from "../../components";

interface IProductSliderProps {
  childsFilesCLDId: string;
}

const ProductSlider = ({ childsFilesCLDId }: IProductSliderProps) => {

  let images: string[] = []

  try {
    images = JSON.parse(childsFilesCLDId);
  } catch {

  }

  const sliderImages = images.map(url => ({
    original: url,
  }));

  return (
    <div className="">
      <ImageGallery
        additionalClass=""
        items={sliderImages}
        showPlayButton={false}
        renderItem={(item) => {
          return (
            <CdlImage id={item.original} />
          )
        }}
        renderThumbInner={(item) => {
          return (
            <CdlImage id={item.original} />
          )
        }}
      />
    </div>
  );
};

export default ProductSlider;
