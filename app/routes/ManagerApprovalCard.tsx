import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function ManagerApprovalCard() {
  const [decision, setDecision] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [Comments, setComments] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { [key: string]: boolean } = {};

    if (!decision) newErrors.decision = true;
    if (!name.trim()) newErrors.name = true;

    setErrors(newErrors);
  };

  return (
    <div className="flex justify-center mt-20">
       <Card className="w-1/2 shadow-none"> {/*952px */} 
        <CardHeader className="mb-3">
          <CardTitle className="text-3xl font-medium">Manager Approval</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              {/* Decision Field */}
              <div className="flex flex-col space-y-3">
                <Label htmlFor="Decision">
                  Decisions {errors.decision && <span className="text-red-500">*</span>}
                </Label>
                <Select onValueChange={(val) => setDecision(val)}>
                  <SelectTrigger id="Decision" className="w-full px-6 py-6">
                    <SelectValue placeholder="Approve" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desicion1">decision1</SelectItem>
                    <SelectItem value="decision2">decision2</SelectItem>
                    <SelectItem value="decision3">decision3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Manager Name Field */}
              <div className="flex flex-col space-y-3">
                <Label htmlFor="name">
                  Manager Name {errors.name && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  id="name"
                  placeholder="Manager Name"
                  className="px-6 py-6"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Comments Field */}
              <div className="flex flex-col space-y-3">
                <Label htmlFor="Comments">
                  Manager Comments
                </Label>
                <textarea
                  id="Comments"
                  placeholder="Comments"
                  className="px-6 py-3 border rounded-md resize-none focus:outline-none focus:border-gray-400 focus:ring-3 focus:ring-gray-300 transition-all duration-150 ease-in-out"
                  rows={3}
                  value={Comments}
                  onChange={(e)=>setComments(e.target.value)}
                />
              </div>
            </div>
            <CardFooter className="flex justify-end mt-10">
              <Button type="submit" className="px-14 py-5 cursor-pointer font-medium">
                Save
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
