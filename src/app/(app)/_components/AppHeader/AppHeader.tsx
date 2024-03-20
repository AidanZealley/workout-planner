import { ModeToggle } from "@/components/ModeToggle";

import { Logo } from "@/app/_components/Logo";
import { AppNav } from "@/app/(app)/_components/AppNav";
import { AuthMenu } from "@/app/_components/AuthMenu";

export const AppHeader = () => {
  return (
    <div className="flex w-full items-center justify-between gap-6 pt-4">
      <div className="flex items-center gap-6">
        <Logo />
        <AppNav />
      </div>

      <div className="flex items-center gap-3">
        <ModeToggle />
        <AuthMenu />
      </div>
    </div>
  );
};
