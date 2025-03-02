import React from "react";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <section className="py-12 pl-10 pr-10 bg-[#D9D9D9] w-full mx-auto px-4">
      
      <div className="w-full mx-auto text-justify px-4">
        <h1 className="w-full text-3xl font-bold text-center mb-8 font-shippori">
          Our Story
        </h1>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          It all started with a vision to create lasting change. Our trust was founded on the belief that every individual deserves access to essential resources, opportunities, and support to build a better future.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Over the years, our dedicated team has worked tirelessly to provide relief, empower communities, and foster sustainable development. From small initiatives to large-scale projects, every step has been driven by compassion and transparency.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Today, we continue our journey with a renewed commitment to serving those in need, celebrating our successes, and learning from our challenges. Join us as we write the next chapter of our story.
        </p>
      </div>
      <div className="w-10/12 flex flex-col items-center lg:flex-row mx-auto justify-around my-8 gap-4">
        <img src="https://www.achievers.com/blog/wp-content/uploads/2020/07/06-26-20.jpg" className="aspect-video w-full lg:w-1/4 rounded-lg  object-cover" alt="" />
        <img src="https://th.bing.com/th/id/OIP.7g_BkQybt-clRrcRgl9mOQHaE7?rs=1&pid=ImgDetMain" className="aspect-video  w-full lg:w-1/4 rounded-lg object-cover" alt="" />
        <img src="https://th.bing.com/th/id/R.5de16121c0892acbc0a0eb35a51c2162?rik=aOgI1V48mHryPg&riu=http%3a%2f%2fstanleyconsultants.com%2fimages%2fdefault-source%2fabout-career-pages%2fdigital-empowerment%2fdigemp-industryexcellence_482396949.jpg%3fsfvrsn%3d9d9cf543_1&ehk=rcnd0acQ3SGOYHynm7MP7AgflD%2fg5yzbkSlGFjqyONw%3d&risl=&pid=ImgRaw&r=0" className="aspect-video w-full lg:w-1/4 rounded-lg  object-cover" alt="" />
      </div>
      <div className="flex items-center justify-center">
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