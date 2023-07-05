import React from "react";
import "../styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export type nextPageWithHeader = NextPage & {
  disablePageHeader?: boolean;
  isAbsolute?: boolean;
};

type AppPropsWithHeader = AppProps & {
  Component: nextPageWithHeader;
};

const MyApp = ({ Component, pageProps }: AppPropsWithHeader) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
