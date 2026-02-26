import PriceCard from "@/components/PriceCard";

export default function Prising(){

    const pricingData = [
        {
            "hading": "Basic",
            "discription": "Basic website up to 1 pages following your design with 4-day delivery",
            "pries": "8,300",
            "offers":[
                "Functional website",
                "1 page",
                "Content upload",
                "E-commerce functionality",
                "5 products",
                "Payment Integration",
                "Hosting setup"
            ],
            "messages":"I am interested in your Rs. 8,300 plan."
        },
         {
            "hading": "standard",
            "discription": "Website following clients design up to 5 pages basic API integration no admin panel",
            "pries": "16,400",
            "offers":[
                "Functional website",
                "Admin Panel",
                "5 pages",
                "Sober Animations",
                "E-commerce functionality",
                "10 products",
                "Payment Integration",
                "Speed optimization",
                "Hosting setup"
            ],
            "messages":"I am interested in your Rs. 16,400 plan."
        },

         {
            "hading": "premium",
            "discription": "Custom Website development upto 10 page, based on requirements price scalable.",
            "pries": "28,400",
            "offers":[
                "Functional website",
                "UI-UX",
                "Admin Panel",
                "7 pages",
                "full Animations",
                "E-commerce functionality",
                "15 products",
                "Payment Integration",
                "Speed optimization",
                "Hosting setup"
            ],
            "messages":"I am interested in your Rs. 28,400 plan."
        },

    ]
    return(
        <div className="bg-[#000000] flex flex-col items-center justify-center py-7 ">
            <div className="flex flex-col items-center justify-center mb-7">
            <h1 className="text-white text-4xl font-bold">Flexible Planas For Every <span className="text-[#773dff]"> Business</span></h1>
            <p className="text-white mt-4">Pick a plan that suits your needs and get started instantly.</p>
            </div>
             <div className="w-full sm:px-50 h-full flex flex-wrap  items-center justify-around">
            {
                pricingData.map(items => {
                    return<PriceCard prisingData={items}/>
                })
            } 
        </div>
        </div>
    )
}