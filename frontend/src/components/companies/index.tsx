import { FilteringCompaniesContext } from "@/context/filtering-companies-context.ts";
import { useCompanies } from "@/server/companies/get-compnaies";
import { useContext } from "react";

const Companies = () => {
  const { filters } = useContext(FilteringCompaniesContext);
  const { data, isPending } = useCompanies({ filters });

  console.log(data, isPending);

  return <div></div>;
};

export default Companies;
