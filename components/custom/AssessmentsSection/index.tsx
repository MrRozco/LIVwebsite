"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import type { AssessmentsPageContent, AssessmentItem } from "@/types";
import { submitAssessment } from "@/app/actions";

type AssessmentsSectionProps = {
  content: AssessmentsPageContent;
};

type ActiveModal = AssessmentItem | null;

export function AssessmentsSection({ content }: AssessmentsSectionProps) {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [formStart, setFormStart] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const groupedAssessments = content.assessments.reduce<Record<string, AssessmentItem[]>>(
    (acc, item) => {
      const category = item.category ?? "Assessments";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {},
  );

  return (
    <SectionContainer className="assessments">
      <div className="assessments__header">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="assessments__steps">
          {content.steps.map((step, index) => (
            <div key={step.title} className="assessments__step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="assessments__groups">
        {Object.entries(groupedAssessments).map(([category, items]) => (
          <section key={category} className="assessments__group">
            <div className="assessments__group-header">
              <h3 className="assessments__group-title">{category}</h3>
            </div>
            <div className="assessments__grid">
              {items.map((item) => (
                <div key={item.slug} className="assessments__card">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <Button
                    label={item.ctaLabel}
                    onClick={() => {
                      setActiveModal(item);
                      setFormStart(Date.now().toString());
                      setSubmitStatus("idle");
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {activeModal ? (
        <div className="assessments__modal" role="dialog" aria-modal="true">
          <div className="assessments__overlay" onClick={() => setActiveModal(null)} />
          <div className="assessments__modal-card">
            <div className="assessments__modal-header">
              <div>
                <h3>{activeModal.title}</h3>
                <p>{activeModal.modalIntro}</p>
              </div>
              <button
                type="button"
                className="assessments__close"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="assessments__modal-body">
              {activeModal.form ? (
                <form
                  className="assessments__form"
                  onSubmit={async (event) => {
                    event.preventDefault();
                    const formElement = event.currentTarget;
                    const formData = new FormData(formElement);
                    formData.set("assessmentTitle", activeModal.title);
                    formData.set("assessmentSlug", activeModal.slug);
                    formData.set("formStart", formStart);

                    try {
                      const response = await submitAssessment(formData);
                      if (!response.ok) {
                        throw new Error(response.error ?? "submit-failed");
                      }
                      setSubmitStatus("success");
                      setSubmitError("");
                      formElement.reset();
                    } catch (error) {
                      setSubmitError(
                        error instanceof Error ? error.message : "Unable to send submission",
                      );
                      setSubmitStatus("error");
                    }
                  }}
                >
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    aria-hidden="true"
                    name="website"
                  />
                  <input type="hidden" name="formStart" value={formStart} />
                  <input type="hidden" name="assessmentTitle" value={activeModal.title} />
                  <input type="hidden" name="assessmentSlug" value={activeModal.slug} />
                  {activeModal.form.intro ? (
                    <p className="assessments__form-intro">{activeModal.form.intro}</p>
                  ) : null}

                  <div className="assessments__section">
                    <h4>Personal Information</h4>
                    <div className="form-grid">
                      <div>
                        <label htmlFor="clientFirstName">
                          {activeModal.form.personalInfo.firstNameLabel}
                        </label>
                        <input
                          id="clientFirstName"
                          name="clientFirstName"
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="clientLastName">
                          {activeModal.form.personalInfo.lastNameLabel}
                        </label>
                        <input
                          id="clientLastName"
                          name="clientLastName"
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="clientEmail">
                          {activeModal.form.personalInfo.emailLabel ?? "Email"}
                        </label>
                        <input
                          id="clientEmail"
                          name="clientEmail"
                          type="email"
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="clientPhone">
                          {activeModal.form.personalInfo.phoneLabel ?? "Phone"}
                        </label>
                        <input id="clientPhone" name="clientPhone" type="tel" className="input" />
                      </div>
                      <div>
                        <label htmlFor="clientAge">{activeModal.form.personalInfo.ageLabel}</label>
                        <input id="clientAge" name="clientAge" className="input" />
                      </div>
                      <div>
                        <label htmlFor="clientGender">
                          {activeModal.form.personalInfo.genderLabel}
                        </label>
                        <select id="clientGender" name="clientGender" className="select">
                          {activeModal.form.personalInfo.genderOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {activeModal.form.mode !== "fields" ? (
                    <>
                      <div className="assessments__section">
                        <h4>Response</h4>
                        <div className="assessments__response">
                          {activeModal.form.responseOptions.map((option) => (
                            <span key={option}>{option}</span>
                          ))}
                        </div>
                      </div>

                      {activeModal.form.sections.map((section) => (
                        <div key={section.title} className="assessments__section">
                          <h4>{section.title}</h4>
                          {section.description ? <p>{section.description}</p> : null}
                          <div className="assessments__questions">
                            {section.questions.map((question, index) => (
                              <div
                                key={`${section.title}-${index}`}
                                className="assessments__question"
                              >
                                <p>{question}</p>
                                <div className="assessments__options">
                                  {activeModal.form?.responseOptions.map((option) => (
                                    <label key={option}>
                                      <input
                                        type="radio"
                                        name={`${section.title}-${index}`}
                                        value={option}
                                      />
                                      <span>{option}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {activeModal.form.fieldSections?.map((section) => (
                        <div key={section.title} className="assessments__section">
                          <h4>{section.title}</h4>
                          {section.description ? <p>{section.description}</p> : null}
                          <div
                            className={
                              section.layout === "stacked"
                                ? "form-grid form-grid--stacked"
                                : "form-grid"
                            }
                          >
                            {section.fields.map((field) => (
                              <div
                                key={field.name}
                                className={
                                  field.type === "textarea" || field.fullWidth
                                    ? "form-grid__full"
                                    : undefined
                                }
                              >
                                <label htmlFor={field.name}>{field.label}</label>
                                {field.type === "textarea" ? (
                                  <textarea
                                    id={field.name}
                                    name={field.name}
                                    className="textarea"
                                    placeholder={field.placeholder}
                                    rows={3}
                                  />
                                ) : field.type === "select" ? (
                                  <select id={field.name} name={field.name} className="select">
                                    {field.options?.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                ) : (
                                  <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    className="input"
                                    placeholder={field.placeholder}
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  <div className="assessments__modal-actions">
                    <Button label="Submit Assessment" type="submit" />
                    <Button label="Close" variant="outline" onClick={() => setActiveModal(null)} />
                  </div>
                  {submitStatus === "success" ? (
                    <p className="text-muted">Thanks! Your assessment was sent.</p>
                  ) : null}
                  {submitStatus === "error" ? (
                    <p className="text-muted">
                      {submitError || "Something went wrong while sending. Please try again."}
                    </p>
                  ) : null}
                </form>
              ) : (
                <>
                  <p>{activeModal.placeholderText}</p>
                  <div className="assessments__modal-actions">
                    <Button label="Close" variant="outline" onClick={() => setActiveModal(null)} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </SectionContainer>
  );
}
