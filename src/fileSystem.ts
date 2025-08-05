import fs, {promises as asyncWriter} from "node:fs";

fs.writeFileSync("sync.json", JSON.stringify({
    name: "Moamen",
    age: 21,
}));

fs.writeFile(
    "callback.txt",
    "Hi form callback written file",
    (error: unknown) => {
        if(!error) {
            console.log("Completed!")
        }
    }
)


async function promiseWriter () {
    try {
        await asyncWriter.writeFile("async.doc", "I am Async");
        
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log("Finally block triggered!");
    }
}

promiseWriter();