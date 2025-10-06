export type CompanyFilters = {
  name: string;
  location: string;
  industry: string;
  size: string;
  page?: number;
  per_page?: number;
};

export const defaultFilters: CompanyFilters = {
  name: "",
  location: "",
  industry: "",
  size: "",
  page: 1,
  per_page: 10,
};
