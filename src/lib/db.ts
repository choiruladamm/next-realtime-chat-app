import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://apn1-probable-crow-35314.upstash.io",
  token:
    "AYnyASQgNTE1ODZhNWMtMWQ4NS00OTUxLWI4MmMtMzk4NmU2OGRiYzEzYTJiZGZjMThkZDgxNDkzNWJiYmViYTJhZTI3NWQ4NmM=",
});
