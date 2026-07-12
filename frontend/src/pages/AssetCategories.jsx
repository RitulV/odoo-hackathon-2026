import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { assetCategories } from "../mock/assetCategories";

const AssetCategories = () => {
  return (
    <div className="p-6 font-[Space_Grotesk]">
      <div className="overflow-hidden rounded-xl border border-white/5 bg-slate-900/60">
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-[#94A3B8]">ID</TableHead>
              <TableHead className="text-[#94A3B8]">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assetCategories.map((cat) => (
              <TableRow
                key={cat.id}
                className="border-white/5 text-[#CBD5E1] hover:bg-slate-800/50"
              >
                <TableCell className="text-[#94A3B8]">{cat.id}</TableCell>
                <TableCell>{cat.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AssetCategories;
