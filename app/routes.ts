import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/listas.jsx"),
    route("/editlist/:id", "routes/editlist.jsx"),
    route("/createlist/", "routes/createlist.jsx"),
    route("/viewlist/:id", "routes/viewlist.jsx"),
] satisfies RouteConfig;
