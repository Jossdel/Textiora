import prisma from "./lib/prisma.js";

async function main() {
  const result = await prisma.$queryRaw`SELECT NOW()`;
  console.log(result);
}

main();
