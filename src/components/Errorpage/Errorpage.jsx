import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h1>Opps !!!! Page not found</h1>
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default Errorpage;