import { createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const write = async () => {
  const writeStream = createWriteStream(
    path.join(import.meta.dirname, "files", "fileToWrite.txt")
  );

  await pipeline(process.stdin, writeStream);
};

await write();
