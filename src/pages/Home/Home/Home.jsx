import { Helmet } from "react-helmet-async";
import TopSliderSection from "../TopSliderSection/TopSliderSection";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Instrument Of Percussion || Home</title>
            </Helmet>
            <TopSliderSection></TopSliderSection>
        </div>
    );
};

export default Home;