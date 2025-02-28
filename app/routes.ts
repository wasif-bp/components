import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Router } from "react-router";

export default [index("routes/SideNav.tsx"),
    route("ProductCard","routes/ProductCard.tsx"),
    route("ProductOverviewCard","routes/ProductOverviewCard.tsx"),
] satisfies RouteConfig;
