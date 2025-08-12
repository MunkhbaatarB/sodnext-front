import SectionTitle from "../Common/SectionTitle";
import jobsdata from "@/components/jobs/JobsData";
import SingleJob from "./SingleJob";

const Jobs = () => {
  // Sample job data
  const jobListings = [
    {
      id: 1,
      title: "Software Engineer",
      location: "San Francisco, CA",
      type: "Full-Time",

      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/blog-01.jpg",
      author: {
        name: "Samuyl Joshi",
        image: "/images/blog/author-01.png",
        designation: "Graphic Designer",
      },
      tags: ["creative"],
      publishDate: "2025",
    },
    {
      id: 2,
      title: "Software Engineer",
      location: "San Francisco, CA",
      type: "Full-Time",

      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/blog-01.jpg",
      author: {
        name: "Samuyl Joshi",
        image: "/images/blog/author-01.png",
        designation: "Graphic Designer",
      },
      tags: ["creative"],
      publishDate: "2025",
    },
    {
      id: 3,
      title: "Software Engineer",
      location: "San Francisco, CA",
      type: "Full-Time",

      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/blog-01.jpg",
      author: {
        name: "Samuyl Joshi",
        image: "/images/blog/author-01.png",
        designation: "Graphic Designer",
      },
      tags: ["creative"],
      publishDate: "2025",
    },
  ];

  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {jobsdata.map((job) => (
            <div
              key={job.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleJob job={job} />
            </div>
          ))}
        </div>

        {/* <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  1
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  2
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  3
                </a>
              </li>
              <li className="mx-1">
                <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                  ...
                </span>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  12
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Jobs;
