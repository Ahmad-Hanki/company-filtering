export type CompanyFilters = {
  name: string;
  location: string;
  industry: string;
  size: string;
};

export const defaultFilters: CompanyFilters = {
  name: "",
  location: "",
  industry: "",
  size: "",
};
