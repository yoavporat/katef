import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWaze,
} from "@fortawesome/free-brands-svg-icons";

type CTALocation = "top" | "bottom" | "inline";

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
              אנחנו מרכזים רהיטים, ציוד מטבח ומכשירי חשמל במצב חדש בלבד
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
        </section>
        <section className={`${styles.howItWorks}`}>
          <h2>איך זה עובד?</h2>
          <div className={`${styles.wrapper}`}>
            <p className={`${styles.emoji}`}>📝</p>
            <p
              className={`${styles.descText} ${styles.underline}`}
              onClick={() => onCTAClick("inline")}
            >
              אתם ממלאים את <u>הטופס</u>, אנחנו מבטיחים לחזור אליכם מהר ככל
              הניתן
            </p>
          </div>
          <div className={`${styles.wrapper}`}>
            <p className={`${styles.emoji}`}>📸</p>
            <p className={`${styles.descText}`}>
              אתם שולחים לנו תמונה של הפריטים שאתם רוצים למסור
            </p>
          </div>
          <div className={`${styles.wrapper}`}>
            <p className={`${styles.emoji}`}>🗓️</p>
            <p className={`${styles.descText}`}>
              אנחנו מתאמים איתכם מועד למסירה ישירות אלינו
            </p>
          </div>
          <button
            className={`${styles.cta}`}
            onClick={() => onCTAClick("bottom")}
          >
            אני רוצה לתת כתף!
          </button>
        </section>
        <section className={`${styles.contact}`}>
          <h2>הצטרפו אלינו!</h2>
          <h3>
            אנחנו מחפשים מתנדבים להובלות, העמסות, פריקות, ניהול מחסן וניהול חמ״ל
          </h3>
          <p className={`${styles.clickToCall}`}>
            דברו עם שיר
            <br />
            <a href="tel:0505902260">050-590-2260</a>
          </p>
          <div className={`${styles.socialWrapper}`}>
            {/* <FontAwesomeIcon icon={faFacebookF} color="#f9f9f9" width={20} /> */}
            {/* <FontAwesomeIcon icon={faInstagram} color="#f9f9f9" width={40} /> */}
            <a href="https://ul.waze.com/ul?preview_venue_id=22872386.228789395.404400&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
              <FontAwesomeIcon icon={faWaze} color="#00a6fb" width={40} />
            </a>
          </div>
        </section>
        <div className={`${styles.mapWrapper}`}>
          <iframe src="https://www.google.com/maps/embed/v1/place?q=Harimon+Street+5,+Gan+Haim,+Israel&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
        </div>
      </main>
    </>
  );
}
