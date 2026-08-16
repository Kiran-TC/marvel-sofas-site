import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useUserStore } from "../../store/useUserStore";
import { QuoteWizard } from "./QuoteWizard";

export function QuoteDrawer() {
  const open = useUserStore((state) => state.quoteOpen);
  const productId = useUserStore((state) => state.quoteProductId);
  const close = useUserStore((state) => state.closeQuote);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[82] bg-forest-950/70 p-3 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
          <motion.aside
            className="ml-auto h-full max-w-3xl overflow-auto rounded-lg bg-ivory p-4 shadow-soft"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Quotation enquiry form"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Quotation enquiry</p>
                <h2 className="font-display text-4xl font-semibold text-forest-950">Share the requirement.</h2>
                <p className="mt-2 text-sm text-forest-900/60">Fill the details once, then choose WhatsApp, SMS, phone or email for sending the requirement.</p>
              </div>
              <button className="rounded-full p-2 text-forest-950 hover:bg-forest-900/5" type="button" onClick={close} aria-label="Close quote form">
                <X className="h-5 w-5" />
              </button>
            </div>
            <QuoteWizard productId={productId} />
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
