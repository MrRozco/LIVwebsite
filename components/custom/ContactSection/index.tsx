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
};

type ContactSectionProps = {
  header: SectionHeader;
  info: ContactInfo;
};

export function ContactSection({ header, info }: ContactSectionProps) {
  const { register, handleSubmit, reset, formState } = useForm<ContactFormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitContact(values);
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
              <strong>Studio</strong>: {info.studio}
            </p>
            <p>
              <strong>Email</strong>: {info.email}
            </p>
            <p>
              <strong>Phone</strong>: {info.phone}
            </p>
            <p>
              <strong>Hours</strong>: {info.hours}
            </p>
          </div>
        </div>
        <form className="contact__card" onSubmit={handleSubmit(onSubmit)}>
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
