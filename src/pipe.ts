import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import zlib  from "node:zlib";

const read = "read-pipe.txt";
const write = "write-pipe.txt";
fs.writeFileSync(read, "Hi i am read pipe");
const readable = fs.createReadStream(read);
const writable = fs.createWriteStream(write);
const zipper = zlib.createGzip();

// const stream = readable.pipe(zipper).pipe(writable);



writable.on("finish", () => {
    console.log("Finished!");
});

writable.on("pipe", (src) => {
    console.log("Piped!");
});


// --------------------
const pipeFunc = async() => {

    await pipeline(
        readable,
        writable,
    )
}

pipeFunc();