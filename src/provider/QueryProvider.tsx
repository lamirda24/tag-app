import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, _) => {
      console.error(error);
    }
  })
});
type Props = {
  children: ReactNode;
};

export function QueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
