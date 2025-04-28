import { workerData, parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const res = {
    status: "resolved",
    data: null,
  };

  try {
    res.data = nthFibonacci(workerData);
  } catch {
    res.status = "error";
  } finally {
    parentPort.postMessage(res);
  }
};

sendResult();
