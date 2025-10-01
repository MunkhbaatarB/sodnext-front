import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";
import { fetchJobData } from "@/lib/fetchjobdata";
import { Job } from "@/types/job";

import { Metadata } from "next";
interface JobPageProps {
  params: Promise<{
    id: string;
  }>;
}
export const metadata: Metadata = {
  title: "Blog Details Page | Sod electronics",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const JobDetailsPage = async ({ params }: JobPageProps) => {
  const { id } = await params;

  let job: Job | undefined;

  try {
    const response = await fetchJobData(); // API-ээс бүх jobs
    job = response.data.find((j) => j.id === Number(id)); // id-р хайна
  } catch (err) {
    console.error(err);
  }

  if (!job) {
    return <p className="text-center text-red-500">Job олдсонгүй</p>;
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex  flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Манай компани анх 2013 оноос мэдээлэл технологийн салбарт
                    гадаад худалдаа, компьютерийн засвар, түүний дагалдах
                    төхөөрөмж борлуулалтын чиглэлээр үйл ажиллагаагаа явуулж
                    эхэлсэн 100 хувь дотоодын хөрөнгө оруулалттай компани юм.
                    Бид бүхэн өндөр мэдлэг, ур чадвар, бүтээлч сэтгэлгээ, шинэ
                    технологийг эх орондоо нэвтрүүлэхийн зэрэгцээ, захиалагч
                    болон харилцагчийнхаа нэр хүнд, эрх ашгийг тэргүүн эгнээнд
                    тавьж, урт хугацааны найрсаг найдвартай хамтын ажиллагааг
                    эрхэмлэн, чанарын өндөр түвшинд хийж гүйцэтгэхийн ямагт
                    эрмэлзэж ажилладаг. Манай компани нь дэлхийд нэр хүндтэй
                    албан ёсны Canon, Dell, Kaspersky, Konica Minolta, APC,
                    Solarwinds, Oracle-ийн албан ёсны гэрээт борлуулагч бөгөөд
                    чанартай сервис үйлчилгээний хамтаар дэвшилтэд технологийг
                    хэрэглэгчидэд цаг алдалгүй хүргэхийг зорилт болгон ажиллаж
                    байна.
                  </p> */}
                  {/* <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/job.webp"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div> */}
                  <h2 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    {job.position}
                  </h2>
                  <p className=" text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {" "}
                    {job.type}
                  </p>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10"></div>
                  {/* <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Гүйцэтгэх үндсэн үүрэг{" "}
                  </h3> */}
                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {job.content}
                  </p> */}
                  <div
                    className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: job.content }}
                  />
                  {/* <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Ажлын байранд тавигдах шаардлага
                  </h3> */}
                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Хүний нөөцийн менежерийн чиглэлээр бакалаврын зэрэгтэй байх
                  </p> */}
                  {/* <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Хүний нөөцийн менежмент, хөдөлмөрийн эрх зүй болон хүний
                      нөөцийн стратегийн талаар мэдлэгтэй байх
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Хүний нөөцийн менежмент, хөдөлмөрийн эрх зүй болон хүний
                      нөөцийн стратегийн талаар мэдлэгтэй байх
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Хүний нөөцийн менежмент, хөдөлмөрийн эрх зүй болон хүний
                      нөөцийн стратегийн талаар мэдлэгтэй байх
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Хүний нөөцийн менежмент, хөдөлмөрийн эрх зүй болон хүний
                      нөөцийн стратегийн талаар мэдлэгтэй байх
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Ажилтны харилцаа, сургалт, хөгжлийн чиглэлээр туршлагатай
                      байх
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Харилцан ойлголцол, багаар ажиллах, шийдвэр гаргах
                      чадвартай байх
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Бүтээлч, шийдэл гаргах чадвартай, хариуцлагатай хандах
                    </li>
                  </ul> */}
                  {/* <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Нэмэлт мэдээлэл{" "}
                  </h3> */}
                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Хүний нөөцийн менежерийн чиглэлээр бакалаврын зэрэгтэй байх
                  </p> */}
                  {/* <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Групп компаний хөнгөлөлт урамшуулал
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Менежментийн багийн үр дүнгийн урамшуулал
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Эрүүл мэндийн даатгал -Удирдах ажилтны нэмэлт хангамж
                    </li>
                  </ul> */}
                  {/* <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Бусад{" "}
                  </h3> */}
                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Хүний нөөцийн менежерийн чиглэлээр бакалаврын зэрэгтэй байх
                  </p> */}
                  {/* <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <span className="font-bold text-black dark:text-white">
                        Байршил:
                      </span>{" "}
                      Улаанбаатар хот, Баянзүрх дүүрэг
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <span className="font-bold text-black dark:text-white">
                        Төрөл:
                      </span>{" "}
                      Бүтэн цагийн
                    </li>
                  </ul> */}

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Хэрэв та IT-ийн салбарт өсөж дэвжих, бодит үнэ цэнэ
                      бүтээх, мэдлэгээ практикт хэрэгжүүлэхийг хүсэж байвал
                      бидэнтэй нэгдээрэй. Мэдээллийн технологийн хөгжлийг
                      хамтдаа урагшлуулцгаая!
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#00BFFF"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#00BFFF"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <Link
                    href={`/job-form?position=${encodeURIComponent(job.position)}`}
                    className="my-4 rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                  >
                    Анкет илгээх{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetailsPage;
