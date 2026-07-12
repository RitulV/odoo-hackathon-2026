import { NavLink } from "react-router-dom";
import { data } from "../utils/card-layout-static";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction
} from "@/components/ui/card";

export function LandingCards({ pageProp }) {
  const items = data[pageProp];

  return (
    <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, description, icon: Icon, to }) => (
        <NavLink key={to} to={to} className="group block">
          <Card className="h-full border-white/5 bg-slate-900/60 py-5 text-[#CBD5E1] shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-black/30 hover:ring-white/10">
            <CardHeader>
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-amber-50/80 ring-1 ring-white/5 transition-colors group-hover:bg-slate-700 group-hover:text-amber-50">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="font-[Space_Grotesk] text-lg font-normal text-amber-50">
                {title}
              </CardTitle>
              <CardDescription className="font-[Space_Grotesk] text-[#94A3B8]">
                {description}
              </CardDescription>
              <CardAction>
                <ArrowRight className="h-4 w-4 -translate-x-1 text-[#CBD5E1]/40 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-amber-50 group-hover:opacity-100" />
              </CardAction>
            </CardHeader>
          </Card>
        </NavLink>
      ))}
    </div>
  );
}
