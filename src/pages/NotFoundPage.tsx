import { Link } from "react-router-dom";
import { Seo } from "../components/common/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="flex min-h-screen items-center bg-forest-950 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] sm:text-6xl">This page is not in the catalogue.</h1>
          <p className="mt-5 max-w-xl text-white/70">Return to the catalogue or start a custom quote enquiry.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn-primary" to="/catalogue">Open catalogue</Link>
            <Link className="btn-secondary" to="/contact">Request quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
