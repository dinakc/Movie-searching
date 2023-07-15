import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../assets/avatar.jpg";
import img2 from "../assets/transf.jpg";
import img3 from "../assets/barbie.webp";
import img5 from "../assets/mermaid.webp";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img5 }];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1620}
        height={630}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};

export default Slider;
