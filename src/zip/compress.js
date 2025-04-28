import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { createWriteStream, createReadStream } from "node:fs";
import path from "node:path";

const compress = async () => {
  const readStream = createReadStream(
    path.join(import.meta.dirname, "files", "fileToCompress.txt")
  );
  const gzip = createGzip();
  const writeStream = createWriteStream(
    path.join(import.meta.dirname, "archive.gz")
  );

  await pipeline(readStream, gzip, writeStream);
};

await compress();
