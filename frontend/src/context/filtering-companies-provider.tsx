import { useState, useMemo, type ReactNode } from "react";
import { defaultFilters, type CompanyFilters } from "./types-and-defaults";
import { FilteringCompaniesContext } from "./filtering-companies-context.ts";

type FilteringCompaniesProviderProps = {
  children: ReactNode;
};

export const FilteringCompaniesProvider = ({
  children,
}: FilteringCompaniesProviderProps) => {
  const [filters, setFilters] = useState<CompanyFilters>(defaultFilters);

  const updateFilters = (newFilters: Partial<CompanyFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  // Memoize the context value to prevent unnecessary re renders
  const value = useMemo(
    () => ({ filters, updateFilters, resetFilters }),
    [filters] // Only recreate when filters change
  );

  return (
    <FilteringCompaniesContext.Provider value={value}>
      {children}
    </FilteringCompaniesContext.Provider>
  );
};
