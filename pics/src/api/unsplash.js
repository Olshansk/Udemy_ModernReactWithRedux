import axios from "axios";

// https://unsplash.com/documentation
const ACCESS_KEY = "5OPUL1VkqKzHNB1ToeNF7CymkvY2cWI9Rj79AZqdQkc";
// const SECRET_KEY = '2hpjIaz4sAuRoeEpYca-QOmpKW3junejkCtBdbsfv0o';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});
