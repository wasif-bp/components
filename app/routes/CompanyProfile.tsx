import { cn } from "../lib/utils"
import { Slider } from "../components/ui/slider"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from "../components/ui/button"

const standards = [
  {
    title: "10 Users",
  },
  {
    title: "Upto 10 GB stoorage",
  },
  {
    title: "Basic support",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function CompanyProfile({ className, ...props }: CardProps) {
  return (
      <div className="ml-20 mt-20 flex flex-col gap-3">
        <Card className={cn("w-[395px] h-[300px] shadow-none border-1", className)} {...props}>
          <CardHeader className="relative">
            <div className="bg-[#D6D5D699] w-fit px-4 py-1 rounded-lg mb-0">
              <CardTitle className="text-[#302F34A3] text-sm font-normal">Standard</CardTitle>
            </div>
            <div className="absolute top-6 right-4">
              <h1 className="text-3xl font-normal">$99<span className="text-sm text-[#302F34A3] font-light pl-1">month</span></h1>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4">
              {standards.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-3 w-3 rounded-full bg-[#D9D9D9] self-center" />
                  <div className="space-y-0">
                    <p className="text-[#838285] text-md font-normal leading-none">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="grid grid-cols-2 gap-32 mb-1">
              <h1 >Days</h1>
              <p>23 Of 30 Days</p>
            </div>
            <div className="relative w-full h-2 bg-[#D8D8D8] rounded-full mb-1">
              <div className="absolute left-0 h-2 bg-[#3B3B3B] rounded-full" style={{ width: "40%" }}></div>
            </div>
            <p className="self-start text-[#787878]">4 Days Remaining</p>  
          </CardFooter>
        </Card>
      </div>
      
      





  )
}
