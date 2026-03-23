// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api"
// });

// export default api;

// src/Services/api.js
import axios from "axios";

// Environment-based URL
// Local: http://localhost:5000/api
// Production: Render backend URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL
});

export default api;