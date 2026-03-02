"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import type { AssessmentBlock } from "@/types";

type AssessmentSectionProps = {
  content: AssessmentBlock;
};

export function AssessmentSection({ content }: AssessmentSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer className="assessment">
      <div className="assessment__grid">
        <div className="assessment__content">
          <SectionTitle
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <ul className="assessment__list">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="assessment__actions">
            <Button label={content.primaryCtaLabel} href={content.primaryCtaHref} />
            <Button
              label={content.secondaryCtaLabel}
              variant="outline"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <div className="assessment__panel">
          <div className="assessment__panel-title">What you will share</div>
          <p className="assessment__panel-text">
            Help us personalize your care! This brief survey gathers key details for comprehensive
            health screenings, focusing on chronic disease management.
          </p>
          <div className="assessment__panel-items">
            <span>Personal history</span>
            <span>Family history</span>
            <span>Lifestyle & habits</span>
            <span>Screenings</span>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="assessment__modal" role="dialog" aria-modal="true">
          <div className="assessment__overlay" onClick={() => setIsOpen(false)} />
          <div className="assessment__modal-card">
            <div className="assessment__modal-header">
              <div>
                <h3>Health Assessment Survey</h3>
                <p>
                  Help us personalize your care! This brief survey gathers key details for
                  comprehensive health screenings, focusing on chronic disease management. Your
                  input guides our approach to better meet your unique health needs. Thank you for
                  taking a moment for your well-being.
                </p>
              </div>
              <button
                type="button"
                className="assessment__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form className="assessment__form">
              <div className="assessment__section">
                <h4>Personal Information</h4>
                <div className="form-grid">
                  <div>
                    <label htmlFor="firstName">First Name (Required)</label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name (Required)</label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                  <div>
                    <label>Date of Birth</label>
                    <div className="assessment__dob">
                      <Input name="dobMonth" type="number" min={1} max={12} placeholder="MM" />
                      <Input name="dobDay" type="number" min={1} max={31} placeholder="DD" />
                      <Input
                        name="dobYear"
                        type="number"
                        min={1900}
                        max={2100}
                        placeholder="YYYY"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="gender">Gender</label>
                    <Select id="gender" name="gender">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="email">Email (Required)</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone Number (Required)</label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <div className="assessment__section">
                <h4>Medical History</h4>
                <Textarea
                  name="conditions"
                  rows={3}
                  placeholder="Do you have any existing medical conditions? Please specify."
                />
                <Textarea
                  name="surgeries"
                  rows={3}
                  placeholder="List any surgeries or significant medical procedures you have undergone."
                />
              </div>

              <div className="assessment__section">
                <h4>Family Medical History</h4>
                <Textarea
                  name="familyHistory"
                  rows={3}
                  placeholder="Are there any chronic diseases prevalent in your immediate family? Please provide details."
                />
              </div>

              <div className="assessment__section">
                <h4>Lifestyle and Habits</h4>
                <Textarea name="diet" rows={3} placeholder="Describe your typical daily diet." />
                <div>
                  <label htmlFor="activity">
                    How often do you engage in physical activity or exercise?
                  </label>
                  <Input id="activity" name="activity" placeholder="e.g., 3 times per week" />
                </div>
                <div>
                  <label htmlFor="activityScore">Please enter a number from 1 to 10.</label>
                  <Input id="activityScore" name="activityScore" type="number" min={1} max={10} />
                </div>
              </div>

              <div className="assessment__section">
                <h4>Substance Use, Smoking, and Alcohol Consumption</h4>
                <Textarea
                  name="substanceUse"
                  rows={3}
                  placeholder="Do you currently use tobacco, marijuana, or any other substances? If yes, please specify the type and frequency."
                />
                <Textarea
                  name="smoking"
                  rows={3}
                  placeholder="Do you currently smoke? If yes, how many cigarettes per day?"
                />
                <Textarea
                  name="alcohol"
                  rows={3}
                  placeholder="How often do you consume alcoholic beverages, and in what quantities?"
                />
              </div>

              <div className="assessment__section">
                <h4>Mental Health</h4>
                <Textarea
                  name="stress"
                  rows={3}
                  placeholder="Have you experienced high levels of stress or anxiety recently?"
                />
                <Textarea
                  name="mentalHistory"
                  rows={3}
                  placeholder="Do you have a history of mental health concerns?"
                />
              </div>

              <div className="assessment__section">
                <h4>Medication and Supplements</h4>
                <Textarea
                  name="medications"
                  rows={3}
                  placeholder="List any current medications or supplements you are taking."
                />
                <Textarea
                  name="sideEffects"
                  rows={3}
                  placeholder="Have you experienced any side effects from your medications?"
                />
              </div>

              <div className="assessment__section">
                <h4>Screening Tests</h4>
                <Textarea
                  name="lastScreening"
                  rows={3}
                  placeholder="When was your last comprehensive health screening?"
                />
                <Textarea
                  name="specificTests"
                  rows={3}
                  placeholder="Have you had any specific tests related to chronic disease management? Please provide details."
                />
              </div>

              <div className="assessment__section">
                <h4>Weight and BMI</h4>
                <Textarea
                  name="weightHeight"
                  rows={2}
                  placeholder="What is your current weight and height?"
                />
                <Textarea
                  name="weightManagement"
                  rows={2}
                  placeholder="Are you actively trying to manage your weight?"
                />
              </div>

              <div className="assessment__section">
                <h4>General Well-being</h4>
                <div>
                  <label htmlFor="wellbeing">
                    How would you rate your overall well-being on a scale of 1 to 10?
                  </label>
                  <Input id="wellbeing" name="wellbeing" type="number" min={1} max={10} />
                </div>
                <Textarea
                  name="additionalNotes"
                  rows={3}
                  placeholder="Is there anything else you would like to share about your health that may be relevant?"
                />
              </div>

              <div className="assessment__submit">
                <Button label="Submit Survey" type="submit" />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </SectionContainer>
  );
}
