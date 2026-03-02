"use server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  message: string;
};

export async function submitContact(payload: ContactPayload) {
  return {
    ok: true,
    receivedAt: new Date().toISOString(),
    payload,
  };
}
