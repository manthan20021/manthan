
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const features = [
  "Unlimited Projects",
  "100 GB Storage",
  "Advanced Analytics",
  "Priority Support",
  "Custom Domains",
];

export default function PriceCard({prisingData}) {

  const {offers, messages} = prisingData || {}
   const message = encodeURIComponent(
    messages
);

  return (
  
      <Card className="w-full mb-8 max-w-sm h-[620px] bg-zinc-900 border border-zinc-700 text-white shadow-2xl rounded-2xl">
        
        {/* Header */}
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-1">
            <Badge className="bg-[#773dff] text-white text-sm font-semibold tracking-widest uppercase px-3  rounded-sm">
              {prisingData.hading}
            </Badge>
          </div>

          <CardTitle className="text-2xl font-bold text-white tracking-tight">
            Pro Plan
          </CardTitle>

          <CardDescription className="text-zinc-400 text-sm leading-relaxed">
           {prisingData.discription}
          </CardDescription>

          {/* Price */}
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-5xl font-extrabold text-white">{prisingData.pries}</span>
            <span className="text-zinc-400 text-sm">/Project</span>
          </div>
        </CardHeader>

        <Separator className="bg-zinc-700" />

        {/* Features */}
        <CardContent className="pt-2  h-[250px]">
          <p className="text-xs text-zinc-500 uppercase  tracking-widest mb-2 font-medium">
            What&apos;s included
          </p>
          <ul className="space-y-1">
            {offers.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        {/* Footer */}
        <CardFooter className="pt-1 pb-3 flex flex-col gap-3">
           <a
              href={`https://wa.me/9284899998?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
               className=" 
              w-[100%]
              bg-[#773dff]
              text-white
              rounded-[12px]
              p-[14px]
              text-[14px]
              font-[600]
              letterSpacing-[0.05em]
              cursor-pointer
              transition-[all 0.2s ease]
              transform-[scale(1)]
            " 
              >
          <button className="w-full h-full  cursor-pointer flex items-center justify-center">
            Negotiate
          </button>
          </a>
        </CardFooter>
      </Card>
  
  );
}