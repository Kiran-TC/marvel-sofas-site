from __future__ import annotations

import json
import shutil
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
RENDER_DIR = ROOT.parent / "catalogue-render"
PUBLIC = ROOT / "public" / "assets"
CATALOGUE_DIR = PUBLIC / "catalogue"
PROJECTS_DIR = PUBLIC / "projects"
BRAND_DIR = PUBLIC / "brand"
DOCUMENTS_DIR = PUBLIC / "documents"

SOURCE_PDF = Path("/Users/vanasol/Downloads/Catalogue_SLV Industries-1 (1)_240819_115254.pdf")
PROJECT_IMAGES = [
    (
        Path("/Users/vanasol/Downloads/WhatsApp Image 2026-07-15 at 5.49.59 PM (1).jpeg"),
        "factory-sectional-stone-01.webp",
        "Factory-made stone sectional sofa installation",
    ),
    (
        Path("/Users/vanasol/Downloads/WhatsApp Image 2026-07-15 at 5.49.59 PM (2).jpeg"),
        "factory-sectional-stone-02.webp",
        "Close view of Marvel Sofa's sectional installation",
    ),
    (
        Path("/Users/vanasol/Downloads/WhatsApp Image 2026-07-15 at 5.49.59 PM.jpeg"),
        "factory-sectional-chaise-01.webp",
        "Stone chaise sectional manufactured by Marvel Sofa's",
    ),
    (
        Path("/Users/vanasol/Downloads/IMG_9553.PNG"),
        "factory-ivory-recliner-lounge-01.webp",
        "Ivory recliner lounge sofa produced by Marvel Sofa's",
    ),
]


Crop = tuple[int, str, tuple[int, int, int, int], str]


