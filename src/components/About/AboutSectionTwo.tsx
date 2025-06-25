import Image from "next/image";

const AboutSectionTwo = () => {
  const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );
  const List = ({ text, title }) => (
    <div className="mb-5 flex items-start">
      <div className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-opacity-10 text-primary">
        {checkIcon}
      </div>
      <div>
        <h4 className="mb-1 text-lg font-medium text-black/90 dark:text-white/80">
          {title}
        </h4>
        <p className="text-sm text-body-color">{text}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Бид вэб сайтыг дараах үндсэн 4 үе шатттайгаар хийдэг:
              </h3>
              <div className="mb-2">
                <List
                  title="Вэб сайтын маркетинг төлөвлөлт"
                  text="
Захиалагчийн шаардлага, хүсэлтийг үндэслэн сайтын зорилго, чиглэл, бүтцийг тодорхойлох
Вэб сайт удирдах системийг сонгох
Домэйн нэр сонгож нөөцлөх "
                />
              </div>
              <div className="mb-2">
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Гар утсанд ээлтэй / Mobile optimized
                </h3> */}
                <List
                  title="Вэб сайтын дизайны загвар гаргах"
                  text="
Сайтын дизайны загвар нь захиалагчийн бүтээгдэхүүн, үйлчилгээ, үйл ажиллагааны онцлогт бүрэн нийцсэн байна"
                />
              </div>
              <div className="mb-2">
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Цаг алдахгүй тусламж зөвлөгөө
                </h3> */}
                <List
                  title="Вэб сайтын программчлал"
                  text="
Захиалагчийн зөвшөөрсөн сайтын дизайны загварыг вэб хөтөч программуудад ойлгомжтой кодон хэлбэрт шилжүүлэх, сайтын удирдах хэсгийг холбож тохируулах"
                />
              </div>
              <div className="mb-2">
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Цаг алдахгүй тусламж зөвлөгөө
                </h3> */}
                <List
                  title="Интернэтэд байршуулах"
                  text="
Интернэтийн орчинд турших
Хайлтын системүүдэд нийцүүлэх
Захиалагчид вэб сайтаа хэрхэн удирдах талаар сургалт зохион байгуулах
Вэб сайтыг захиалагчид хүлээлгэн өгөх"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
