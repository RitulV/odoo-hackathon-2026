import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./assets/columns";
import { getAssets } from "@/lib/assets-api";
import { useFetch } from "@/hooks/useFetch";

const ViewAssets = () => {
  const { data: assets, loading, error } = useFetch(getAssets, []);

  return (
    <div className="p-6">
      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-950/20 p-4 text-sm text-red-300">
          Failed to load assets: {error.message}
        </div>
      )}

      {!loading && !error && (
        <DataTable
          columns={columns}
          data={assets ?? []}
          filterColumn="name"
          filterPlaceholder="Filter by asset name..."
        />
      )}
    </div>
  );
};

export default ViewAssets;
