import { Link, useLocation } from "@tanstack/react-router";

import {
  NavigationMenu as Nav,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const NavigationMenu = () => {
  const pathName = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <Nav>
      <NavigationMenuList>
        <NavigationMenuItem className="mr-4">
          <NavigationMenuLink asChild data-active={pathName === "/"}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-4">
          <NavigationMenuLink asChild data-active={pathName === "/about"}>
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </Nav>
  );
};
