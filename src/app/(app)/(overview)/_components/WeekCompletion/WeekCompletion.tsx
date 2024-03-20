import { cn } from "@/lib/utils";

type WeekCompletionProps = {
  total: number;
  completed: number;
};

export const WeekCompletion = ({ total, completed }: WeekCompletionProps) => {
  return (
    <div className="grid gap-8">
      <div className="flex items-end gap-6">
        <span className="font-display grid text-xl">
          <span>{completed}</span>
          <span className="text-indigo-500">/</span>
          <span>{total}</span>
        </span>

        <span>Workouts Completed</span>
      </div>

      <div className="flex flex-grow gap-1">
        {[...Array(total).keys()].map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-[2px] w-full rounded-full",
              index > completed - 1
                ? "bg-muted"
                : "bg-gradient-to-r from-indigo-500 to-green-500",
            )}
            style={{
              backgroundSize: `${100 * total}%`,
              backgroundPositionX: `-${((100 * total) / total) * index}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
