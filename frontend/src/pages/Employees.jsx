import React from 'react'
import { employees } from "../mock/employees";
import { DataTable } from "@/components/data-table";
import { columns } from "./employees/columns";

const Employees = () => {
  return (
    <div>
      {" "}
      <DataTable
        columns={columns}
        data={employees}
        filterColumn="name"
        filterPlaceholder="Filter by employee name..."
      />
    </div>
  );
}

export default Employees
