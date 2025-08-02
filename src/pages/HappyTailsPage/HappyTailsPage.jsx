import "./HappyTailsPage.scss";
import FbReviews from "../../components/FbReviewWidget/FbReviewWidget";

// Replace with your actual page if different

function HappyTailsPage() {
  return (
    <section className="happy-tails">
      <div className="happy-tails__content">
        <h1 className="happy-tails__title">Tales of Love and Companionship</h1>
        <p className="happy-tails__subtitle">Barney's Furry Friends</p>
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
        <FbReviews className="happy-tails__fb-reviews" />
      </div>
    </section>
  );
}

export default HappyTailsPage;
