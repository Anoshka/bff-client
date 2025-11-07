import { useEffect, useState } from "react";
import { client, pageBySlugQuery, urlFor } from "../../lib/sanityClient";
import "./Pages.scss";

const Pages = ({ slug }) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const pageData = await client.fetch(pageBySlugQuery, { slug });
        setPage(pageData);
      } catch (error) {
        console.error("Error fetching page:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPage();
    }
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e, formBlock) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setFormSubmitted(true);
    setFormData({});

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  if (loading) {
    return <div className="page__loading">Loading...</div>;
  }

  if (!page) {
    return <div className="page__error">Page not found</div>;
  }

  return (
    <div className="page">
      <h1 className="page__title">{page.title}</h1>
      <div className="page__content">
        {page.content?.map((block, index) => {
          // Render text blocks
          if (block._type === "textBlock" && block.text) {
            return (
              <div key={index} className="page__text-block">
                {block.text.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            );
          }

          // Render image blocks
          if (block._type === "imageBlock" && block.asset) {
            const imageUrl = urlFor(block).width(1200).url();
            return (
              <figure key={index} className="page__image-block">
                <img
                  src={imageUrl}
                  alt={block.alt || ""}
                  className="page__image"
                />
                {block.caption && (
                  <figcaption className="page__image-caption">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          // Render form blocks
          if (block._type === "formBlock") {
            return (
              <div key={index} className="page__form-block">
                {formSubmitted ? (
                  <div className="page__form-success">
                    <p>
                      {block.successMessage ||
                        "Thank you! Your message has been sent."}
                    </p>
                  </div>
                ) : (
                  <form
                    className="page__form"
                    onSubmit={(e) => handleFormSubmit(e, block)}
                  >
                    <div className="page__form-header">
                      <h2 className="page__form-title">
                        {block.formTitle || "Send Message"}
                      </h2>
                    </div>

                    {block.fields?.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="page__form-group">
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleInputChange}
                            placeholder={field.placeholder || field.label}
                            className="page__form-textarea"
                            rows={field.rows || 5}
                            required={field.required || false}
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleInputChange}
                            placeholder={field.placeholder || field.label}
                            className="page__form-input"
                            required={field.required || false}
                          />
                        )}
                      </div>
                    ))}

                    <div className="page__form-footer">
                      <div className="page__form-button-group">
                        <button
                          type="submit"
                          className="page__form-submit-button"
                        >
                          {block.submitButtonText || "Send"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Pages;