CROPS: list[Crop] = [
    (2, "olive-slim-sofa-01.webp", (75, 720, 1115, 1060), "Olive slim sofa from catalogue page 2"),
    (5, "material-wall-01.webp", (55, 110, 1125, 1580), "Upholstery material display from catalogue page 5"),
    (6, "blue-horizon-sofa-01.webp", (0, 460, 1190, 1300), "Blue living room sofa from catalogue page 6"),
    (7, "graphite-two-seat-01.webp", (80, 220, 1110, 800), "Graphite two seat sofa from catalogue page 7"),
    (8, "silver-track-sofa-01.webp", (70, 170, 1115, 535), "Silver three seater sofa from catalogue page 8"),
    (8, "terracotta-extended-sectional-01.webp", (20, 860, 1170, 1460), "Terracotta sectional sofa from catalogue page 8"),
    (9, "amber-modular-chaise-01.webp", (50, 95, 1110, 550), "Amber modular chaise from catalogue page 9"),
    (9, "mist-sectional-chaise-01.webp", (80, 615, 1120, 925), "Mist blue sectional chaise from catalogue page 9"),
    (9, "cognac-low-sectional-01.webp", (60, 1080, 1120, 1415), "Cognac low sectional from catalogue page 9"),
    (10, "burnt-orange-chaise-01.webp", (150, 95, 1080, 430), "Burnt orange chaise sofa from catalogue page 10"),
    (10, "saffron-l-shape-01.webp", (75, 520, 1130, 875), "Saffron L shaped sofa from catalogue page 10"),
    (10, "plum-cinema-sectional-01.webp", (90, 1010, 1130, 1365), "Plum cinema sectional from catalogue page 10"),
    (11, "quilted-grey-closeup-01.webp", (0, 0, 1190, 720), "Quilted grey upholstery close-up from catalogue page 11"),
    (11, "ivory-console-sofa-01.webp", (95, 910, 1095, 1480), "Ivory console sofa from catalogue page 11"),
    (12, "sunlit-yellow-sofa-01.webp", (95, 90, 1095, 500), "Sunlit yellow sofa from catalogue page 12"),
    (12, "ivory-flared-sofa-01.webp", (80, 570, 1110, 925), "Ivory flared arm sofa from catalogue page 12"),
    (12, "cloud-grey-sofa-01.webp", (70, 1045, 1120, 1470), "Cloud grey sofa from catalogue page 12"),
    (13, "cognac-wing-chair-01.webp", (130, 20, 1005, 720), "Cognac wing chair from catalogue page 13"),
    (13, "mustard-lounge-chair-01.webp", (35, 820, 1145, 1545), "Mustard lounge chair from catalogue page 13"),
    (14, "ivory-corner-lounge-01.webp", (0, 45, 1190, 505), "Ivory corner lounge from catalogue page 14"),
    (14, "cream-curved-sectional-01.webp", (0, 570, 1190, 1005), "Cream curved sectional from catalogue page 14"),
    (14, "slate-modular-theatre-01.webp", (0, 1090, 1190, 1605), "Slate modular theatre sofa from catalogue page 14"),
    (15, "factory-blue-sectional-01.webp", (0, 0, 1190, 475), "Factory blue sectional installation from catalogue page 15"),
    (15, "factory-cream-sectional-01.webp", (0, 510, 1190, 980), "Factory cream sectional installation from catalogue page 15"),
    (15, "factory-olive-sectional-01.webp", (0, 1025, 1190, 1570), "Factory olive sectional installation from catalogue page 15"),
    (16, "recliner-chair-set-01.webp", (130, 430, 1080, 940), "Recliner chair set from catalogue page 16"),
    (17, "azure-recliner-chair-01.webp", (90, 40, 1065, 865), "Azure recliner chair from catalogue page 17"),
    (18, "smoke-fabric-recliner-01.webp", (65, 50, 1135, 605), "Smoke fabric recliner from catalogue page 18"),
    (18, "brown-manual-recliner-01.webp", (290, 735, 905, 1430), "Brown manual recliner from catalogue page 18"),
    (19, "ruby-recliner-set-01.webp", (40, 35, 1150, 555), "Ruby recliner sofa set from catalogue page 19"),
    (19, "linen-recliner-set-01.webp", (90, 690, 1085, 1045), "Linen recliner sofa set from catalogue page 19"),
    (19, "black-theatre-recliners-01.webp", (80, 1145, 1100, 1505), "Black theatre recliners from catalogue page 19"),
    (20, "dining-room-chair-set-01.webp", (0, 0, 1190, 1684), "Dining room chair set from catalogue page 20"),
    (21, "beige-dining-chair-01.webp", (170, 100, 450, 510), "Beige dining chair from catalogue page 21"),
    (21, "black-dining-chair-01.webp", (680, 100, 945, 510), "Black dining chair from catalogue page 21"),
    (21, "graphite-dining-chair-01.webp", (155, 625, 470, 990), "Graphite dining chair from catalogue page 21"),
    (21, "ivory-dining-chair-01.webp", (665, 620, 955, 1015), "Ivory dining chair from catalogue page 21"),
    (21, "taupe-barrel-dining-chair-01.webp", (145, 1060, 505, 1500), "Taupe barrel dining chair from catalogue page 21"),
    (21, "blush-dining-chair-01.webp", (650, 1090, 1010, 1505), "Blush dining chair from catalogue page 21"),
    (22, "diamond-headboard-bed-01.webp", (0, 0, 1190, 970), "Diamond headboard bedroom from catalogue page 22"),
    (23, "panel-headboard-bed-01.webp", (0, 0, 1190, 650), "Panel headboard bed from catalogue page 23"),
    (23, "tufted-grey-bed-01.webp", (20, 1080, 555, 1555), "Tufted grey bed from catalogue page 23"),
    (23, "grid-headboard-detail-01.webp", (620, 1080, 1165, 1555), "Grid headboard detail from catalogue page 23"),
    (24, "horizontal-channel-headboard-01.webp", (0, 0, 1190, 790), "Horizontal channel headboard from catalogue page 24"),
    (24, "vertical-camel-headboard-01.webp", (0, 840, 1190, 1600), "Vertical camel headboard from catalogue page 24"),
    (25, "hexagon-wall-headboard-01.webp", (0, 0, 1190, 980), "Hexagon wall headboard from catalogue page 25"),
    (26, "chevron-green-bed-01.webp", (0, 0, 1190, 745), "Chevron green bed from catalogue page 26"),
    (26, "triangular-panel-bed-01.webp", (0, 790, 1190, 1530), "Triangular panel bed from catalogue page 26"),
    (27, "office-sofa-arrangement-01.webp", (0, 235, 1190, 1580), "Office sofa arrangement from catalogue page 27"),
    (28, "tufted-cognac-office-sofa-01.webp", (0, 0, 1190, 770), "Tufted cognac office sofa from catalogue page 28"),
    (28, "orange-office-lounge-01.webp", (0, 845, 1190, 1490), "Orange office lounge from catalogue page 28"),
    (29, "coral-lounge-set-01.webp", (0, 0, 1190, 780), "Coral lounge set from catalogue page 29"),
    (29, "royal-blue-lounge-sofa-01.webp", (0, 850, 1190, 1505), "Royal blue lounge sofa from catalogue page 29"),
    (30, "black-compact-sofa-01.webp", (0, 0, 1190, 875), "Black compact sofa from catalogue page 30"),
    (31, "tan-tufted-sofa-01.webp", (0, 0, 1190, 780), "Tan tufted sofa from catalogue page 31"),
    (31, "black-frame-lounge-chair-01.webp", (40, 1035, 560, 1420), "Black frame lounge chair from catalogue page 31"),
    (31, "coral-accent-chair-01.webp", (650, 1035, 1100, 1420), "Coral accent chair from catalogue page 31"),
]


