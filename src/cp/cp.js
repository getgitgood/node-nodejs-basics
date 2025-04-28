import { spawn } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  if (!args) return;

  const filePath = path.join(import.meta.dirname, "files", "script.js");
  const sp = spawn("node", [filePath, ...args]);

  sp.stdout.on("data", (chunk) => process.stdout.write(chunk));
  process.stdin.on("data", (data) => sp.stdin.write(data));

  sp.on("close", () => process.exit());
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
