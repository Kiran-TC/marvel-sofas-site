import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../navigation/Navbar";
import { Footer } from "./Footer";
import { FloatingContactActions } from "./FloatingContactActions";
import { SearchCommand } from "../navigation/SearchCommand";
import { QuoteDrawer } from "../quote/QuoteDrawer";
import { ComparisonDrawer } from "../product/ComparisonDrawer";

gsap.registerPlugin(ScrollTrigger);

export function Layout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse), (max-width: 639px)").matches) return undefined;
    const lenis = new Lenis({ duration: 0.9, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-300 focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="luxury-cursor hidden md:block" aria-hidden="true" />
      <Navbar onSearch={() => setSearchOpen(true)} />
      <main id="main">{children}</main>
      <Footer />
      <FloatingContactActions />
      <QuoteDrawer />
      <ComparisonDrawer />
      <SearchCommand open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
