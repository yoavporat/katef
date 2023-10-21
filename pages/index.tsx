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
        <section className={`${styles.heading}`}>
          <Image
            src="/logoL.svg"
            alt="logo"
            className={styles.logo}
            width={100}
            height={24}
            priority
          />
          <h1>כתף לעוטף</h1>
          <h3>עוזרים לתושבי הדרום לשקם את הבית</h3>
          <button className={`${styles.cta}`} onClick={onCTAClick}>
            אני רוצה לתת כתף!
          </button>
        </section>
        <section className={`${styles.description}`}>
          <div>
            <p className={`${styles.emoji}`}>🛋️</p>
            <p className={`${styles.descText}`}>
              אנחנו מרכזים רהיטים, ציוד מטבח ומכשירי חשמל במצב טוב
            </p>
          </div>
          <div>
            <p className={`${styles.emoji}`}>🚜</p>
            <p className={`${styles.descText}`}>
              כל פריט שיתרם יאוחסן במחסנים במושב שלנו וימתין למשפחות ביום שאחרי
            </p>
          </div>
          <div>
            <p className={`${styles.emoji}`}>🌱</p>
            <p className={`${styles.descText}`}>
              אלו לא סתם פריטים אלא תקווה ואור בדרכה החדשה של כל משפחה.
              <br /> יחד נוכל להקל על דרכם בהתאוששות
            </p>
          </div>
          <button className={`${styles.cta}`} onClick={onCTAClick}>
            אני רוצה לתרום!
          </button>
        </section>
      </main>
    </>
  );
}
