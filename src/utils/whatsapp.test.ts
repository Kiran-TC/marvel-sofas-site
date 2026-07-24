import { describe, expect, it } from "vitest";
import { products } from "../data/products";
import { buildWhatsAppMessage } from "./whatsapp";

describe("WhatsApp enquiry generator", () => {
  it("includes product reference, city and configuration", () => {
    const product = products[0];
    const message = buildWhatsAppMessage({ product, city: "Bengaluru", configuration: "Left chaise" });
    expect(message).toContain(product.name);
    expect(message).toContain(product.id);
    expect(message).toContain("Bengaluru");
    expect(message).toContain("Left chaise");
  });
});
