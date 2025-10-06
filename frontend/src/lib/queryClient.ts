import { QueryClient, type UseMutationOptions } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Avoid refetching on focus
      staleTime: 5 * 60 * 1000, // 5 minutes stale time
    },
  },
});

export default queryClient;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationFnType extends (...args: any) => Promise<any>,
  ErrorType = Error // Default to `Error` if not provided
> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  ErrorType, // Allow custom error types
  Parameters<MutationFnType>[0]
>;
