import Link from "next/link";
import { api, createSSRHelpers } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import { UserMenu } from "@/app/_components/UserMenu";

export const AuthMenu = async () => {
  const signedInUser = await api.user.signedInUser();

  const helpers = await createSSRHelpers();
  await helpers.user.signedInUser.prefetch();
  const dehydratedState = dehydrate(helpers.queryClient);

  if (!signedInUser) {
    return (
      <Button asChild variant="ghost">
        <Link href="/api/auth/signin">Sign In</Link>
      </Button>
    );
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <UserMenu />
    </HydrationBoundary>
  );
};