BRAND_CROPS: list[Crop] = [
    (32, "marvel-sofas-logo-card.webp", (365, 45, 835, 335), "Marvel Sofa's catalogue logo crop"),
    (32, "contact-card-background.webp", (0, 0, 1190, 1684), "Catalogue contact page background"),
]


def save_web_asset(image: Image.Image, output: Path, max_width: int = 1400) -> None:
    image = image.convert("RGB")
    if image.width > max_width:
        ratio = max_width / image.width
        image = image.resize((max_width, int(image.height * ratio)), Image.LANCZOS)
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, "WEBP", quality=86, method=6)

    thumb = output.with_name(output.stem + "-thumb.webp")
    thumb_image = image.copy()
    thumb_image.thumbnail((480, 360), Image.LANCZOS)
    thumb_image.save(thumb, "WEBP", quality=78, method=6)


def crop_page(page_number: int, box: tuple[int, int, int, int]) -> Image.Image:
    page = RENDER_DIR / f"page-{page_number:02}.png"
    if not page.exists():
        raise FileNotFoundError(f"Missing rendered page: {page}")
    return Image.open(page).crop(box)


def main() -> None:
    for directory in (CATALOGUE_DIR, PROJECTS_DIR, BRAND_DIR, DOCUMENTS_DIR):
        directory.mkdir(parents=True, exist_ok=True)

    manifest = []
    for page, filename, box, alt in CROPS:
        output = CATALOGUE_DIR / filename
        save_web_asset(crop_page(page, box), output)
        manifest.append({"file": f"/assets/catalogue/{filename}", "page": page, "alt": alt})

    for page, filename, box, alt in BRAND_CROPS:
        output = BRAND_DIR / filename
        save_web_asset(crop_page(page, box), output, max_width=1200)
        manifest.append({"file": f"/assets/brand/{filename}", "page": page, "alt": alt})

    project_manifest = []
    for source, filename, alt in PROJECT_IMAGES:
        if not source.exists():
            continue
        output = PROJECTS_DIR / filename
        save_web_asset(Image.open(source), output, max_width=1800)
        project_manifest.append({"file": f"/assets/projects/{filename}", "alt": alt})

    if SOURCE_PDF.exists():
        shutil.copy2(SOURCE_PDF, DOCUMENTS_DIR / "slv-industries-marvel-sofas-catalogue.pdf")

    (PUBLIC / "asset-manifest.json").write_text(
        json.dumps({"catalogue": manifest, "projects": project_manifest}, indent=2),
        encoding="utf-8",
    )

    print(f"Generated {len(manifest)} catalogue/brand assets and {len(project_manifest)} project assets.")


if __name__ == "__main__":
    main()
