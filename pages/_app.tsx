import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "./globalStyles";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
