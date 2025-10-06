import { FilteringCompaniesContext } from "@/context/filtering-companies-context.ts";
import { useCompanies } from "@/server/companies/get-compnaies";
import { useContext } from "react";
import { DataTable } from "../data-table";
import { columns } from "./table/columns";

const Companies = () => {
  const { filters } = useContext(FilteringCompaniesContext); // i prefer to use zustand its built on top of redux and its light library but you didnt mention it so i used context api
  const { data, isPending } = useCompanies({ filters });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data?.data ?? []} />
    </div>
  );
};

export default Companies;
