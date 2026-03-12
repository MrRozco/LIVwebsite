"use server";

import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  message: string;
  website?: string;
  formStart?: string;
};

type SubmissionResult = {
  ok: boolean;
  receivedAt: string;
  error?: string;
};

const MIN_FORM_TIME_MS = 1500;

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

const isBotSubmission = (honeypot?: string, formStart?: string, enforceTiming: boolean = true) => {
  if (honeypot && honeypot.trim().length > 0) {
    return true;
  }

  if (enforceTiming && formStart) {
    const startedAt = Number(formStart);
    if (!Number.isNaN(startedAt)) {
      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_FORM_TIME_MS) {
        return true;
      }
    }
  }

  return false;
};

export async function submitContact(payload: ContactPayload): Promise<SubmissionResult> {
  if (isBotSubmission(payload.website, payload.formStart)) {
    return {
      ok: false,
      receivedAt: new Date().toISOString(),
      error: "suspected-bot",
    };
  }

  try {
    const transporter = getTransporter();
    if (!transporter) {
      return {
        ok: false,
        receivedAt: new Date().toISOString(),
        error: "email-not-configured",
      };
    }

    const toEmail = process.env.SUBMISSION_TO_EMAIL ?? "rozcodevelopment@gmail.com";
    const fromEmail =
      process.env.SUBMISSION_FROM_EMAIL ?? process.env.SMTP_USER ?? "no-reply@livinginvibrance.com";
    const fromName = process.env.SUBMISSION_FROM_NAME ?? "Living in Vibrance";

    const messageLines = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "N/A"}`,
      `Preferred time: ${payload.preferredTime || "N/A"}`,
      "",
      "Message:",
      payload.message,
    ];

    await transporter.sendMail({
      to: toEmail,
      from: `${fromName} <${fromEmail}>`,
      replyTo: payload.email || fromEmail,
      subject: "Contact Form Submission",
      text: messageLines.join("\n"),
    });

    return {
      ok: true,
      receivedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      receivedAt: new Date().toISOString(),
      error: error instanceof Error ? error.message : "send-failed",
    };
  }
}

export async function submitAssessment(formData: FormData): Promise<SubmissionResult> {
  const honeypot = formData.get("website")?.toString();
  const formStart = formData.get("formStart")?.toString();
  if (isBotSubmission(honeypot, formStart, false)) {
    return {
      ok: false,
      receivedAt: new Date().toISOString(),
      error: "suspected-bot",
    };
  }
  try {
    const transporter = getTransporter();
    if (!transporter) {
      return {
        ok: false,
        receivedAt: new Date().toISOString(),
        error: "email-not-configured",
      };
    }

    const toEmail = process.env.SUBMISSION_TO_EMAIL ?? "rozcodevelopment@gmail.com";
    const fromEmail =
      process.env.SUBMISSION_FROM_EMAIL ?? process.env.SMTP_USER ?? "no-reply@livinginvibrance.com";
    const fromName = process.env.SUBMISSION_FROM_NAME ?? "Living in Vibrance";

    const title = formData.get("assessmentTitle")?.toString() ?? "Assessment Submission";
    const slug = formData.get("assessmentSlug")?.toString() ?? "unknown";

    const entries = Array.from(formData.entries()).filter(([key, value]) => {
      if (["website", "formStart"].includes(key)) {
        return false;
      }

      const normalized = value?.toString().trim();
      if (!normalized) {
        return false;
      }

      if (normalized === "Select") {
        return false;
      }

      return true;
    });

    const messageLines = [
      `Assessment: ${title}`,
      `Slug: ${slug}`,
      "",
      ...entries.map(([key, value]) => `${key}: ${value}`),
    ];

    const replyTo = formData.get("clientEmail")?.toString() || fromEmail;

    await transporter.sendMail({
      to: toEmail,
      from: `${fromName} <${fromEmail}>`,
      replyTo,
      subject: `Assessment Submission: ${title}`,
      text: messageLines.join("\n"),
    });

    return {
      ok: true,
      receivedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      receivedAt: new Date().toISOString(),
      error: error instanceof Error ? error.message : "send-failed",
    };
  }
}
