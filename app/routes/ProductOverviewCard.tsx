import { Button } from "~/components/ui/button"
import Cardchair  from "../src/Cardchair.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

export default function ProductOverviewCard() {
    return (
        <div className="w-6xl flex flex-col gap-2 mx-auto mt-50">
            <div>
                <h1 className="text-lg font-semibold">Product Overview</h1>
            </div>
            <Card className="shadow-none p-4">
                <CardContent className="bg-[#E0E0E157] h-36 w-full rounded-lg flex items-center">
                    <div className="border-r border-[#3E3E3E] flex items-center gap-6 pr-8">
                        <img className="w-20 rounded-lg" src={Cardchair} alt="not found" />
                        <h1 className="font-medium">Wooden Chair</h1>
                    </div>
                    <div className="flex items-center pl-8 pr-15 gap-10">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Quantity</h1>
                            <p className="text-[#838285]">10</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Current Stage</h1>
                            <p className="text-[#838285]">Cutting</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Next stage</h1>
                            <p className="text-[#838285]">Assembling</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Issues</h1>
                            <p className="text-[#838285]">None</p>
                        </div>    
                    </div>
                    <div className="flex items-center gap-2">
                        <Button className="bg-[#F4A12D33] text-[#F4A12D] hover:bg-[#F4A12D33] cursor-pointer px-5 rounded-2xl">In progress</Button>
                        <Button className="rounded-2xl 2xl px-5 cursor-pointer">View Details</Button>
                    </div>
                </CardContent>
                <CardContent className="bg-[#E0E0E157] h-36 w-full rounded-lg flex items-center">
                    <div className="border-r border-[#3E3E3E] flex items-center gap-6 pr-8">
                        <img className="w-20 rounded-lg" src={Cardchair} alt="not found" />
                        <h1 className="font-medium">Wooden Chair</h1>
                    </div>
                    <div className="flex items-center pl-8 pr-15 gap-10">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Quantity</h1>
                            <p className="text-[#838285]">05</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Current Stage</h1>
                            <p className="text-[#838285]">Sanding</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Next stage</h1>
                            <p className="text-[#838285]">Finishing</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Issues</h1>
                            <p className="text-[#838285]">None</p>
                        </div>    
                    </div>
                    <div className="flex items-center gap-2">
                        <Button className="bg-[#F4A12D33] text-[#F4A12D] hover:bg-[#F4A12D33] cursor-pointer px-5 rounded-2xl">In progress</Button>
                        <Button className="rounded-2xl 2xl px-5 cursor-pointer">View Details</Button>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}