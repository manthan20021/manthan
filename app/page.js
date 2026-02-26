import Image from "next/image";
import Section1 from "./coponents/section1";
import Section2 from "./coponents/section2";
import Setion3 from "./coponents/setion3";

export default function Home() {
  return (
    <div className="sm:w-screen sm:h-full h-full w-full  py-6 px-10 bg-black flex items-center justify-center">
    <div className="sm:w-350 sm:h-180 w-full h-full  flex items-center justify-between md:flex-row flex-col ">
      <Section1/>
      <Section2/>
      <Setion3/>
    </div>
    </div>
  );
}


//#773dff