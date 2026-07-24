import { Suspense, lazy, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { SkeletonCard } from "./components/common/SkeletonCard";
import { Layout } from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CataloguePage = lazy(() => import("./pages/CataloguePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CustomisePage = lazy(() => import("./pages/CustomisePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ManufacturingPage = lazy(() => import("./pages/ManufacturingPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  return (
    <ErrorBoundary>
      <Layout>
        <Suspense
          fallback={
            <div className="luxury-shell grid min-h-screen gap-6 py-28 md:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalogue" element={<CataloguePage />} />
                <Route path="/catalogue/:category" element={<CataloguePage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/customise" element={<CustomisePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/manufacturing" element={<ManufacturingPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
