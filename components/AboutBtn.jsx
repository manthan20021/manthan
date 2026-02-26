import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["top"]

export function SheetSide() {

   const message = encodeURIComponent(
    "Hello Manthan, I want to know more about you."
);

  return (
    <div className="flex flex-wrap gap-2 h-[231px] w-full relative">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize h-[40px] w-[200px] z-10 rounded-md mb-5 absolute bottom-0 left-[70px] bg-[#773dff] text-white">
              About Me
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh] sm:w-3xl w-full  sm:ml-[500px] sm:mt-[200px] rounded-2xl "
          >
            <SheetHeader>
              <SheetTitle>Biography</SheetTitle>
              <SheetDescription>
                I’m a Full-Stack Developer who crafts modern, dynamic web apps powered by the MERN stack and optimized with Next.js.
              </SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 1 }).map((_, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  I am a self-taught software developer, learning and building projects for the past two years. My journey started with curiosity, and over time, I’ve developed skills in creating web applications, exploring new technologies, and continuously improving as a developer.
                </p>
              ))}
            </div>
            <SheetFooter>
                <a
              href={`https://wa.me/9284899998?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              >
              <Button type="submit"> Ask more</Button>
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
