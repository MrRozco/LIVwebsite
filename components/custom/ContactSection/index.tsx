"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContact } from "@/app/actions";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { ContactInfo, SectionHeader } from "@/types";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  message: string;
  website?: string;
  formStart?: string;
};

type ContactSectionProps = {
  header: SectionHeader;
  info: ContactInfo;
};

export function ContactSection({ header, info }: ContactSectionProps) {
  const { register, handleSubmit, reset, formState } = useForm<ContactFormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formStart] = useState(() => Date.now().toString());

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await submitContact({
        ...values,
        formStart,
      });
      if (!response.ok) {
        throw new Error(response.error ?? "submit-failed");
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionContainer>
      <div className="contact__grid">
        <div>
          <SectionTitle
            eyebrow={header.eyebrow}
            title={header.title}
            description={header.description}
          />
          <div className="contact__card">
            <p>
              <strong>Studio</strong>:{" "}
              <a
                href="https://maps.google.com/?q=9701+Apollo+Dr,+Largo,+MD+20774"
                target="_blank"
                rel="noopener noreferrer"
              >
                {info.studio}
              </a>
            </p>
            <p>
              <strong>Phone</strong>: <a href="tel:+13016756700">{info.phone}</a>
            </p>
            <p>
              <strong>Hours</strong>: {info.hours}
            </p>
          </div>
        </div>
        <form className="contact__card" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
            {...register("website")}
          />
          <input type="hidden" value={formStart} {...register("formStart")} />
          <div className="form-grid">
            <Input placeholder="Full name" {...register("name", { required: true })} />
            <Input
              placeholder="Email address"
              type="email"
              {...register("email", { required: true })}
            />
            <Input placeholder="Phone number" {...register("phone")} />
            <Input placeholder="Preferred time" {...register("preferredTime")} />
          </div>
          <Textarea
            placeholder="Tell us about your goals"
            rows={5}
            {...register("message", { required: true })}
          />
          <Button label={formState.isSubmitting ? "Sending..." : "Send Message"} type="submit" />
          {status === "success" ? (
            <p className="text-muted">Thanks! We will be in touch shortly.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-muted">Something went wrong. Please try again.</p>
          ) : null}
        </form>
      </div>
    </SectionContainer>
  );
}
