import Companies from "./components/companies";
import { FilteringCompaniesProvider } from "./context/filtering-companies-provider";

function App() {
  return (
    <div className="px-4">
      <FilteringCompaniesProvider>
        <Companies />
      </FilteringCompaniesProvider>
    </div>
  );
}

export default App;
