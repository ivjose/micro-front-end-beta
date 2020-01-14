const {
  REACT_APP_SNPS,
  REACT_APP_ADMIN,
  REACT_APP_MAP_MNGT,
  REACT_APP_ACAL,
  REACT_APP_POS
} = process.env;

export const Routes = [
  {
    path: "/snps",
    name: "AppSnps",
    host: REACT_APP_SNPS
  },
  {
    path: "/admin",
    name: "AppAdmin",
    host: REACT_APP_ADMIN
  },
  {
    path: "/map-mngt",
    name: "AppMapMngt",
    host: REACT_APP_MAP_MNGT
  },
  {
    path: "/acal",
    name: "AppAcal",
    host: REACT_APP_ACAL
  },
  {
    path: "/pos",
    name: "AppPos",
    host: REACT_APP_POS
  }
];
