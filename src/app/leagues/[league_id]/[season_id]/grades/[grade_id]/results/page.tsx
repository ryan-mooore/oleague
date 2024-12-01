import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ColHeader from "./col_header";
import ResultCell from "./result_cell";
import RowHeader from "./row_header";
import RowTotals from "./row_totals";

export default async function ResultsPage({
  params,
}: {
  params: { league_id: string; season_id: string; grade_id: string };
}) {
  const grade = await prisma.grade.findUnique({
    where: {
      league_id_season_id_grade_id: {
        league_id: params.league_id,
        season_id: params.season_id,
        grade_id: params.grade_id,
      },
    },
    include: {
      competitor: {
        where: { grade_id: params.grade_id },
        include: {
          points: true,
          orienteer: true,
        },
        orderBy: {
          placing: "asc",
        },
      },
      season: {
        include: {
          event: {
            include: { race: true },
          },
        },
      },
    },
  });

  if (!grade) {
    return notFound();
  }

  return (
    <div className="relative max-w-full overflow-x-auto pt-32">
      <table className="relative w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="sticky bg-background left-0 z-20 w-32 text-right border-r">
              {grade.season.provisional ? "Current Placing" : "Place"}
            </th>
            <th className="sticky bg-background left-16 z-20 w-48 text-left border-r">
              Competitor
            </th>
            {grade.season.event.map((oevent) => (
              <ColHeader key={oevent.event_number} event={oevent} />
            ))}
            <th className="sticky bg-background right-0 z-20 text-right w-20 pr-3 border-l">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {grade.competitor.map((competitor) => (
            <tr
              key={competitor.onz_id}
              className="odd:bg-white even:bg-gray-50"
            >
              {RowHeader(competitor)}
              {competitor.points.map((point) => ResultCell(competitor, point))}
              {RowTotals(competitor)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
