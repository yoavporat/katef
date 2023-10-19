import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@200&display=swap"
          rel="stylesheet"
        />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
