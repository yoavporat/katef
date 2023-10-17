import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>כתף לעוטף</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.scroll}`}>
          <div className={`${styles.heading}`}>
            <Image
              src="/logo.svg"
              alt="logo"
              className={styles.logo}
              width={100}
              height={24}
              priority
            />
            <h1>כתף לעוטף</h1>
            <h3>עוזרים לתושבי הדרום לשקם את הבית</h3>
          </div>
          <section className={`${styles.description}`}>
            <p>
              אתם תורמים לנו רהיטים, ציוד מטבח ומכשירים חשמליים, במצב מצוין
              בלבד, ואנחנו מרכזים אותם במחסנים שלנו במושב ומתכוננים ליום שאחרי,
              שבו נוכל לעזור למי שמשקם את ביתו, ואולי נעניק שביב של התחלה קצת
              יותר קלה בתוך כל הכאוס 🙏🏽
            </p>
            <h3>מי אנחנו?</h3>
            <p>אנחנו החבר׳ה ממחזור מ׳ בבית ספר עמי אסף, ילידי 86</p>
          </section>
        </div>
        <h3 className={`${styles.cta}`}>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdyMJst3WVw_V8Yxzb_h3-kByOl_bqH9he4MJ8-K2hrMsUL2w/viewform">
            אני רוצה לתת כתף!
          </Link>
        </h3>
      </main>
    </>
  );
}
