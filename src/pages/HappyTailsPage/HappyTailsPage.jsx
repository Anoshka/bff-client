import "./HappyTailsPage.scss";
import happyTailsBg from "../../assets/images/happy_tails_bg.png";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/barneysfurryfriends"; // Replace with your actual page if different

function HappyTailsPage() {
  return (
    <section className="happy-tails">
      <div className="happy-tails__content">
        <h1 className="happy-tails__title">Tales of Love and Companionship</h1>
        <p className="happy-tails__subtitle">Barney'sFurry Friends</p>
        <p className="happy-tails__reco">100% recommend</p>
        <p className="happy-tails__opinion">
          Based on the opinion of 12 people
        </p>
        <a
          href="https://www.facebook.com/100090937669923/reviews/"
          alt="BFF Facebook Page"
          className="happy-tails__fb-link"
        >
          View All 12 Reviews
        </a>
        <div className="happy-tails__fb-embed">
          <iframe
            title="Barney's Furry Friends Facebook"
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
              "https://www.facebook.com/100090937669923/reviews/"
            )}&tabs=timeline%2Creviews&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
            width="500"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default HappyTailsPage;
