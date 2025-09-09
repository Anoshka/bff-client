import { useEffect } from "react";
import "./FbReviewWidget.scss";

const ELFSIGHT_WIDGET_CLASS =
  "elfsight-app-85abb54b-79d9-4a7d-824e-2ad770ad9dfd";

function ElfsightWidget() {
  useEffect(() => {
    // elfsight load
    if (
      !document.querySelector(
        'script[src="https://apps.elfsight.com/p/platform.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://apps.elfsight.com/p/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }

    // hide elfsight branding
    const hideElfsightBranding = () => {
      const brandingLinks = document.querySelectorAll(
        'a[href*="elfsight.com/facebook-reviews-widget"]'
      );
      brandingLinks.forEach((link) => {
        link.style.display = "none";
        link.style.visibility = "hidden";
        link.style.opacity = "0";
        link.style.position = "absolute";
        link.style.left = "-9999px";
      });
    };

    hideElfsightBranding();

    // post wdget load - hide branding
    setTimeout(hideElfsightBranding, 1000);
    setTimeout(hideElfsightBranding, 2000);
    setTimeout(hideElfsightBranding, 3000);

    // dynamically add elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          hideElfsightBranding();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div className={ELFSIGHT_WIDGET_CLASS}></div>;
}

export default ElfsightWidget;
