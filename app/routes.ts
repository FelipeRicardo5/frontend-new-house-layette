import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/listas.jsx"),
    route("/editlist/:id", "routes/editlist.jsx"),
    route("/createlist/:id", "routes/createlist.jsx"),
] satisfies RouteConfig;
