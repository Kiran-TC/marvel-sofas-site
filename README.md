# Marvel Sofa's Website

Premium React/Vite website for Marvel Sofa's by SLV Industry's. It uses the supplied PDF catalogue as the source for product imagery and keeps all unsupported business details as editable placeholders.

## Technology Stack

- React, Vite and TypeScript
- React Router
- Tailwind CSS
- Framer Motion, GSAP ScrollTrigger and Lenis
- Lucide React icons
- React Hook Form with Zod validation
- Embla Carousel for product galleries
- Zustand for favourites, comparison, recently viewed products and quote drawer state
- React Helmet Async for metadata
- Vitest and React Testing Library

## Commands

```bash
npm install
npm run dev
npm run build
npm run test
```

## Folder Structure

- `src/config/business.ts` - editable company, phone, WhatsApp, email, address and catalogue settings
- `src/data/products.ts` - local catalogue product data
- `src/data/categories.ts` - collection cards
- `src/components` - navigation, catalogue, product, quote and form components
- `src/pages` - route screens
- `public/assets/catalogue` - cropped catalogue images
- `public/assets/projects` - supplied real project/factory images
- `scripts/extract_catalogue_assets.py` - repeatable PDF/image extraction process

## Updating Company Information

Edit `src/config/business.ts`. Phone and WhatsApp are configured. Email, address, social links and business hours can be filled in when final values are supplied.

## Adding Products

Add a `Product` entry in `src/data/products.ts`. Use `"Price available on request"` and consultation-based specifications unless exact dimensions, prices or material information is provided by SLV Industry's.

## Replacing Catalogue Images

1. Render the catalogue PDF to `../catalogue-render/page-XX.png` using Poppler:
   ```bash
   pdftoppm -png -r 144 "/path/to/catalogue.pdf" "../catalogue-render/page"
   ```
2. Update crop boxes in `scripts/extract_catalogue_assets.py`.
3. Run:
   ```bash
   npm run extract:assets
   ```

The script generates WebP files and thumbnails and copies the original PDF into `public/assets/documents`.

## WhatsApp

Set `whatsapp` in `src/config/business.ts`. Until a real number is added, WhatsApp redirects are disabled and the UI shows placeholder guidance.

## Quote Enquiries

The site is intentionally WhatsApp/email-only. `src/services/quoteService.ts` prepares enquiry links from the form details. Customers can attach room/reference photos after WhatsApp or email opens.

## Testimonials

Initial reviews are sample content. Replace `src/data/testimonials.ts` with verified customer reviews and only enable verified badges where the data is truly verified.

## Deployment

The app can be deployed to Vercel, Netlify or Cloudflare Pages as a Vite static build:

```bash
npm run build
```

Publish the generated `dist` directory. Configure SPA fallback routing to `index.html`.

## Image Ownership

Catalogue and WhatsApp images are assumed to be supplied by Marvel Sofa's / SLV Industry's for this project. Confirm usage rights before public deployment.
