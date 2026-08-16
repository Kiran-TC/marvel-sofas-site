import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MessageCircle, MessageSquareText, Phone, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { products } from "../../data/products";
import { quoteSchema } from "../../schemas/quoteSchema";
import { submitQuote } from "../../services/quoteService";
import type { QuoteFormValues, QuoteResult } from "../../types/quote";
import { safeStorage } from "../../lib/storage";

const STORAGE_KEY = "marvel-sofas-quote-progress";

const steps = [
  "Contact details",
  "Product requirements",
  "Space and customisation",
  "Reference photos",
  "Review and submit",
];

const defaultValues: QuoteFormValues = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  product: "",
  productCategory: "",
  seatingRequirement: "",
  roomDimensions: "",
  upholsteryPreference: "",
  colourPreference: "",
  budgetRange: "",
  quantity: 1,
  projectType: "Residential",
  preferredContact: "WhatsApp",
  deliveryTimeline: "",
  additionalNotes: "",
  consent: false,
};

export function QuoteWizard({ productId }: { productId?: string }) {
  const selectedProduct = products.find((product) => product.id === productId);
  const savedValues = useMemo(() => {
    const saved = safeStorage.get(STORAGE_KEY);
    if (!saved) return {};
    try {
      return JSON.parse(saved) as Partial<QuoteFormValues>;
    } catch {
      return {};
    }
  }, []);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<QuoteResult>();
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      ...defaultValues,
      ...savedValues,
      product: selectedProduct?.name ?? savedValues.product ?? "",
      productCategory: selectedProduct?.subcategory ?? savedValues.productCategory ?? "",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      safeStorage.set(STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (selectedProduct) {
      setValue("product", selectedProduct.name);
      setValue("productCategory", selectedProduct.subcategory ?? selectedProduct.category);
    }
  }, [selectedProduct, setValue]);

  const values = watch();

  const onSubmit = handleSubmit(async (formValues) => {
    setSubmitError("");
    try {
      const quoteResult = await submitQuote(formValues);
      setResult(quoteResult);
      safeStorage.set(STORAGE_KEY, "");
    } catch {
      setSubmitError("The enquiry could not be prepared. Please try again or use the WhatsApp button directly.");
    }
  });

  if (result) {
    return (
      <div className="rounded-lg bg-white p-6 text-forest-950 shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-gold-500" />
        <h2 className="mt-4 font-display text-4xl font-semibold">Enquiry ready to send.</h2>
        <p className="mt-3 text-forest-900/65">
          Reference: <span className="font-semibold">{result.reference}</span>. Choose how you want to send the full requirement.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {result.whatsappUrl ? (
            <a className="btn-primary" href={result.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> Send on WhatsApp
            </a>
          ) : (
            <p className="rounded-lg bg-gold-100 px-4 py-3 text-sm text-gold-700">
              Add the WhatsApp number in src/config/business.ts to enable direct WhatsApp redirection.
            </p>
          )}
          {result.smsUrl ? (
            <a className="btn-ghost" href={result.smsUrl}>
              <MessageSquareText className="h-4 w-4" /> Send by SMS
            </a>
          ) : null}
          {result.phoneUrl ? (
            <a className="btn-ghost" href={result.phoneUrl}>
              <Phone className="h-4 w-4" /> Call Now
            </a>
          ) : null}
          {result.mailtoUrl ? (
            <a className="btn-ghost" href={result.mailtoUrl}>
              <Mail className="h-4 w-4" /> Send Email
            </a>
          ) : (
            <p className="rounded-lg border border-forest-900/10 bg-ivory px-4 py-3 text-sm text-forest-900/65">
              Email sending will appear here once the business email is added.
            </p>
          )}
        </div>
        <details className="mt-5 rounded-lg bg-forest-900/5 p-4 text-sm text-forest-900/70">
          <summary className="cursor-pointer font-semibold text-forest-950">Preview message</summary>
          <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap rounded-md bg-white p-3 font-sans text-xs leading-5">{result.message}</pre>
        </details>
      </div>
    );
  }

  return (
    <form className="rounded-lg bg-white p-5 text-forest-950 shadow-soft lg:p-6" onSubmit={onSubmit}>
      <ol className="grid gap-2 sm:grid-cols-5" aria-label="Quote steps">
        {steps.map((label, index) => (
          <li key={label} className={`rounded-full px-3 py-2 text-center text-xs font-semibold ${index === step ? "bg-gold-500 text-forest-950" : "bg-forest-900/5 text-forest-900/55"}`}>
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      <div className="mt-6">
        {step === 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full name" error={errors.fullName?.message}><input className="input" {...register("fullName")} /></Field>
            <Field label="Phone number" error={errors.phone?.message}><input className="input" {...register("phone")} /></Field>
            <Field label="Email" error={errors.email?.message}><input className="input" type="email" {...register("email")} /></Field>
            <Field label="City" error={errors.city?.message}><input className="input" {...register("city")} /></Field>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Product"><select className="input" {...register("product")}>
              <option value="">Select product</option>
              {products.map((product) => <option key={product.id} value={product.name}>{product.name}</option>)}
            </select></Field>
            <Field label="Product category"><input className="input" {...register("productCategory")} /></Field>
            <Field label="Seating requirement"><input className="input" placeholder="Example: 5 seats with chaise" {...register("seatingRequirement")} /></Field>
            <Field label="Quantity" error={errors.quantity?.message}><input className="input" type="number" min={1} {...register("quantity", { valueAsNumber: true })} /></Field>
            <Field label="Residential or commercial"><select className="input" {...register("projectType")}><option>Residential</option><option>Commercial</option></select></Field>
            <Field label="Preferred contact method"><select className="input" {...register("preferredContact")}><option>WhatsApp</option><option>SMS</option><option>Phone</option><option>Email</option></select></Field>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Approximate room dimensions"><input className="input" placeholder="Wall length, chaise side, access notes" {...register("roomDimensions")} /></Field>
            <Field label="Upholstery preference"><select className="input" {...register("upholsteryPreference")}><option>Not decided</option><option>Premium fabric</option><option>Leather or leatherette</option><option>Velvet</option><option>Textured upholstery</option></select></Field>
            <Field label="Colour preference"><input className="input" placeholder="Ivory, tan, blue, custom..." {...register("colourPreference")} /></Field>
            <Field label="Budget range"><input className="input" placeholder="Optional range for guidance" {...register("budgetRange")} /></Field>
            <Field label="Expected delivery timeline"><input className="input" placeholder="Example: within 6-8 weeks" {...register("deliveryTimeline")} /></Field>
            <Field label="Additional notes"><textarea className="input min-h-28 py-3" {...register("additionalNotes")} /></Field>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-forest-900/5 p-5">
              <h3 className="font-semibold text-forest-950">Room photo</h3>
              <p className="mt-2 text-sm leading-6 text-forest-900/65">
                After WhatsApp opens, attach a room photo in the chat so the manufacturer can understand the space.
              </p>
            </div>
            <div className="rounded-lg bg-forest-900/5 p-5">
              <h3 className="font-semibold text-forest-950">Reference image</h3>
              <p className="mt-2 text-sm leading-6 text-forest-900/65">
                If you have a sofa style reference, attach it in WhatsApp or email after sending the enquiry message.
              </p>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-5">
            <div className="grid gap-3 rounded-lg bg-forest-900/5 p-4 text-sm md:grid-cols-2">
              {Object.entries(values).map(([key, value]) => (
                <div key={key}>
                  <span className="block text-xs uppercase tracking-[0.16em] text-forest-900/45">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="font-semibold">{String(value || "Not supplied")}</span>
                </div>
              ))}
            </div>
            <label className="flex gap-3 text-sm text-forest-900/70">
              <input className="mt-1 h-4 w-4 accent-gold-500" type="checkbox" {...register("consent")} />
              I agree to be contacted about this quotation enquiry.
            </label>
            {errors.consent?.message ? <p className="text-sm font-semibold text-red-700">{errors.consent.message}</p> : null}
          </div>
        ) : null}
      </div>

      {submitError ? <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p> : null}
      <div className="mt-6 flex flex-wrap justify-between gap-3">
        <button className="btn-ghost" type="button" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0}>
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        {step < steps.length - 1 ? (
          <button className="btn-primary" type="button" onClick={() => setStep((current) => Math.min(steps.length - 1, current + 1))}>
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button className="btn-primary" type="submit" disabled={isSubmitting}>
            <Send className="h-4 w-4" /> {isSubmitting ? "Preparing..." : "Prepare send options"}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="label">
      {label}
      <span className="mt-2 block">{children}</span>
      {error ? <span className="mt-1 block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
