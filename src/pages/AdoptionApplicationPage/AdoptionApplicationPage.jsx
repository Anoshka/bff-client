// AdoptionApplicationPage.jsx
import React from "react";
import "./AdoptionApplicationPage.scss";

const AdoptionApplicationPage = () => {
  return (
    <form className="adoption-form">
      <h1 className="adoption-form__title">Adoption Application</h1>

      <p className="adoption-form__description">
        Barney's Furry Friends is an all-volunteer, animal welfare organization
        dedicated to the rescue and placement of stray, neglected and abused
        animals. Barney's Furry Friends is completely funded through fundraising
        efforts and public donations. All of our pets are cared for by foster
        homes and receive complete medical care, which includes worming,
        vaccinations and spaying/neutering prior to their adoption.
      </p>
      <p className="adoption-form__description">
        This questionnaire is designed to help Barney's Furry Friends and
        yourself determine if a specific dog is the right one for you and your
        household. All adopting parties are required to complete this form prior
        to adoption. Barney's Furry Friends reserves the right to deny any
        adoption based on answers to this questionnaire and/or interviews prior
        to adoptions!
      </p>

      {/* Applicant Info */}
      <h2 className="adoption-form__heading">Applicant Information</h2>
      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Name of the dog you are interested in:
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="fullName"
          required
        />
      </label>
      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Your full name: <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="fullName"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Your age: <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="number"
          name="age"
          placeholder="ex: 23"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Street Address: <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="streetAddress"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          City, State, Zip: <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="cityStateZip"
          required
        />
      </label>

      <fieldset className="adoption-form__group adoption-form__group--number">
        <label
          className="adoption-form__label adoption-form__label--cell"
          htmlFor="areaCode"
        >
          Cell Phone: <span className="adoption-form__required">*</span>
        </label>
        <div className="adoption-form__phone-group">
          <input
            className="adoption-form__input adoption-form__input--area"
            type="text"
            id="areaCode"
            name="areaCode"
            placeholder="Area Code"
            maxLength={3}
            required
          />
          <span className="adoption-form__dash">-</span>
          <input
            className="adoption-form__input adoption-form__input--number"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            maxLength={10}
            required
          />
        </div>
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Email: <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="email"
          name="email"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          What's your profession?*{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="profession"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Employer: <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="employer"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Character reference and phone number:{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="reference"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Briefly describe a bit about yourself:{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <textarea
          className="adoption-form__input adoption-form__input--big"
          name="about"
          required
        ></textarea>
      </label>

      {/* Household Agreement */}
      <h2 className="adoption-form__heading">Household Information</h2>
      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Are all members of your household in agreement with this adoption?*{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No", "Don't Know"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="householdAgreement"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Who will be the pet's primary caregiver?*{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      {/* Housing Type */}
      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Do you live in a: <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["House", "Apartment", "Condo", "Mobile Home", "Other"].map(
          (option) => (
            <label className="adoption-form__checkbox-label" key={option}>
              <input
                className="adoption-form__checkbox"
                type="radio"
                name="housingType"
                value={option}
              />
              {option}
            </label>
          )
        )}
      </fieldset>

      {/* Ownership */}
      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Do you own or rent?*{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Own", "Rent"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="ownership"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If rent, provide name and phone number of landlord:{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="landlordInfo"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          How long have you lived at this residence?*{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          Does your landlord allow dogs?
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="dogsAllowed"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Are there any restrictions from your landlord or subdivision? *{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {[
          "Number of pets",
          "Size or weight restrictions",
          "Breed restrictions",
          "None",
        ].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="checkbox"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Do you have a fully fenced yard? *{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Height and type of fence{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          How many adults are in your househole?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
          placeholder="ex: 23"
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          How many children are in your househole?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
          placeholder="ex: 23"
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If there are children, what are their ages?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Have your children bee around animals before? *{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Does anyone in your home have allergies to dogs or have asthma? *{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      {/* Previous Pet Information */}
      <h2 className="adoption-form__heading">
        Current/Previous Pet Information
      </h2>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          List any pets you own or have owned in the past five years, and their
          ages <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--medium"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          How many of these pets are spayed/neutered?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Where are these animals now?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--medium"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Have you adopted from an animal welfare group before?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="householdAgreement"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If yes, what group? <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Have you ever given up a pet?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="householdAgreement"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If yes, what were the circumstances?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--big"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Please provide the name and phone number of your current and/or
          previous veterinarian or clinic:{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--big"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      {/* New Pet Information */}
      <h2 className="adoption-form__heading">New Pet Information</h2>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          What type of personality do you want your pet to have? (i.e. calm,
          energetic, protective, couch-potato)*{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--medium"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Are you aware of crate training?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Have you ever house-broken a dog or puppy before?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If the dog has an "accident" in your home, what type of correction do
          you plan to use? <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--medium"
          type="text"
          name="landlordInfo"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          How many hours each day will your new pet be home alone?*{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Where will your new pet sleep at night?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          How will you supervise the dog's outdoor activity?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          Where will your new dog stay when nobody is home?{" "}
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          What length of time will you allow your new pet to adjust to his new
          home? <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Are you willing to work through your new pet's issues, if any?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Are you aware that a new environment is stressful for your pet, and
            they may exhibit uncharacteristic behavior?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Do you understand that a dog can be an 18 year commitment, and can
            cost $2000-3000 per year to care for?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          Are you planning on purchasing Pet Insurance for your dog?
        </legend>
        {["Yes, with Trupanion", "Yes, with another company", "No"].map(
          (option) => (
            <label className="adoption-form__checkbox-label" key={option}>
              <input
                className="adoption-form__checkbox"
                type="checkbox"
                name="dogsAllowed"
                value={option}
              />
              {option}
            </label>
          )
        )}
      </fieldset>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            Do you plan to take an obedience class with your dog?{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No", "Not sure"].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If yes, where? <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          What circumstances would lead you to give up your new dog?
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--medium"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <label className="adoption-form__label">
        <div className="adoption-form__question">
          If you had to give up your dog, what would you do with him/her?
          <span className="adoption-form__required">*</span>
        </div>
        <input
          className="adoption-form__input adoption-form__input--big"
          type="text"
          name="residenceDuration"
          required
        />
      </label>

      <fieldset className="adoption-form__group">
        <legend className="adoption-form__label adoption-form__label--legend">
          <div className="adoption-form__question">
            How did you find out about Barney's Furry Friends? *{" "}
            <span className="adoption-form__required">*</span>
          </div>
        </legend>
        {[
          "Petfinder.com",
          "Facebook",
          "Other website",
          "Bosleys",
          "Instagram",
        ].map((option) => (
          <label className="adoption-form__checkbox-label" key={option}>
            <input
              className="adoption-form__checkbox"
              type="checkbox"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      {/* Submit */}
      <button className="adoption-form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AdoptionApplicationPage;
