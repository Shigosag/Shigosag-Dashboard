import app from "./app";
import http from "http";
import { initSocket } from "./services/socket.service";

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";

const server = http.createServer(app);
initSocket(server);

/* ================= COLORS ================= */
const reset = "\x1b[0m";
const green = "\x1b[32m";
const boldGreen = "\x1b[1;32m";
const purple = "\x1b[35m";
const magenta = "\x1b[95m";
const cyan = "\x1b[36m";

const rose = "\x1b[38;5;204m";
const hotPink = "\x1b[38;5;199m";

const rainbow = [
  "\x1b[31m",
  "\x1b[33m",
  "\x1b[32m",
  "\x1b[36m",
  "\x1b[34m",
  "\x1b[35m",
];

/* ================= ASCII ================= */
const ascii = `
███████╗██╗  ██╗██╗ ██████╗  ██████╗ ███████╗ █████╗  ██████╗ 
██╔════╝██║  ██║██║██╔════╝ ██╔═══██╗██╔════╝██╔══██╗██╔════╝ 
███████╗███████║██║██║  ███╗██║   ██║███████╗███████║██║  ███╗
╚════██║██╔══██║██║██║   ██║██║   ██║╚════██║██╔══██║██║   ██║
███████║██║  ██║██║╚██████╔╝╚██████╔╝███████║██║  ██║╚██████╔╝
╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ 
`;

/* ================= PROGRESS BAR ================= */
function renderProgress(p: number) {
  const width = 30;
  const filled = Math.round((p / 100) * width);
  const empty = width - filled;

  return `[${"█".repeat(filled)}${" ".repeat(empty)}] ${p}%`;
}

/* ================= SERVER START ================= */
server.listen(PORT, () => {
  let progress = 0;
  let colorIndex = 0;

  /* BOOT ANIMATION (0–100%) */
  const boot = setInterval(() => {
    progress += 5;
    const color = rainbow[colorIndex++ % rainbow.length];

    console.clear();

    // ASCII (ONLY thing that changes color continuously)
    console.log(color + ascii + reset);

    // progress bar
    console.log("\n🚀 Booting Shigosag Dashboard API...");
    console.log(renderProgress(progress));

    if (progress >= 100) {
      clearInterval(boot);

      /* FINAL STATIC OUTPUT */
      console.clear();

      console.log(
        color + ascii + reset +
          `\n${rose}🚀 Shigosag Dashboard API${reset}` +
          `\n${hotPink}💖 Powered by Shigosag${reset}` +
          `\n👤 Author: ${purple}Shigosag${reset}` +
          `\n🌍 Environment: ${magenta}${ENV}${reset}` +
          `\n🔥 Status: ${cyan}Running on port ${PORT}${reset}\n`
      );
    }
  }, 120);
});