
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const { REACT_APP_API_URL } = process.env

const ProductSlider = ({ childsFilesUrl }: any) => {

  const sliderImages = JSON.parse(childsFilesUrl).map((url: string) => ({
    original: `${REACT_APP_API_URL}/public/products/${url}`,
    thumbnail: `${REACT_APP_API_URL}/public/products/${url}`,
    // originalClass: "h-[400px] flex items-center",
    // thumbnailClass: "h-24 overflow-hidden flex items-center",
  }));

  //max-w-[calc(100vw-48px)]

  return (
    <div className="">
      <ImageGallery
        additionalClass=""
        items={sliderImages}
        showPlayButton={false}
      />
    </div>
  );
};

export default ProductSlider;
