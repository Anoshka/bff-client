// AdoptionApplicationPage.jsx
import React from "react";
import "./FosterApplicationPage.scss";

const AdoptionApplicationPage = () => {
  return (
    <form className="foster-form">
      <h1 className="foster-form__title">
        Barney's Furry Friends Foster Application
      </h1>

      {/* Applicant Info */}

      <label className="foster-form__label">
        <div className="foster-form__question">
          NAME
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="First Name"
          required
        />
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="Last Name"
          required
        />
      </label>
      <label className="foster-form__label">
        <div className="foster-form__question">
          ADDRESS <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="Street Address"
          required
        />
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="Street Address Line2"
          required
        />
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="City"
          required
        />
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="State / Province"
          required
        />
        <input
          className="foster-form__input"
          type="text"
          name="fullName"
          placeholder="Postal / Zip Code"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          EMAIL ADDRESS <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="email"
          name="age"
          required
        />
      </label>

      <fieldset className="foster-form__group foster-form__group--number">
        <label
          className="foster-form__label foster-form__label--cell"
          htmlFor="areaCode"
        >
          PHONE NUMBER <span className="foster-form__required">*</span>
        </label>
        <div className="foster-form__phone-group">
          <input
            className="foster-form__input foster-form__input--area"
            type="text"
            id="areaCode"
            name="areaCode"
            placeholder="Area Code"
            maxLength={3}
            required
          />
          <span className="foster-form__dash">-</span>
          <input
            className="foster-form__input foster-form__input--number"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            maxLength={10}
            required
          />
        </div>
      </fieldset>

      <label className="foster-form__label">
        <div className="foster-form__question">
          Email: <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="email"
          name="email"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          DO YOU OWN OR RENT YOUR HOME?{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="text"
          name="profession"
          required
        />
      </label>

      <fieldset className="foster-form__group">
        <legend className="foster-form__label foster-form__label--legend">
          <div className="foster-form__question">
            IS YOUR YARD FENCED?*{" "}
            <span className="foster-form__required">*</span>
          </div>
        </legend>
        {["Yes", "No"].map((option) => (
          <label className="foster-form__checkbox-label" key={option}>
            <input
              className="foster-form__checkbox"
              type="radio"
              name="householdAgreement"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="foster-form__label">
        <div className="foster-form__question">
          PLEASE LIST ALL THE MEMBERS OF YOUR HOUSEHOLE ALONG WITH THEIR AGES:{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input foster-form__input--big"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          PLEASE LIST ALL PETS LIVING IN THE HOME:{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          DO YOU FOSTER FOR ANOTHER RESCUE?{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input foster-form__input--big"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          IS THERE ANY ANIMAL YOU'RE NOT WILLING TO FOSTER?{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input foster-form__input--big"
          type="text"
          name="primaryCaregiver"
          required
        />
      </label>

      <fieldset className="foster-form__group">
        <legend className="foster-form__label foster-form__label--legend">
          <div className="foster-form__question">
            I AM INTERESTED IN FOSTERING:{" "}
            <span className="foster-form__required">*</span>
          </div>
        </legend>
        {["1 YEAR AND OVER", "4 MONTHS AND OVER"].map((option) => (
          <label className="foster-form__checkbox-label" key={option}>
            <input
              className="foster-form__checkbox"
              type="radio"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="foster-form__label">
        <div className="foster-form__question">
          WHERE WILL THE FOSTER DOG BE KEPT DURING THE DAY?{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input foster-form__input--big"
          type="text"
          name="landlordInfo"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          HOW MANY HOURS WILL THE FOSTER DOG BE ALONE DURING THE DAY?{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input foster-form__input--big"
          type="text"
          name="landlordInfo"
          required
        />
      </label>

      <label className="foster-form__label">
        <div className="foster-form__question">
          PLEASE LIST TWO REFERENCES (ONE NON-FAMILY MEMBER):{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input foster-form__input--big"
          type="text"
          name="landlordInfo"
          required
        />
      </label>

      <fieldset className="foster-form__group">
        <legend className="foster-form__label foster-form__label--legend">
          <div className="foster-form__question">
            HOW DID YOU LEARN ABOUT OUR RESCUE?{" "}
            <span className="foster-form__required">*</span>
          </div>
        </legend>
        {[
          "Petfinder.com",
          "Facebook",
          "Other website",
          "Bosleys",
          "Instagram",
        ].map((option) => (
          <label className="foster-form__checkbox-label" key={option}>
            <input
              className="foster-form__checkbox"
              type="checkbox"
              name="housingType"
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="foster-form__label">
        <div className="foster-form__question">
          BY TYPING MY FULL NAME BELOW, I AFFIRM THAT ALL INFORMATION ABOVE IS
          TRUE. ANY FOSTER DOG I DO FOSTER BELONGS TO BARNEY'S FURRY FRIENDS,
          AND CANNOT BE ADOPTED BY THE FOSTER WITHOUT THE PERMISSION FROM PIA
          MASO, THE OWNER OF BARNEY'S FURRY FRIENDS RESCUE.{" "}
          <span className="foster-form__required">*</span>
        </div>
        <input
          className="foster-form__input"
          type="text"
          name="landlordInfo"
          placeholder="TYPE FULL NAME HERE"
          required
        />
      </label>

      {/* Submit */}
      <button className="foster-form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AdoptionApplicationPage;
