"use client";

import type { Company } from "@/types/api-type";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "industry",
    header: "Industry",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
];
