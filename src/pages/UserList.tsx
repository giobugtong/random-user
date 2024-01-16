import React, { useMemo } from "react";
import { useUserList } from "../service/hooks";
import { useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import UserCard from "../components/UserCard";
import PageControls from "../components/PageControls";

export default function UserList() {
  const [params] = useSearchParams();
  const page = params.get("page") ?? "1";
  const seed = params.get("seed") ?? undefined;
  const { data, isLoading } = useUserList({ page, seed });

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="min-h-[40dvh] grid place-items-center">
          <Spinner />
        </div>
      );
    }

    if (data?.results.length === 0) {
      return <p>No results returned</p>;
    }

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-4">
          {data?.results.map((item) => {
            return <UserCard {...item} key={item.email} />;
          })}
        </div>
        <PageControls page={page} seed={seed ?? data?.info.seed} />
      </div>
    );
  }, [data?.info.seed, data?.results, isLoading, page, seed]);
  return <article>{content}</article>;
}
