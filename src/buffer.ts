import {Buffer} from "node:buffer";
const buf = Buffer.from("Moamen", "utf-8");

console.log(buf);

console.log(buf.toJSON());

console.log(buf.toString("base64url"));