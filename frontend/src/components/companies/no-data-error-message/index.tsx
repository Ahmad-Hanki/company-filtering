import { Card, CardContent } from "@/components/ui/card";

const NoDataErrorMessage = () => {
  return (
    <Card className="col-span-3">
      <CardContent>
        <p className="text-center text-lg text-red-500">
          No data found for the selected filters.
        </p>
      </CardContent>
    </Card>
  );
};

export default NoDataErrorMessage;
