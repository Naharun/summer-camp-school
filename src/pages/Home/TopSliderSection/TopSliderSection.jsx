import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/images/img1.avif"
import img2 from "../../../assets/images/img2.avif"
import img3 from "../../../assets/images/img3.avif"
import img5 from "../../../assets/images/img5.avif"


const TopSliderSection = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Instrument Of Percussion</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Instrument Of Percussion</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Instrument Of Percussion</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Instrument Of Percussion</p>
                </div>
            </Carousel>
        </>
    );
};

export default TopSliderSection;