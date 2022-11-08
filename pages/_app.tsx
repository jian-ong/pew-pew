import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

const StyledTestHEHE = styled.div`
  color: red;
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <StyledTestHEHE>im red</StyledTestHEHE>
      <Component {...pageProps} />
    </>
  );
}
