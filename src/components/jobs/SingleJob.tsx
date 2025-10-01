import { fetchBlogData } from "@/lib/fetchblogdata";
import { Job } from "@/types/job";
import Link from "next/link";
import { FaShareSquare } from "react-icons/fa";
import { fetchJobData } from "@/lib/fetchjobdata";

const SingleJob = ({ job }: { job: Job }) => {
  const { title, tags, publishDate, position, location, type } = job;

  return (
    <div className="flex items-center justify-between border-b border-gray-700 px-2 py-4 transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-800">
      <div>
        <Link
          href="/job-details"
          className="text font-medium text-blue-500 hover:underline"
        >
          {position}
        </Link>
        <div className="mt-0.5 flex gap-4 text-xs text-gray-400">
          <span>{location}</span>
          <span>{type}</span>
        </div>
      </div>
      <Link
        href={`/job-details/${job.id}`}
        className="text-gray-400 transition hover:text-white"
      >
        <FaShareSquare size={16} />
      </Link>
    </div>
  );
};

export default SingleJob;
