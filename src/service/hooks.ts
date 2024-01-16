import { useCallback, useEffect, useState } from "react";
import { getRandomUser, getUsers } from ".";
import { CONSTANTS } from "../constants";
import { GetUsersRequest, User } from "../types";
import { useQuery } from "react-query";

export function useRandomUserStore() {
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<User | undefined>();

  const fetchData = useCallback(() => {
    setIsLoading(true);
    getRandomUser().then((user) => {
      setUser(user);
      localStorage.setItem(CONSTANTS.localStorageKey, JSON.stringify(user));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { user, isLoading, refetch: fetchData };
}

export function useUserList(req: GetUsersRequest) {
  return useQuery({
    queryKey: ["users", req.page, req.seed],
    queryFn: async () => await getUsers(req),
  });
}
