import { pipeline } from "node:stream/promises";
import { unzip } from "node:zlib";
import { createWriteStream, createReadStream } from "node:fs";
import path from "node:path";

const decompress = async () => {
  const readStream = createReadStream(
    path.join(import.meta.dirname, "archive.gz")
  );

  const writeStream = createWriteStream(
    path.join(import.meta.dirname, "fileToCompress.txt")
  );

  readStream.on("data", (chunk) => {
    const data = unzip(chunk, (e, res) => {
      if (e) throw e;

      writeStream.write(res);
    });
  });
};

await decompress();
