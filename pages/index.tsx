import Head from "next/head";
import styled from "styled-components";
import Grid from "../components/Grid";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pew pew!</title>
        <meta name="description" content="fun shooter game by Matt and Jian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Grid height={10} width={10} />
      </Main>
    </div>
  );
}
