import { NavLink } from "react-router-dom";
import { Boxes, ChevronRight, LayoutDashboard, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

const linkBase =
  "flex items-center gap-2 rounded-lg font-[Space_Grotesk] font-normal text-[#CBD5E1] opacity-70 transition-all hover:opacity-100 hover:bg-slate-800/60 hover:text-shadow-none data-[active=true]:opacity-100 data-[active=true]:text-amber-50 data-[active=true]:bg-slate-800";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/5 bg-radial from-[#282b36] to-[#01030f] font-[Space_Grotesk]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => cn(linkBase)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Assets */}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <div className="flex w-full items-center">
                    <SidebarMenuButton
                      asChild
                      className="flex-1"
                      tooltip="Assets"
                    >
                      <NavLink to="/assets" className={cn(linkBase)}>
                        <Boxes className="h-4 w-4" />
                        <span>Assets</span>
                      </NavLink>
                    </SidebarMenuButton>

                    <CollapsibleTrigger asChild>
                      <button
                        aria-label="Toggle Assets submenu"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#CBD5E1]/70 opacity-70 transition-all hover:bg-slate-800/60 hover:opacity-100 hover:text-amber-50"
                      >
                        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent>
                    <SidebarMenuSub className="border-l border-white/10 ml-3.5">
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to="/assets/categories"
                            className={cn(linkBase, "text-sm")}
                          >
                            Asset Categories
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to="/assets/search"
                            className={cn(linkBase, "text-sm")}
                          >
                            View Assets
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Employees */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Employees">
                  <NavLink to="/employees" className={cn(linkBase)}>
                    <Users className="h-4 w-4" />
                    <span>Employees</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
