interface Env {
  API_URL: string;
  APP_URL: string;
}

const env: Env = {
  API_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  APP_URL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:5173",
};

export default env;
