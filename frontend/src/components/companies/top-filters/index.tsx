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
import { Input } from "@/components/ui/input";

const TopFilters = () => {
  const { filters, updateFilters } = useContext(FilteringCompaniesContext);

  const handleIndustryChange = (value: string) => {
    updateFilters({ ...filters, industry: value == "x" ? undefined : value });
  };

  const handleSizeChange = (value: string) => {
    updateFilters({ ...filters, size: value == "x" ? undefined : value });
  };

  const onSearchChange = (value: string) => {
    updateFilters({ ...filters, query: value, page: filters.page ?? 1 });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-4 gap-4 sm:justify-between ">
      <Input
        placeholder="Filter names and locations..."
        value={filters.query}
        onChange={(e) => {
          onSearchChange?.(e.target.value);
        }}
        className="max-w-sm"
      />
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
    </div>
  );
};

export default TopFilters;
