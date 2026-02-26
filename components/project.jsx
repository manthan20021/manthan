import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";

export function PointerHighlightDemo() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 py-20 sm:grid-cols-3">

      <a href="https://www.smartasure.in/">
      <div className="rounded-md p-6">
        <Image
        width={200}
        height={150}
        src="/pro1.png"
        className="h-40 w-full border-[.1] border-gray-700 rounded-lg bg-linear-to-r from-blue-200 to-sky-200"
        />
        <div
          className="mx-auto mt-4 max-w-lg text-base text-white font-bold tracking-tight md:text-base">
            Developed a 
          <PointerHighlight
            rectangleClassName="bg-neutral-700 border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1">
            <span className="relative ml-1 z-10"> animated website</span>
          </PointerHighlight>
          for Smartasure.in, a brand of Agryen Technologies LLP.
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          It was a pleasure working with Agryen Technologies LLP. They brought a strong vision, and I am grateful for the opportunity to turn it into reality. Glad to see they are happy with the results
        </p>
      </div>
      </a>

      <a href="https://www.multiplegains.com/">
      <div className="rounded-md p-6">
       <Image
        width={200}
        height={150}
        src="/pro2.png"
        className="h-40 w-full border-2 rounded-lg bg-linear-to-r from-blue-200 to-sky-200"
        />
        <div
          className="mx-auto mt-4 max-w-lg text-base text-white font-bold tracking-tight md:text-base">
           Developed the platform for MultipleGains.com to establish their
          <PointerHighlight
            rectangleClassName=" bg-blue-900 border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1">
            <span className="relative z-10"> online presence.</span>
          </PointerHighlight>
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Developed this website using standard Next.js architecture with shadcn/ui and Aceternity UI, including a dynamic financial health checkup tool.
        </p>
      </div>
      </a>

      <a href="https://github.com/manthan20021/myTube">
      <div className="rounded-md p-6">
        <Image
        width={200}
        height={150}
        src="/pro3.png"
        className="h-40 w-full border-[.1] border-gray-700 rounded-lg bg-linear-to-r from-blue-200 to-sky-200"
        />
        <div
          className="mx-auto mt-4 max-w-lg text-base text-white font-bold tracking-tight md:text-base">
          This is my
          <PointerHighlight
            rectangleClassName="bg-green-900 border-green-700 leading-loose"
            pointerClassName="text-green-500 h-3 w-3"
            containerClassName="inline-block ml-1">
            <span className="relative mr-1 z-10">personal project</span>
          </PointerHighlight>
          where I built a YouTube clone to strengthen my development skills..
        </div>
        <p className="mt-4 text-sm text-neutral-500">
         This project was built using the standard React approach to practice and strengthen my command over React.js and core web technologies.
        </p>
      </div>
      </a>

    </div>
  );
}
