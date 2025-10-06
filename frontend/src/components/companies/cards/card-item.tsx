import { Card, CardContent } from "@/components/ui/card";
import type { Company } from "@/types/api-type";
import { Building } from "lucide-react";

const CardItem = ({ company }: { company: Company }) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 ">
        <Building className=" h-20 w-20 text-gray-400 " />
        <div className="">
          <p className="text-xl font-semibold">{company.name}</p>
          <p>{company.location}</p>
          <p className="text-muted-foreground">Industry: {company.industry}</p>
          <p className="text-muted-foreground">Size: {company.size}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
