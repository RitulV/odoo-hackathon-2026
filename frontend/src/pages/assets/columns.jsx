import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { assetCategories } from "../../mock/assetCategories";

const statusMap = {
  0: { label: "Available", className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
  1: { label: "Allocated", className: "border-sky-500/30 bg-sky-500/10 text-sky-400" },
  2: { label: "Maintenance", className: "border-amber-500/30 bg-amber-500/10 text-amber-400" },
  3: { label: "Retired", className: "border-white/10 bg-white/5 text-[#94A3B8]" },
};

const categoryName = (id) =>
  assetCategories.find((c) => c.id === id)?.name ?? "—";

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3 text-[#94A3B8] hover:text-amber-50"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
      </Button>
    ),
  },
  {
    id: "category",
    header: "Category",
    accessorFn: (row) => categoryName(row.category_id),
  },
  {
    accessorKey: "acquisition_date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3 text-[#94A3B8] hover:text-amber-50"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Acquired <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
      </Button>
    ),
  },
  {
    accessorKey: "is_bookable",
    header: "Bookable",
    cell: ({ row }) => (row.getValue("is_bookable") ? "Yes" : "No"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const s = statusMap[row.getValue("status")];
      return (
        <Badge variant="outline" className={s.className}>
          {s.label}
        </Badge>
      );
    },
  },
];
