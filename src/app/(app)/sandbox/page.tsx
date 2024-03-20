import Link from "next/link";

import { CreateExercise } from "@/app/(app)/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { ModeToggle } from "@/components/ModeToggle";
import { Wifi } from "lucide-react";
import { GlitchButton } from "@/components/GlitchButton";
import { AppHeader } from "../_components/AppHeader";

export default async function Home() {
  const hello = await api.exercise.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="bg-zin-50 flex min-h-screen flex-col items-center justify-center dark:bg-zinc-950">
      <div className="container flex flex-col items-center justify-center gap-12 px-6 pb-16 pt-6 ">
        <div className="w-full max-w-5xl">
          <AppHeader />
        </div>
        <h2 className="font-display grid text-xl">
          <span>2</span>
          <span className="text-indigo-500">/</span>
          <span>3</span>
        </h2>
        <Link
          href="/"
          className="font-display text-xl uppercase underline decoration-indigo-500 decoration-4 underline-offset-4 hover:line-through"
        >
          link
        </Link>
        <span className="flex items-center gap-1 bg-indigo-300 px-2 py-1 text-xs text-indigo-950 dark:bg-indigo-800 dark:text-indigo-300">
          <Wifi className="h-3 w-3" />
          <span>something</span>
        </span>
        <p className="font-digital">09:16</p>
        <div className="grid place-items-center">
          <ModeToggle />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl">
              {session && (
                <span className="font-fancy">
                  Logged in as 1234567890 {session.user?.name}
                </span>
              )}
            </p>
            <GlitchButton>Start Workout</GlitchButton>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestExercise = await api.exercise.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestExercise ? (
        <p className="truncate">
          Your most recent exercise: {latestExercise.name}
        </p>
      ) : (
        <p>You have no exercises yet.</p>
      )}

      <CreateExercise />
    </div>
  );
}
