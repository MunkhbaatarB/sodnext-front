import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Spline from "@splinetool/react-spline";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Манай давуу тал"
            paragraph="Мэдээллийн технологи, харилцаа холбооны салбарт хамгийн олон чиглэлд үйл ажиллагаа явуулж өргөжсөн манай хамт олон цаашдаа олон шинэчлэлийг нэвтрүүлэн, дэлхийн хөгжлийг хэрэглэгчиддээ мэдрүүлэхийг хичээн ажиллах болно."
            center
          />

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
