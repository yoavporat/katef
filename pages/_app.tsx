import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          property="og:description"
          content="אוספים ריהוט ומכשירי חשמל לתושבי הדרום"
        />
        <meta
          name="title"
          property="og:title"
          content="כתף לעוטף | עוזרים לתושבי הדרום לשקם את הבית"
        />
        <meta property="og:url" content="https://www.kateflaotef.co.il/" />
        <meta name="type" property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
