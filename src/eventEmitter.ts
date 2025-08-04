import { EventEmitter } from "node:events"
type MyEvent = {
    email: string[],
    logged: {name: string, email: string}[]
}
const eventChannel = new EventEmitter<MyEvent>();

const emailChanged = "email";

// const event1 = (email: string) => {
//   console.log(email);
// };

// eventChannel.on(emailChanged, event1);

// eventChannel.emit(emailChanged, "test@example.com");

// eventChannel.off(emailChanged, event1);

// eventChannel.emit(emailChanged, "moamen@gmail.com");


// ------------------------------

const userLogged = "logged";

eventChannel.once(userLogged, (user: {name: string, email: string}) => {
    console.log(user);
});

eventChannel.emit(userLogged, {name: "Moamen", email: "moamen@gmail.com"});
eventChannel.emit(userLogged, {name: "Ali", email: "ali@gmail.com"});



