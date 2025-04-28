import os from "node:os";
import path from "node:path";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const cpusCount = os.cpus().length;

  const workers = [];

  for (let i = 0; i < cpusCount; i++) {
    const worker = new Worker(path.join(import.meta.dirname, "worker.js"), {
      workerData: 10 + i,
    });

    workers.push(new Promise((res) => worker.on("message", res)));
  }

  console.log(
    await Promise.allSettled(workers).then((res) =>
      res.map(({ value }) => value)
    )
  );
};

await performCalculations();
