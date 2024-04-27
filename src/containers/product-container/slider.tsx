import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = () => {
  const images = [
    {
      original:
        "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
      thumbnail:
        "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
    },
    {
      original:
        "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
      thumbnail:
        "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
    },
    {
      original:
        "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
      thumbnail:
        "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
    },
  ];

  return (
    <ImageGallery additionalClass="max-w-[calc(100vw-48px)]" items={images} />
  );
};

export default Slider;
