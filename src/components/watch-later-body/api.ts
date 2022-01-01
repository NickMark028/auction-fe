import { TProduct } from "models";
import axiosClient from "utils/axiosClient";

export async function getWatchLater() {
  const response = await axiosClient.get("/api/watch-list");
  return response.data as TProduct[];
}
