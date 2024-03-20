import { exerciseRouter } from "@/server/api/routers/exercise";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";

// Primary server router
export const appRouter = createTRPCRouter({
  exercise: exerciseRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// Create a server-side caller for the tRPC API.
export const createCaller = createCallerFactory(appRouter);
