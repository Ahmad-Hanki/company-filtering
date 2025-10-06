export type CompanyFilters = {
  query: string;
  industry: string;
  size: string;
  page?: number;
  per_page?: number;
};

export const defaultFilters: CompanyFilters = {
  query: "",
  industry: "",
  size: "",
  page: 1,
  per_page: 10,
};
