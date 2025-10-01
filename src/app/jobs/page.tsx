import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleJob from "@/components/jobs/SingleJob";
import { fetchJobData } from "@/lib/fetchjobdata";
import { Metadata } from "next";
import { Job } from "@/types/job";

export const metadata: Metadata = {
  title: "Jobs Page | Sod electronics",
  description:
    "Технологийн чиг хандлагад тулгуурлан хэрэглэгчдийн хүсэл зорилгод нийцэж ажиллана",
};

const JobsPage = async () => {
  let jobs: Job[] = [];

  try {
    const response = await fetchJobData();
    jobs = response.data; // ✅ pagination object доторхи data-г авна
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <Breadcrumb
        pageName="Jobs"
        description="Бид бүхэн өндөр мэдлэг, ур чадвар, бүтээлч сэтгэлгээ, шинэ технологийг эх орондоо нэвтрүүлэхийн зэрэгцээ, захиалагч болон харилцагчийнхаа нэр хүнд, эрх ашгийг тэргүүн эгнээнд тавьж, урт хугацааны найрсаг найдвартай хамтын ажиллагааг эрхэмлэн, чанарын өндөр түвшинд хийж гүйцэтгэхийн ямагт эрмэлзэж ажилладаг."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleJob job={job} />
                </div>
              ))
            ) : (
              <p className="text-center">Ажлын мэдээлэл олдсонгүй</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsPage;
