import { fork } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  if (!args) return;

  const filePath = path.join(import.meta.dirname, "files", "script.js");
  const sp = fork(filePath, args, { stdio: ["pipe", "pipe", "ipc"] });

  process.stdin.pipe(sp.stdin);
  sp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
