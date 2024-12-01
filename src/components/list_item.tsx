import Link from "next/link";
import React from "react";
export default function ListItem({
  header,
  summary,
  href,
  more,
  more_href,
  highlighted,
}: {
  header: React.ReactNode;
  summary: React.ReactNode;
  href: string;
  more?: React.ReactNode;
  more_href?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className="
      first:border-t border-b p-4 w-full odd:bg-white even:bg-gray-50 hover:bg-gray-100 mx-auto even:*bg-gray-50"
    >
      <div className="flex flex-row items-center gap-10 justify-between">
        <Link href={href} className="flex flex-row flex-1 min-w-0">
          <div className="flex flex-row items-center gap-4 min-w-0">
            <div className="text-md sm:text-xl font-bold truncate">
              {header}
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row sm:gap-4 *:text-muted-foreground truncate">
              {summary}
            </div>
          </div>
        </Link>
        {more && more_href && (
          <Link href={more_href} className="shrink-0">
            <div>{more}</div>
          </Link>
        )}
        <span className="material-symbols-rounded shrink-0">
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
}