import { readFile } from "fs/promises";
import path from "path";

const read = async () => {
  readFile(path.join(import.meta.dirname, "files", "fileToRead.txt"), "utf-8")
    .then((data) => console.log(data))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await read();
