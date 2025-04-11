import { username, city, image } from "../data/user";
const username = "Liza";
 const city = "New York";
 
 const image = "https://i.imgur.com/mV8PQxj.gif";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});

export {username, city, image};