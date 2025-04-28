import { fork, spawn } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  if (!args) return;

  const filePath = path.join(import.meta.dirname, "files", "script.js");

  spawn('node', [filePath, ...args], { stdio: ["inherit", "inherit", "ipc"] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test1', 'test2']);
