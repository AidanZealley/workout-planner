"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Dumbbell, PlusSquare } from "lucide-react";
import Link from "next/link";

export function AppNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Exercises</NavigationMenuTrigger>
          <AppNavItemContent>
            <AppNavActionLink
              href="/exercises/create"
              icon={<PlusSquare className="h-6 w-6" />}
            >
              Create Exercise
            </AppNavActionLink>
            <AppNavLink href="/exercises" description="Manage your exercises.">
              All Exercises
            </AppNavLink>
          </AppNavItemContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Workouts</NavigationMenuTrigger>
          <AppNavItemContent>
            <AppNavActionLink
              href="/workouts/create"
              icon={<PlusSquare className="h-6 w-6" />}
            >
              Create Workout
            </AppNavActionLink>
            <AppNavLink href="/workouts" description="Manage your workouts.">
              All Workouts
            </AppNavLink>
          </AppNavItemContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
          <AppNavItemContent>
            <AppNavActionLink
              href="/schedule/today"
              icon={<Dumbbell className="h-4 w-4" />}
            >
              Today
            </AppNavActionLink>
            <AppNavLink href="/workouts" description="Manage your schedule.">
              Full Schedule
            </AppNavLink>
          </AppNavItemContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type AppNavItemContentProps = {
  children: React.ReactNode;
};

const AppNavItemContent = ({ children }: AppNavItemContentProps) => {
  return (
    <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {children}
    </NavigationMenuContent>
  );
};

type AppNavLinkProps = {
  href: string;
  description?: string;
  children: React.ReactNode;
};

const AppNavLink = ({ href, children }: AppNavLinkProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="hover:bg-muted p-4">
        <span className="text-muted-foreground text-sm leading-none">
          {children}
        </span>
      </Link>
    </NavigationMenuLink>
  );
};

type AppNavActionLinkProps = {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const AppNavActionLink = ({ href, icon, children }: AppNavActionLinkProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="from-muted/50 to-muted grid items-center gap-2 bg-gradient-to-br p-4 pt-8 hover:from-indigo-500 hover:to-green-500"
      >
        {icon}
        <span className="font-display uppercase">{children}</span>
      </Link>
    </NavigationMenuLink>
  );
};
