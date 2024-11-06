import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);

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

      <div>
        {
            jobs.map(job => <FeatureJob key={job.id} job={job}></FeatureJob>  )
        }
      </div>
    </div>
  );
};

export default FeatureJobs;
