import { Link } from "react-router-dom";
import "./FAQPage.scss";

const FAQPage = () => {
  return (
    <div className="faq">
      <h1 className="faq__title">RETURN AND REFUND POLICY</h1>
      <h2 className="faq__subtitle">
        Frequently asked questions, please find the answers below:
      </h2>
      <h2 className="faq__question">
        The adoption process:{" "}
        <span className="faq__answer">
          When you find a dog you'd like to meet, please fill out the{" "}
          <Link to="/apply-to-adopt" className="faq__answer--link">
            adoption application form
          </Link>{" "}
          {""}on our website. If you're a suitable candidate for the specific
          dog you're applying for, the next step is a home-check, when that's
          completed we schedule a time for you to meet the dog. If everything
          goes well, you sign the contract, pay the adoption fee and the dog
          goes home with you.
        </span>
      </h2>

      <h2 className="faq__question">
        Adoption Fee:{" "}
        <span className="faq__answer">
          $795 + GST & PST. (The adoption fee includes the cost to acquire the
          dog, any necessary care and transportation costs for the dog while in
          California, vet costs before coming to Canada, transportation from
          California, vaccines, flea/thick meds, dewormer, dental and
          spay/neuter).
        </span>
      </h2>
      <h2 className="faq__question">
        Spay/Neutering:{" "}
        <span className="faq__answer">
          All of our rescue dogs get spayed/neutered prior to getting adopted.
        </span>
      </h2>
      <h2 className="faq__question">
        Unforeseen medical issues with the adopted dog:{" "}
        <span className="faq__answer">
          All our rescue dogs get seen by a veterinarian for a full health exam,
          neutering/spaying, vaccines, microchip, flea/thick and deworming
          prevention before we adopt the dog out. If something is missed, please
          contact the rescue and we will ensure it is taken care of.
        </span>
      </h2>

      <p className="faq__standalone">
        We require all of our adopters to purchase an Apple Airtag, Tile or
        Tractive, for the dog to wear at all times when outdoors. We do this for
        the safety of our rescue dogs.
      </p>

      <h2 className="faq__question">
        If an adoption isn't working out:{" "}
        <span className="faq__answer">
          We require you to contact the rescue, and we will be happy to take the
          dog back in to our care.
        </span>
      </h2>
      <h2 className="faq__question">
        Where are you located:{" "}
        <span className="faq__answer">
          We are based out of Coquitlam BC, Canada.
        </span>
      </h2>

      <p className="faq__contact">
        For any other questions, please contact us at{" "}
        <a href="mailto:barneysrescue@gmail.com" className="faq__link">
          barneysrescue@gmail.com
        </a>
      </p>
    </div>
  );
};

export default FAQPage;
