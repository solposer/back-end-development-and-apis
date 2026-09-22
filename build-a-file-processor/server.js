// Starter file — add your code here
const fs = require('fs');
console.log(fs);

const data = fs.readFileSync("assets/poem.txt", { encoding: "utf8" });
console.log(data);

fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
});

const fsPromises = require("fs/promises");

async function main() {
  const data = await fsPromises.readFile("assets/poem.txt", {
    encoding: "utf8",
  });
  console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nSecond line");

const exists = fs.existsSync("assets/output.txt");
console.log(exists); // true or false

const entries = fs.readdirSync("assets");
console.log(entries); // [ 'output.txt', 'poem.txt' ];

const buf = Buffer.from("Hello, Node!");
console.log(buf);

console.log(buf.toString("hex")); // 48656c6c6f
console.log(buf.toString("base64")); // SGVsbG8=

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash); // 2cf24dba...

const random = crypto.randomBytes(16).toString("hex");
console.log(random); // e.g. 4f3a9c1b8e2d7a05

const id = crypto.randomUUID();
console.log(id);

const os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());

console.log(os.cpus().length); 