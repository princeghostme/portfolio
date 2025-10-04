import { parentPort } from "worker_threads";

function getDocumentWord(): Promise<string> {
  const filePath = "./assets/Prince_Yadav.docx";
  const fs = require("fs").promises;
  return fs.readFile(filePath, "utf-8");
}

parentPort?.on("message", async () => {
  const content = await getDocumentWord();
  parentPort?.postMessage(content);
});
