"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CreateExercise() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createExercise = api.exercise.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createExercise.mutate({ name });
      }}
      className="flex flex-col gap-2"
    >
      <Input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" disabled={createExercise.isPending}>
        {createExercise.isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
