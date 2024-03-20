import { ContentWrap } from "@/app/_components/ContentWrap";
import { WeekCompletion } from "./_components/WeekCompletion";

export default async function Home() {
  return (
    <ContentWrap>
      <div className="grid gap-12">
        <div className="grid gap-8">
          <h2 className="font-display text-3xl uppercase">This Week</h2>

          <div className="grid grid-cols-2">
            <WeekCompletion total={5} completed={4} />
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}
