import { Helmet } from "react-helmet-async";
import TopSliderSection from "../TopSliderSection/TopSliderSection";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import Review from "../../ExtraSection/Review";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Instrument Of Percussion || Home</title>
            </Helmet>
            <TopSliderSection></TopSliderSection>
            <PopularInstructors></PopularInstructors>
            <Review></Review>
            <PopularClassesSection></PopularClassesSection>
        </div>
    );
};

export default Home;