import type { ProductCategory, ProductFilters } from "../../types/product";
import { categories } from "../../data/categories";
import { getFilterOptions } from "../../utils/productFilters";
import { products } from "../../data/products";

const options = getFilterOptions(products);

type FilterSidebarProps = {
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  mobile?: boolean;
};

function toggle<T extends string>(values: T[], value: T) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function FilterSidebar({ filters, setFilters, mobile }: FilterSidebarProps) {
  const update = (partial: Partial<ProductFilters>) => setFilters({ ...filters, ...partial });
  return (
    <aside className={mobile ? "space-y-6" : "sticky top-28 space-y-6"}>
      <div>
        <label className="label" htmlFor={mobile ? "mobile-product-search" : "product-search"}>Search</label>
        <input
          id={mobile ? "mobile-product-search" : "product-search"}
          className="input mt-2"
          value={filters.query}
          onChange={(event) => update({ query: event.target.value })}
          placeholder="Search catalogue"
        />
      </div>
      <FilterGroup title="Category">
        {categories.map((category) => (
          <Checkbox
            key={category.id}
            label={category.title}
            checked={filters.categories.includes(category.id)}
            onChange={() => update({ categories: toggle(filters.categories, category.id as ProductCategory) })}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Configuration">
        {options.configurations.slice(0, 10).map((option) => (
          <Checkbox key={option} label={option} checked={filters.configurations.includes(option)} onChange={() => update({ configurations: toggle(filters.configurations, option) })} />
        ))}
      </FilterGroup>
      <FilterGroup title="Seating">
        {options.seating.map((option) => (
          <Checkbox key={option} label={option} checked={filters.seating.includes(option)} onChange={() => update({ seating: toggle(filters.seating, option) })} />
        ))}
      </FilterGroup>
      <FilterGroup title="Upholstery">
        {options.upholstery.map((option) => (
          <Checkbox key={option} label={option} checked={filters.upholstery.includes(option)} onChange={() => update({ upholstery: toggle(filters.upholstery, option) })} />
        ))}
      </FilterGroup>
      <FilterGroup title="Colour Family">
        {options.colours.slice(0, 12).map((option) => (
          <Checkbox key={option} label={option} checked={filters.colours.includes(option)} onChange={() => update({ colours: toggle(filters.colours, option) })} />
        ))}
      </FilterGroup>
      <FilterGroup title="Availability">
        <select className="input mt-2" value={filters.reclinerAvailability} onChange={(event) => update({ reclinerAvailability: event.target.value as ProductFilters["reclinerAvailability"] })}>
          <option value="all">Recliner availability</option>
          <option value="yes">Recliner shown</option>
          <option value="no">Non-recliner</option>
        </select>
        <select className="input mt-2" value={filters.customisable} onChange={(event) => update({ customisable: event.target.value as ProductFilters["customisable"] })}>
          <option value="all">Customisable</option>
          <option value="yes">Customisable only</option>
          <option value="no">Not marked customisable</option>
        </select>
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-forest-900/10 bg-white/70 p-4">
      <h3 className="font-semibold text-forest-950">{title}</h3>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm text-forest-900/70 hover:bg-forest-900/5">
      <input className="h-4 w-4 accent-gold-500" type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
