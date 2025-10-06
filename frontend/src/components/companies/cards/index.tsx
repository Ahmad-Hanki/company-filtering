import type { Company, FiltersProps } from "@/types/api-type";
import CardItem from "./card-item";
import TopFilters from "../top-filters";
import Pagination from "@/components/pagination";
import NoDataErrorMessage from "../no-data-error-message";

const Cards = ({
  data,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  isLoading,
  onNextPage,
  onPreviousPage,
  totalPages,
}: { data: Company[] } & FiltersProps) => {
  return (
    <div>
      <TopFilters />
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {data?.map((company) => (
            <CardItem key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <NoDataErrorMessage />
      )}

      <Pagination
        onPageChange={(page: number) => {
          if (page > currentPage!) {
            onNextPage && onNextPage();
          } else if (page < currentPage!) {
            onPreviousPage && onPreviousPage();
          }
        }}
        currentPage={currentPage!}
        totalPages={totalPages!}
        hasNextPage={hasNextPage!}
        hasPreviousPage={hasPreviousPage!}
        isLoading={isLoading}
        onNextPage={onNextPage!}
        onPreviousPage={onPreviousPage!}
      />
    </div>
  );
};

export default Cards;
