"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Job } from "@/types/job";
import Link from "next/link";
import { useTheme } from "next-themes";
import Confetti from "react-confetti";

interface JobFormProps {
  job: Job;
}

export default function JobForm({ job }: JobFormProps) {
  // upload file
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    if (e.target.files && e.target.files[0]) {
      const f = e.target.files[0];
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024;

      if (!allowed.includes(f.type)) {
        setError("Зөвшөөрөгдсөн файл: PDF эсвэл Word (.doc, .docx)");
        setFile(null);
        return;
      }
      if (f.size > maxSize) {
        setError("Файл 5MB-аас их байж болохгүй.");
        setFile(null);
        return;
      }
      setFile(f);
    }
  };

  const onfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Нэр болон имэйл хаягаа бөглөнө үү!");
      return;
    }

    if (!file) {
      setError("Анкетын файл заавал хавсаргана уу!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("file", file);

      await fetch("http://worldmongolians.com/api/job-applications", {
        method: "POST",
      });
      // await fetch("http://worldmongolians.com/api/job-applications", {
      //   method: "GET",
      //   credentials: "include",
      // });

      setSuccess("Амжилттай илгээгдлээ!");
      setShowConfetti(true);
      setIsModalOpen(true);
    } catch (err) {
      setError("Илгээхэд алдаа гарлаа!");
    } finally {
      setLoading(false);
    }
    const mongolianNameRe = /^[А-Яа-яЁё\s-]{2,50}$/;

    if (!mongolianNameRe.test(name)) {
      setError("Нэр зөвхөн монгол үсэг (2-50 тэмдэгт) байх ёстой.");
      return;
    }
  };

  // upload file
  const { title, image, paragraph, author, tags, publishDate } = job;
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    file: null as File | null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    const scrollY = window.scrollY;

    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // scroll disable
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY); // position restore
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    setShowConfetti(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowConfetti(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Анкет амжилттай илгээгдлээ!");
    // API илгээх код
  };

  return (
    <>
      {/* Confetti - дэлгэцийн хамгийн дээр байрлуулна */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
          <Confetti width={windowSize.width} height={windowSize.height} />
        </div>
      )}

      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="relative z-10 mx-auto mt-12 rounded bg-white p-8 shadow-three  dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
                <h3 className="mb-4 text-center text-2xl font-bold leading-tight text-black dark:text-white">
                  Ажлын анкет илгээх
                </h3>
                <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-center text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                  Доорх мэдээллийг үнэн зөв бөглөж илгээнэ үү. Бид тантай эргэн
                  холбогдох болно.
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
                        <stop offset="1" stopColor="white" stopOpacity="0" />
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
                        <stop offset="1" stopColor="white" stopOpacity="0" />
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

                <div>
                  <form onSubmit={onfileSubmit} className="space-y-4">
                    <div>
                      {/* <label className="mb-1 block">Нэр</label> */}
                      <input
                        type="text"
                        value={name}
                        placeholder="Овог нэр"
                        onChange={(e) => setName(e.target.value)}
                        required
                        onInvalid={(e) =>
                          e.currentTarget.setCustomValidity(
                            "Энэ талбарыг бөглөнө үү",
                          )
                        }
                        onInput={(e) => e.currentTarget.setCustomValidity("")}
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>

                    <div>
                      {/* <label className="mb-1 block">И-мэйл</label> */}
                      <div>
                        <input
                          type="email"
                          value={email}
                          placeholder="Имэйл хаяг"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          onInvalid={(e) =>
                            e.currentTarget.setCustomValidity(
                              "Энэ талбарыг бөглөнө үү",
                            )
                          }
                          onInput={(e) => e.currentTarget.setCustomValidity("")}
                          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        {/* {error && (
                          <p className="mt-1 text-sm text-red-500">{error}</p>
                        )} */}
                      </div>
                    </div>
                    <input
                      type="email"
                      value={email}
                      placeholder="Сонгогдсон ажлын байр"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      onInvalid={(e) =>
                        e.currentTarget.setCustomValidity(
                          "Энэ талбарыг бөглөнө үү",
                        )
                      }
                      onInput={(e) => e.currentTarget.setCustomValidity("")}
                      className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />

                    <div>
                      {/* <label className="mb-1 block">Анкет файл</label> */}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={onFileChange}
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />

                      {file && (
                        <p className="mt-1 text-sm">
                          Сонгосон файл: <strong>{file.name}</strong>
                        </p>
                      )}
                      {error && <p className="mt-2 text-red-600">{error}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="my-4 rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                    >
                      {loading ? "Илгээж байна..." : "Анкет илгээх"}
                    </button>

                    {success && (
                      <p className="mt-2 text-green-600">{success}</p>
                    )}
                  </form>

                  {/* <textarea
                    name="experience"
                    rows={4}
                    placeholder="Ажлын туршлага / Товч танилцуулга"
                    className="border-stroke mb-4 w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea> */}

                  {/* <div className="mb-5 flex justify-center">
                    <a
                      href="/"
                      onClick={handleClick}
                      className="my-4 rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                    >
                      Анкет илгээх
                    </a>
                  </div> */}
                </div>

                {/* Modal */}
                {isModalOpen && (
                  <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal} // гадна талд дарвал хаана
                  >
                    <div
                      className="max-w-sm rounded bg-white p-8 text-center shadow-lg dark:bg-gray-dark"
                      onClick={(e) => e.stopPropagation()} // дотор дарвал хаахгүй
                    >
                      <h2 className="mb-4 text-xl font-semibold dark:text-white">
                        Амжилттай илгээлээ!
                      </h2>
                      <p className="mb-6 dark:text-white">
                        Таны анкет амжилттай илгээгдлээ. Бид тантай удахгүй
                        холбогдоно.
                      </p>
                      <button
                        onClick={closeModal}
                        className="rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 w-full px-4 lg:w-8/12">
              <div className="relative z-[1] mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                <p className="text-center text-base font-medium italic text-body-color dark:text-white">
                  Хэрэв та IT-ийн салбарт өсөж дэвжих, бодит үнэ цэнэ бүтээх,
                  мэдлэгээ практикт хэрэгжүүлэхийг хүсэж байвал бидэнтэй
                  нэгдээрэй. Мэдээллийн технологийн хөгжлийг хамтдаа
                  урагшлуулцгаая!
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
                        <stop offset="1" stopColor="white" stopOpacity="0" />
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
                        <stop offset="1" stopColor="white" stopOpacity="0" />
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
