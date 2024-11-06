import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJobs from "../FeatureJobs/FeatureJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJobs></FeatureJobs>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;