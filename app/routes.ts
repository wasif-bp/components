import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Router } from "react-router";

export default [index("routes/SideNav.tsx"),
    route("productcard","routes/ProductCard.tsx"),
    route("productoverviewcard","routes/ProductOverviewCard.tsx"),
    route("partsoverview","routes/PartsOverview.tsx"),
    route("companyprofile", "routes/CompanyProfile.tsx"),
    route("managerapprovalcard","routes/ManagerApprovalCard.tsx")
] satisfies RouteConfig;
