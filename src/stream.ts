import fs from "node:fs";
const input = "input.txt";
const output = "output.txt";

fs.writeFileSync(input, "Hi I am an input file");

const readableStream = fs.createReadStream(input,{
    highWaterMark: 1,
})

const writableStream = fs.createWriteStream(output)
readableStream.on("data", (chunk) => {
    writableStream.write(chunk);
})

readableStream.on("end", () => {
    writableStream.write(" Finished!");
    writableStream.end();
})

