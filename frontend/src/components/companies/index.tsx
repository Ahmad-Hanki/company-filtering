import { FilteringCompaniesContext } from "@/context/filtering-companies-context.ts";
import { useCompanies } from "@/server/companies/get-compnaies";
import { useContext, useState } from "react";
import { DataTable } from "../data-table";
import { columns } from "./table/columns";
import Header from "./header";
import { useDebounce } from "use-debounce";
import Cards from "./cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Companies = () => {
  const { filters, updateFilters } = useContext(FilteringCompaniesContext); // i prefer to use zustand its built on top of redux and its light library but you didnt mention it so i used context api
  const [debouncedInputValue] = useDebounce(filters.query, 600);
  const { data, isPending } = useCompanies({
    filters: { ...filters, query: debouncedInputValue },
  });

  const onNextPage = () => {
    if (data && data.page < data.total_pages) {
      updateFilters({ ...filters, page: data.page + 1 });
    }
  };
  const onPreviousPage = () => {
    if (data && data.page > 1) {
      updateFilters({ ...filters, page: data.page - 1 });
    }
  };

  const hasNextPage = data ? data.page < data.total_pages : false;
  const hasPreviousPage = data ? data.page > 1 : false;

  return (
    <div className="container mx-auto py-10 space-y-5">
      <Header title="Companies" description="List of all companies" />
      <Tabs defaultValue="table">
        <TabsList className="w-full h-10">
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="card">Grid</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <DataTable
            columns={columns}
            isLoading={isPending}
            data={data?.data ?? []}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            totalPages={data?.total_pages}
            currentPage={filters?.page ?? 1}
          />
        </TabsContent>
        <TabsContent value="card">
          <Cards
            isLoading={isPending}
            data={data?.data ?? []}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            totalPages={data?.total_pages}
            currentPage={filters?.page ?? 1}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Companies;
