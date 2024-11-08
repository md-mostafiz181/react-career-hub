import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../ulility/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id}=useParams();
    const job = jobs.find(job =>job.id == id);
    // console.log(job)
    console.log(job)

    const handleJobApply = () =>{
        saveJobApplication(id)
        toast("You have already applied")
    }
    return (
        <div>
            <h1>job details of : {id}  </h1>

            <div className="jobs-container">
                <div className="left w-2/3 shadow-lg h-[300px] border">
                <h1>Job Description:{job.job_description} </h1>
                <h2>Job Responsibility: {job.job_responsibility}</h2>
                </div>
                <div className="right w-1/3 border shadow-lg h-[300px]">
                <h2>Salary :{job.salary} </h2>
                <h3>Job Title :{job.job_title} </h3>
                <button onClick={handleJobApply} className="btn btn-wide">Apply Now</button>
                </div>

                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;