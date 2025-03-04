import { cn } from "../lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from "../components/ui/button"
import { SquarePen } from "lucide-react"


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


const Activity = [
  {
    Title: "12 invoices have been paid",
    Description: "Invoices have been paid to the company",
    Time: "12 min ago",
    Button: "Invoice.pdf",
  },
  {
    Title: "Client Meeting",
    Description: "Project Meeting with john @ 10:15am",
    Time: "45 min ago",
    User: {
      Name: "Haris Junaid",
      Role: "User",
      Image: "https://www.figma.com/file/ySxHhVKTn3qvbC0egO0o2n/image/eb1b836d0a62a0904612dc5d4733a4985953c876", // URL to the user's profile image
      Status: "online", // Indicates online status
    },
  },
  {
    Title: "Create a new project for client",
    Description: "6 team member in a project",
    Time: "2 days ago",
    Button: "Invoice.pdf",
  },
];

type CardProps = React.ComponentProps<typeof Card>

export default function CompanyProfile({ className, ...props }: CardProps) {
  return (
    <div className="ml-20 mt-20 flex gap-4">
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


      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* Currency card */}
      <Card className="w-[297px] h-[300px] shadow-none">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-medium">Currency</CardTitle>
            <button
              className="p-1 border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
              <SquarePen size={20} className="text-gray-600" />
            </button>
          </div>
          <div className="w-full h-0.5 border-b border-[#D8D8D8] mt-3"></div>
        </CardHeader>
        <CardContent>
          <h1 className="font-medium">Default Currency</h1>
          <h2 className="text-[#787878]">$USD</h2>
        </CardContent>
      </Card>

      
      {/* --------------------------------------------------------------------------------------------------- */}
      {/* userActivityCard */}
      <Card className={cn("w-[668px] shadow-none", className)} {...props}>
        <CardHeader>
          <CardTitle className="font-medium">User Activity Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {Activity.map((item, index) => (
              <div key={index}>
                <div className="mb-7 grid grid-cols-[25px_1fr] items-start">
                  <div className="relative">
                    <span className={`flex h-2 w-2 rounded-full  ${index === 0
                      ? "bg-[#5CA1FF]"
                      : index === 1
                        ? "bg-[#EE4700]"
                        : "bg-[#B7DB4E]"
                      }`}>
                    </span>

                    {index !== Activity.length && (
                      <div
                        className="absolute right-5 w-0.5 h-22 bg-gray-200"
                        style={{ marginTop: "6px" }}
                      ></div>
                    )}

                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none pb-2">
                      {item.Title}
                    </p>
                    <p className="text-sm text-muted-foreground flex justify-between">
                      <span>{item.Description}</span>
                      <span>{item.Time}</span>
                    </p>

                    {item.User && (
                      <div className="flex items-center mt-2">
                        <div className="relative">
                          <img
                            src={item.User.Image}
                            alt={item.User.Name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          {item.User.Status === "online" && (
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="ml-2">
                          <p className="text-xs font-normal">
                            {item.User.Name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.User.Role}
                          </p>
                        </div>
                      </div>
                    )}
                    {item.Button && !item.User && (
                      <Button className="mt-2 bg-[#EBEBEB] font-normal px-5" variant="outline" >
                        {item.Button}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}







