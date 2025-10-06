export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
};

export type Company = {
  id: string;
  name: string;
  industry: string;
  location: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
};
