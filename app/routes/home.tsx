import type { Route } from "./+types/home";
import { Listas } from "../listas/listas.jsx";
import { EditList } from "../editlists/editlist.jsx"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <EditList />;
}
