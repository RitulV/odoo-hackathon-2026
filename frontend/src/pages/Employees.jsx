import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./employees/columns";
import { useFetch } from "@/hooks/useFetch";
import { getEmployees } from "@/lib/employees-api";

const Employees = () => {
  const { data: employees, loading, error } = useFetch(getEmployees, []);

  return (
    <div className="p-6">
      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-950/20 p-4 text-sm text-red-300">
          Failed to load employees: {error.message}
        </div>
      )}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={employees ?? []}
          filterColumn="name"
          filterPlaceholder="Filter by employees name..."
        />
      )}
    </div>
  );
};

export default Employees;
