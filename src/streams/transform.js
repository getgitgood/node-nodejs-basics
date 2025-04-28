import { createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform: (chunk, _, callback) =>
      callback(null, chunk.toString().split("").reverse().join("") + "\n"),
  });

  await pipeline(process.stdin, reverse, process.stdout);
};

await transform();
