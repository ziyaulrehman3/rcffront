import { Link } from "react-router-dom";

export default function MissionAndVision() {
  return (
    <section className="py-16 px-10 bg-gray-100 w-full lg:w- mx-auto px-4">
      <div className="w-full mx-auto px-4">
        <h1 className="text-center text-3xl  font-shippori font-bold mb-6 text-black">
          Our Mission & Vision
        </h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold font-shippori mb-4 text-[#E3501F]">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              Our mission is to empower, uplift, and transform the lives of
              underprivileged communities by providing essential healthcare,
              education, and social services, all while maintaining transparency
              and dedication.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold font-shippori mb-4 text-[#E3501F]">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              We envision a future where every individual has access to basic
              necessities, opportunities, and support systems that inspire
              self-reliance and sustainable development. Our goal is to build
              long-lasting solutions that foster community growth and improve
              quality of life.
            </p>
          </div>
        </div>
      </div>
        <div className="w-10/12 flex flex-col items-center lg:flex-row mx-auto justify-around my-8 gap-4">
          <img className="w-full lg:w-1/4 rounded-lg aspect-square object-cover" src="https://th.bing.com/th/id/OIP.dWyWrSbBEGBAeBDU9Obd-QHaFj?rs=1&pid=ImgDetMain" alt="smiling-kid-img" />
          <img className="w-full lg:w-1/4 rounded-lg aspect-square object-cover" src="https://ofhsoupkitchen.org/wp-content/uploads/2021/07/image1.jpg" alt="meal-img" />
          <img className="w-full lg:w-1/4 rounded-lg aspect-square object-cover" src="https://whereno1canreach.files.wordpress.com/2021/09/img-20210919-wa0000.jpg" alt="education-img" />
        </div>
        <div className="my-8 flex items-center justify-center">
          <Link
            to="/Donation"
            className="inline-block bg-[#034C5B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#032F4B] transition"
          >
            Support Our Cause
          </Link>
        </div>
    </section>
  );
}
