import { Helmet } from "react-helmet-async";
import TopSliderSection from "../TopSliderSection/TopSliderSection";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import Review from "../../ExtraSection/Review";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Instrument Of Percussion || Home</title>
            </Helmet>
            <TopSliderSection></TopSliderSection>
            <Review></Review>
            <PopularClassesSection></PopularClassesSection>
        </div>
    );
};

export default Home;