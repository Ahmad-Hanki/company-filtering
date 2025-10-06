import type { CompanyFilters } from "@/context/types-and-defaults";
import apiClient from "@/lib/api-client";
import type { QueryConfig } from "@/lib/queryClient";
import type { Company } from "@/types/api-type";
import { queryOptions, useQuery } from "@tanstack/react-query";

export interface GetCompaniesProps {
  queryConfig?: QueryConfig<typeof getCompaniesQueryOptions>;
  filters?: CompanyFilters;
}

export const getCompanies = async ({
  filters,
}: GetCompaniesProps): Promise<{
  data: Company[] | null;
}> => {
  const response = await apiClient.get("/companies", { params: filters });
  const data = await response.data;
  return data;
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
    ...getCompaniesQueryOptions({ filters: filters }),
    ...queryConfig,
  });
};
