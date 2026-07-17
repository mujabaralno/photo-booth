import { NavLink, useLocation } from "react-router-dom"

import photoBoothLogo from "@/assets/react.svg"
import { adminNavItems } from "@/constants"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AdminSidebar() {
  const pathname = useLocation().pathname;

  return (
    <Sidebar className="border-none">
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 h-10 px-1">
            <img
              src={photoBoothLogo}
              alt="Photo Booth"
              className="h-10 w-auto max-w-full"
            />
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {adminNavItems.map((item) => {
                const isActive =
                  pathname === item.url ||
                  (item.url !== "/admin" && pathname.startsWith(`${item.url}/`));

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={<NavLink to={item.url} />}
                      isActive={Boolean(isActive)}
                      className={`
                        w-full transition-all duration-300 ease-out group px-3 py-5 rounded-xl
                        ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary"
                            : "text-muted-foreground hover:bg-primary hover:text-foreground"
                        }
                      `}
                    >
                      <item.icon
                        className={`h-5 w-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                      />
                      <span className="font-semibold text-sm tracking-wide">
                        {item.title}
                      </span>
                    </SidebarMenuButton>

                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
