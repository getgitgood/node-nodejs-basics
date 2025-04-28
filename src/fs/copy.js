import { cp } from "fs/promises";
import path from "path";

const copy = async () => {
  cp(
    path.join(import.meta.dirname, "files"),
    path.join(import.meta.dirname, "files_copy"),
    { recursive: true, force: false, errorOnExist: true }
  ).catch(() => {
    throw new Error("FS operation failed");
  });
};

await copy();
