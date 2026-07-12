import React from "react";
import { assets } from "../mock/assets";
import { DataTable } from "@/components/data-table";
import { columns } from "./assets/columns";

const ViewAssets = () => {
  return (
    <div>
      {" "}
      <DataTable
        columns={columns}
        data={assets}
        filterColumn="name"
        filterPlaceholder="Filter by asset name..."
      />
    </div>
  );
};

export default ViewAssets;
