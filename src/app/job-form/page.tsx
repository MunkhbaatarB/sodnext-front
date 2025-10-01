"use client";

import { useSearchParams } from "next/navigation";
import JobForm from "@/components/jobs/jobform";
import { Job } from "@/types/job";

const dummyJob: Job = {
  id: 1, // number төрөлтэй утга
  title: "Frontend Developer",
  position: "Frontend Developer",
  location: "Улаанбаатар",
  type: "Бүтэн цагийн",
  content: "Манай багт туршлагатай React хөгжүүлэгч хэрэгтэй байна.",
  image: "/images/job.jpg",
  paragraph: "Манай багт туршлагатай React хөгжүүлэгч хэрэгтэй байна.",
  author: {
    name: "HR баг",
    image: "/images/hr-profile.jpg",
    designation: "Хүний нөөцийн менежер",
  },
  tags: ["React", "Next.js", "Full-time"],
  publishDate: "2025-07-29",
};

export default function JobFormPage() {
  const searchParams = useSearchParams();
  const preSelectedPosition = searchParams.get("position");

  return <JobForm job={dummyJob} preSelectedPosition={preSelectedPosition} />;
}
