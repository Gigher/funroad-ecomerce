"use client";

import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.auth.session.queryOptions())

  return (
    <div className="p-4 flex flex-col gap-4">
      Home page: <br/>

      {JSON.stringify(data?.user, null, 2)}
    </div>
  );
}
