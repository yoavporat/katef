import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const onCTAClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdyMJst3WVw_V8Yxzb_h3-kByOl_bqH9he4MJ8-K2hrMsUL2w/viewform"
    );
  };

  return (
    <>
      <Head>
        <title>כתף לעוטף</title>
      </Head>
      <main className={`${styles.main}`}>
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
        <section>
          <p>
            אנו מרכזים רהיטים, ציוד מטבח ומכשירים חשמליים במצב טוב. כל פריט
            שיתרם יאחוסן במחסני המושב שלנו ויחכה למשפחות ביום שאחרי. אלו לא סתם
            פריטים אלא תקווה ואור בדרכה החדשה של כל משפחה. יחד נוכל להקל על דרכם
            בהתאוששות.
          </p>
          <button className={`${styles.cta}`} onClick={onCTAClick}>
            אני רוצה לתת כתף!
          </button>
        </section>
      </main>
    </>
  );
}
