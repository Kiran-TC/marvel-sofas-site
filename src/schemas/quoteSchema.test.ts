import { describe, expect, it } from "vitest";
import { quoteSchema } from "./quoteSchema";

describe("quote form validation", () => {
  it("requires contact details and consent", () => {
    const result = quoteSchema.safeParse({
      fullName: "",
      phone: "",
      city: "",
      quantity: 0,
      projectType: "Residential",
      preferredContact: "WhatsApp",
      consent: false,
    });
    expect(result.success).toBe(false);
  });

  it("accepts a valid quotation enquiry", () => {
    const result = quoteSchema.safeParse({
      fullName: "Asha Rao",
      phone: "9876543210",
      email: "asha@example.com",
      city: "Bengaluru",
      quantity: 1,
      projectType: "Residential",
      preferredContact: "WhatsApp",
      consent: true,
    });
    expect(result.success).toBe(true);
  });
});
