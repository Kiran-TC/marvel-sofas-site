import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "../../config/business";
import { collectionLinks, primaryNavigation } from "../../config/navigation";
import { useUserStore } from "../../store/useUserStore";
import { cn } from "../../utils/cn";

export function Navbar({ onSearch }: { onSearch: () => void }) {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const openQuote = useUserStore((state) => state.openQuote);

  useEffect(() => {
    const onScroll = () => setSolid(!isHome || window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition xl:px-3 xl:text-sm",
      solid ? "text-forest-950 hover:bg-forest-900/5" : "text-white hover:bg-white/10",
      isActive && (solid ? "bg-gold-100 text-forest-950" : "bg-white/15 text-gold-100"),
    );

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "bg-ivory/90 shadow-sm backdrop-blur-xl" : "bg-transparent")}>
      <div className="luxury-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Marvel Sofa's home">
          <img src={business.logo} alt="" className="h-11 w-[5.5rem] rounded-md object-cover xl:h-12 xl:w-24" />
          <span className={cn("hidden whitespace-nowrap font-display text-xl font-semibold leading-none xl:block xl:text-2xl", solid ? "text-forest-950" : "text-white")}>
            {business.brandName}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary navigation">
          {primaryNavigation.map((item) =>
            item.hasMegaMenu ? (
              <div className="group relative" key={item.label}>
                <NavLink className={linkClass} to={item.href}>
                  {item.label}
                </NavLink>
                <div className="pointer-events-none absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <div className="grid grid-cols-2 gap-3 rounded-lg border border-white/20 bg-forest-950/95 p-4 shadow-soft backdrop-blur">
                    {collectionLinks.map((link) => (
                      <Link key={link.href} to={link.href} className="rounded-md p-4 text-white transition hover:bg-white/10">
                        <span className="text-sm font-semibold">{link.label}</span>
                        <span className="mt-1 block text-xs text-white/55">Browse catalogue products</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.href} className={linkClass} to={item.href}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex xl:gap-2">
          <button className={cn("rounded-full p-3", solid ? "text-forest-950 hover:bg-forest-900/5" : "text-white hover:bg-white/10")} type="button" onClick={onSearch} aria-label="Open search">
            <Search className="h-5 w-5" />
          </button>
          <button className={cn("rounded-full p-3", solid ? "text-forest-950 hover:bg-forest-900/5" : "text-white hover:bg-white/10")} type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle colour mode">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="btn-primary whitespace-nowrap px-5 xl:px-6" type="button" onClick={() => openQuote()}>
            Request a Quote
          </button>
        </div>

        <button className={cn("rounded-full p-3 lg:hidden", solid ? "text-forest-950" : "text-white")} type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div className="fixed inset-0 z-[70] bg-forest-950 text-white lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex h-20 items-center justify-between px-5">
              <span className="font-display text-3xl">{business.brandName}</span>
              <button className="rounded-full p-3 hover:bg-white/10" type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="grid gap-2 px-5 py-6" aria-label="Mobile navigation">
              {primaryNavigation.map((item) => (
                <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg border border-white/10 px-5 py-3 font-display text-2xl">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-5">
              <button className="btn-primary w-full" type="button" onClick={() => openQuote()}>
                Request a Quote
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
