import { ReactNode } from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "700px", // Өргөн томруулсан
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p
        className={`text-base !leading-relaxed text-body-color dark:text-white/70 md:text-lg ${center ? "text-center" : "text-justify"}`}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
