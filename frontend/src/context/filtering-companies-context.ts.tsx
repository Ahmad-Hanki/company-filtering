import { createContext, useContext } from "react";
import { defaultFilters, type CompanyFilters } from "./types-and-defaults";

export type FilteringCompaniesContextType = {
  filters: CompanyFilters;
  updateFilters: (newFilters: Partial<CompanyFilters>) => void;
  resetFilters: () => void;
};

export const FilteringCompaniesContext =
  createContext<FilteringCompaniesContextType>({
    filters: defaultFilters,
    updateFilters: () => {},
    resetFilters: () => {},
  });

export const useFilteringCompanies = (): FilteringCompaniesContextType => {
  return useContext(FilteringCompaniesContext);
};
