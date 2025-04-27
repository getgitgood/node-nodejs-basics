import crypto from "crypto";
import { createReadStream } from "fs";
import path from "path";

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");

  const stream = createReadStream(
    path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt")
  );

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
