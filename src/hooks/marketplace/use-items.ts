import type { Item } from "@/types/item";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useItems() {
  return useSWR<Item[]>("/data/items.json", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000, // 1 min
  });
}
