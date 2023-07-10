import { AppProps } from "next/app"
import React from "react"
import { theme } from '../styles/theme'
import { ChakraProvider } from "@chakra-ui/react"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { makeServer } from "../services/mirage"
import { QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from 'react-query/devtools'
import { queryClient } from "../services/queryClient"


if (process.env.NODE_ENV === "development") {
  makeServer();
}



function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App