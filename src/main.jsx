import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { BlockChainProvider } from "./context/blockChainContext";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BlockChainProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BlockChainProvider>
);
