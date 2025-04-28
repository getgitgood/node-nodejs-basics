import { unlink } from "fs/promises";
import path from "path";

const remove = async () => {
  unlink(path.join(import.meta.dirname, "files", "fileToRemove.txt")).catch(
    () => {
      throw new Error("FS operation failed");
    }
  );
};

await remove();
