"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleJob from "./SingleJob";
import { Job } from "@/types/job";
import { fetchJobData } from "@/lib/fetchjobdata";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobData();
        setJobs(data);
      } catch (err) {
        console.error(err);
        setError("Ажлын мэдээлэл авахад алдаа гарлаа");
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  if (loading) return <p className="text-center">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleJob job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
