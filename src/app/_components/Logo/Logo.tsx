import { AudioLines } from "lucide-react";

export const Logo = () => {
  return (
    <span className="flex items-baseline gap-1 text-indigo-950 dark:text-indigo-50">
      <span className="h-6 w-6 overflow-hidden bg-indigo-500 p-1">
        <AudioLines className="h-6 w-6 rotate-45 text-indigo-50" />
      </span>

      <span className="font-display text-2xl font-extrabold uppercase tracking-tight">
        <span className="text-indigo-500">Flex</span>Deck.
      </span>
    </span>
  );
};
