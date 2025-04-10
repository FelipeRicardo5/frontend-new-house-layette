import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/listas.jsx"),
    route("/editlist", "routes/editlist.jsx"),
] satisfies RouteConfig;
