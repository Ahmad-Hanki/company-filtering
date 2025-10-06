import Companies from "./components/companies";
import { FilteringCompaniesProvider } from "./context/filtering-companies-provider";

function App() {
  return (
    <FilteringCompaniesProvider>
      <Companies />
    </FilteringCompaniesProvider>
  );
}

export default App;
