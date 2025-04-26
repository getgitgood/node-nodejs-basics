import { rename as rn } from "fs/promises";
import path from "path";

const rename = async () => {
  const basePath = path.join(import.meta.dirname, "files");

  rn(
    path.join(basePath, "wrongFilename.txt"),
    path.join(basePath, "properFilename.md")
  ).catch(() => {
    throw new Error("FS operation failed");
  });
};

await rename();
