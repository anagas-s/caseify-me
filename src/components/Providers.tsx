"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const Providers = () => {
  return <QueryClientProvider client={client}></QueryClientProvider>;
};

export default Providers;
