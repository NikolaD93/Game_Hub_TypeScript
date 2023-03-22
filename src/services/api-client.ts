import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e5ffcd77ab74a68a87ccd5ad7b6b5d0",
  },
});
