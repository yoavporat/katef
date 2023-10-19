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
          content="אנחנו אוספים ריהוט, ציוד מטבח ומכשירי חשמל במצב מצויין או חדש בלבד כדי שתושבי הדרום יוכלו לבחור מקטלוג כשירצו ויקבלו את מה שבחרו עד הבית"
        ></meta>
        <meta
          name="title"
          property="og:title"
          content="כתף לעוטף | עוזרים לתושבי הדרום לשקם את הבית"
        ></meta>
        <meta property="og:url" content="https://www.kateflaotef.co.il/"></meta>
        <meta name="type" property="og:type" content="website"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
