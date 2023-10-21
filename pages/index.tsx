import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

type CTALocation = "top" | "bottom";

export default function Home() {
  const onCTAClick = (ctaLocation: CTALocation) => {
    try {
      mixpanel.track("CTA Click", {
        name: "Landing",
        location: ctaLocation,
      });
    } catch (e) {
      console.error(e);
    }
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdyMJst3WVw_V8Yxzb_h3-kByOl_bqH9he4MJ8-K2hrMsUL2w/viewform"
    );
  };

  useEffect(() => {
    mixpanel.init("57428397f92647dca4d0a3176cd1101d", { track_pageview: true });
  }, []);

  return (
    <>
      <Head>
        <title>כתף לעוטף</title>
      </Head>
      <main className={`${styles.main}`}>
        <section className={`${styles.heading}`}>
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
          <button className={`${styles.cta}`} onClick={() => onCTAClick("top")}>
            אני רוצה לתת כתף!
          </button>
        </section>
        <section className={`${styles.description}`}>
          <div>
            <p className={`${styles.emoji}`}>🛋️</p>
            <p className={`${styles.descText}`}>
              אנחנו מרכזים רהיטים, ציוד מטבח ומכשירי חשמל במצב מצוין או חדש
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
          <button
            className={`${styles.cta}`}
            onClick={() => onCTAClick("bottom")}
          >
            אני רוצה לתת כתף!
          </button>
        </section>
      </main>
    </>
  );
}
