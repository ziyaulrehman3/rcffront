import LeftSideAbout from "./LeftSideAbout";
import RightSide from "./RightSide";

export default function AboutUs() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[55%] min-h-[690px] gap-0 m-auto my-40">
      <LeftSideAbout />
      <RightSide />
    </section>
  );
}