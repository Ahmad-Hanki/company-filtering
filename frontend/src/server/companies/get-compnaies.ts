import type { Company, PaginatedResponse } from "@/types/api-type";
import apiClient from "@/lib/api-client";
import type { CompanyFilters } from "@/context/types-and-defaults";
import type { QueryConfig } from "@/lib/queryClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

export interface GetCompaniesProps {
  queryConfig?: QueryConfig<typeof getCompaniesQueryOptions>;
  filters?: CompanyFilters;
}

export const getCompanies = async ({
  filters,
}: GetCompaniesProps): Promise<PaginatedResponse<Company>> => {
  const response = await apiClient.get("/companies", { params: filters });
  return response.data;
};

export const getCompaniesQueryOptions = ({ filters }: GetCompaniesProps) => {
  return queryOptions({
    queryKey: ["companies", filters],
    queryFn: () => getCompanies({ filters }),
  });
};

export const useCompanies = ({
  queryConfig,
  filters,
}: GetCompaniesProps = {}) => {
  return useQuery({
    ...getCompaniesQueryOptions({ filters }),
    ...queryConfig,
  });
};
