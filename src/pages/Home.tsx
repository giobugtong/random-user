import React, { useMemo } from "react";
import Spinner from "../components/Spinner";
import { useRandomUserStore } from "../service/hooks";
import { fullnameFormat } from "../utils";
import { Link } from "react-router-dom";

export default function Home() {
  const { user, isLoading, refetch } = useRandomUserStore();

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      );
    }
    if (user) {
      return (
        <div className="flex flex-col gap-3 items-center">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="object-contain h-24 w-24 rounded"
          />
          <div>
            <div className="flex gap-2 items-center">
              <img src="/assets/user.svg" alt="user" className="h-5 w-5" />
              <p className="font-medium text-lg">{fullnameFormat(user.name)}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/assets/mail.svg" alt="mail" className="h-5 w-5" />
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }, [isLoading, user]);
  return (
    <article>
      <div className="flex flex-col items-center justify-center min-h-[80dvh] max-w-[20rem] mx-auto">
        <div className="border rounded-md p-4 flex flex-col items-center justify-center min-h-56 h-full w-full bg-white shadow">
          {content}
        </div>
        <button
          onClick={refetch}
          disabled={isLoading}
          type="button"
          className="mt-4 font-medium bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-800 transition-all duration-150 active:scale-95"
        >
          Fetch a new user
        </button>
        <Link
          to="/list"
          className="mt-4 font-medium bg-orange-300 rounded-md px-4 py-2 text-black hover:bg-orange-400 transition-all duration-150 active:scale-95"
        >
          User List
        </Link>
      </div>
    </article>
  );
}
