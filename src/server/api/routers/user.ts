import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  signedInUser: publicProcedure.query(({ ctx }) => {
    if (!ctx.session || !ctx.session.user) {
      return null;
    }

    const userId = ctx.session.user.id;

    return ctx.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, userId),
    });
  }),
});
