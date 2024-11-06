import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";
import "./FeatureJobs.css"

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDataLength]=useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
                <h1 className="text-5xl font-bold text-center">
                Features Jobs : {jobs.length}{" "}
                </h1>
                <p className="font-bold text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
                odit?
                </p>
      </div>

      <div className="featuresJob-container">
        {
            jobs.slice(0,dataLength).map(job => <FeatureJob key={job.id} job={job}></FeatureJob>  )
        }
      </div>

      <div className={dataLength===jobs.length && "hidden"}>
         <button onClick={()=>setDataLength(jobs.length)} className="view-btn">Show all jobs</button>
      </div>
    </div>
  );
};

export default FeatureJobs;
