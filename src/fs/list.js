import { readdir } from "fs/promises";
import path from "path";

const list = async () => {
  readdir(path.join(import.meta.dirname, "files"))
    .then((arr) => console.log(arr))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
