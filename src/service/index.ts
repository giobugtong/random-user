import axios from "axios";
import { CONSTANTS } from "../constants";
import { ApiResponnse, GetUsersRequest, User } from "../types";

export async function getRandomUser(): Promise<User> {
  try {
    const response = await axios.get<ApiResponnse>(CONSTANTS.API_URL);
    if (response.status === 200) {
      return response.data.results[0];
    } else {
      throw Error("Uncaught error");
    }
  } catch (error) {
    throw Error("Failed to fetch random user: " + error);
  }
}

export async function getUsers({ seed, page }: GetUsersRequest) {
  try {
    let params: { [key: string]: string } = {
      page: page ?? "1",
      results: "12",
    };
    if (seed) {
      params.seed = seed;
    }
    const response = await axios.get<ApiResponnse>(CONSTANTS.API_URL, {
      params: params,
    });

    return response.data;
  } catch (error) {
    throw Error("Failed to fetch users: " + error);
  }
}
