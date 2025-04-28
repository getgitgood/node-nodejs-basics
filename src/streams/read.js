import { createReadStream } from "fs";
import path from "path";

const read = async () => {
  const stream = createReadStream(
    path.join(import.meta.dirname, "files", "fileToRead.txt"),
    { encoding: "utf-8" }
  );

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => process.stdout.write("\n"));
};

await read();
