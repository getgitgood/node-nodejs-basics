import { writeFile } from "fs/promises";
import path from "path";

const create = async () => {
  writeFile(
    path.join(import.meta.dirname, "files", "fresh.txt"),
    "I am fresh and young",
    { flag: "wx" }
  ).catch(() => {
    throw new Error("FS operation failed");
  });
};

await create();
