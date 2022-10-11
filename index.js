import { addDays, addBusinessDays } from "date-fns";

console.log("hello!");

const now = new Date(); //GMT - UTC
console.log(now);

const future = addBusinessDays(now, 9);
console.log(future);
