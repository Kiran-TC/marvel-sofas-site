import { Star } from "lucide-react";
import { Seo } from "../components/common/Seo";
import { testimonials } from "../data/testimonials";

export default function ReviewsPage() {
  return (
    <>
      <Seo title="Reviews" path="/reviews" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Reviews</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] sm:text-6xl">Sample testimonial system.</h1>
          <p className="mt-5 max-w-2xl text-white/70">Initial reviews are clearly marked as sample content until real verified reviews are supplied.</p>
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="luxury-shell grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="card h-fit p-6">
            <h2 className="font-display text-4xl font-semibold text-forest-950">Review summary</h2>
            <div className="mt-5 flex gap-1 text-gold-500">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div>
            <p className="mt-3 text-sm text-forest-900/60">Distribution uses placeholder sample data. Add verified reviews before showing a verified badge.</p>
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={rating} className="mt-3 flex items-center gap-3 text-sm">
                <span>{rating}</span>
                <div className="h-2 flex-1 rounded-full bg-forest-900/10"><div className="h-2 rounded-full bg-gold-500" style={{ width: `${Math.max(8, 80 - index * 18)}%` }} /></div>
              </div>
            ))}
          </aside>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((review) => (
              <article key={review.id} className="card p-6">
                {review.image ? <img src={review.image} alt="" className="mb-5 aspect-[4/3] w-full rounded-md object-cover" /> : null}
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">{review.sample ? "Sample testimonial - replace" : review.verified ? "Verified review" : "Customer review"}</p>
                <p className="mt-4 leading-7 text-forest-900/70">{review.text}</p>
                <p className="mt-5 font-semibold text-forest-950">{review.customerName}</p>
                <p className="text-sm text-forest-900/50">{review.location} - {review.productCategory}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="luxury-shell">
          <form className="card grid gap-4 p-6 md:grid-cols-2">
            <h2 className="font-display text-4xl font-semibold text-forest-950 md:col-span-2">Review submission form</h2>
            <input className="input" placeholder="Customer name" />
            <input className="input" placeholder="Product category" />
            <textarea className="input min-h-28 py-3 md:col-span-2" placeholder="Review text" />
            <p className="text-sm text-forest-900/55 md:col-span-2">Moderation status note: submitted reviews should be reviewed before publication.</p>
          </form>
        </div>
      </section>
    </>
  );
}
