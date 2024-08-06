import MessageButton from "../../../component/MessageButton";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="relative">
        <Banner></Banner>
        <div>
          <MessageButton></MessageButton>
        </div>
    </div>
    );
};

export default Home;