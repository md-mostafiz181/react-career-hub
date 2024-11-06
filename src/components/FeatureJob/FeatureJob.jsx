import { Link } from "react-router-dom";
import "./FeatureJob.css"


const FeatureJob = ({job}) => {

    const {id,job_title,logo,company_name,remote_or_onsite,location,job_type,salary}=job
    return (
        <div className="feature-job">
            <img src={logo} alt="" />
            <h1>{job_title}</h1>
            <h2>{company_name}</h2>
            <h2>{location}</h2>
            <Link><button>{remote_or_onsite}</button></Link>
            <button>{job_type}</button>
            <h2>{salary}</h2>

            <Link to={`/job/${id}`}>
            <button className="view-btn">View Details</button>
            </Link>
        </div>
    );
};

export default FeatureJob;