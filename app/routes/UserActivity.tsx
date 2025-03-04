import { cn } from "../lib/utils"
import { SquarePen } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Button } from "../components/ui/button"


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

export default function UserActivity({ className, ...props }: CardProps) {
    return (
        <div className="ml-20 mt-10 space-y-10">
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
        </div>
    )
}

