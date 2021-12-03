import "../styles/global.css";
import Head from "next/head";
import { AppContextProvider } from "../contexts/AppContext";
import { Main } from "../layouts/Main";

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Basic Utilities</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon.ico`}
        />
      </Head>
      <AppContextProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </AppContextProvider>
    </>
  );
};

export default Application;
