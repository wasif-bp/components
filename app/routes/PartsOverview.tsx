import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {Badge} from "../components/ui/badge"

export default function PartsOverview() {
    return (
        <div className="w-6xl bg-white flex flex-col gap-4 mx-auto mt-50">
            <div>
                <h1 className="text-lg font-semibold">Parts Overview</h1>
            </div>
            <Card className="shadow-none p-8 ">
                {/* Card Header */}
                <CardHeader className="bg-[#F0F0F0] rounded-lg w-full py-4 pl-20">
                    <div className="grid grid-cols-5 w-full text-left text-sm font-medium gap-x-14">
                        <h2>Material</h2>
                        <h2>Supplier</h2>
                        <h2>Required</h2>
                        <h2>Procured</h2>
                        <h2>Status</h2>
                    </div>
                </CardHeader>

                {/* Card Content (Dynamic Data) */}
                <CardContent className="w-full flex flex-col gap-4">
                    {[
                        { material: "Solid Wood", supplier: "Acme Co.", required: 4, procured: 2, status: "insufficient" },
                        { material: "PlyWood", supplier: "Fake Co.", required: 2, procured: 2, status: "Ready" },
                        { material: "Particle Board", supplier: "Mickey Co.", required: 2, procured: 2, status: "insufficient" },
                        { material: "Veneer", supplier: "Acme Co.", required: 4, procured: 4, status: "Ready" },
                        { material: "Bamboo", supplier: "Fake Ltd.", required: 12, procured: 12, status: "Ready" }
                    ].map((item, index) => (
                        <div key={index} className="border-b border-[#F0F0F0] last:border-b-0 grid grid-cols-5 pb-4 last:pb-0 pl-14 text-left font-normal gap-x-14">
                            <h2>{item.material}</h2>
                            <h2>{item.supplier}</h2>
                            <h2>{item.required}</h2>
                            <h2>{item.procured}</h2>
                            <Badge className={`rounded-xl px-3 py-1 ${item.status === "Ready" ? "bg-[#4DC27E33] text-[#4DC27E]" : "bg-[#6598FF33] text-[#6598FF]"}`}>
                                {item.status}
                            </Badge>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}