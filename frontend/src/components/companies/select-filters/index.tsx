import { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { industries } from "@/constants/industries";
import { FilteringCompaniesContext } from "@/context/filtering-companies-context.ts";
import { sizes } from "@/constants/sizes";

const SelectFilters = () => {
  const { filters, updateFilters } = useContext(FilteringCompaniesContext);

  const handleIndustryChange = (value: string) => {
    updateFilters({ ...filters, industry: value == "x" ? undefined : value });
  };

  const handleSizeChange = (value: string) => {
    updateFilters({ ...filters, size: value == "x" ? undefined : value });
  };

  return (
    <div className="flex items-center gap-4 flex-col sm:flex-row">
      <Select
        value={filters.industry || "x"}
        onValueChange={handleIndustryChange}
      >
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Select industry" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={filters.size || "x"} onValueChange={handleSizeChange}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          {sizes.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilters;
