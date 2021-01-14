import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@inficare/auth",
  app: () =>
    System.import(
      "@inficare/auth"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@inficare/auth",
//   app: () => System.import("@inficare/auth"),
//   activeWhen: ["/login"]
// });

// registerApplication({
//   name: "@inficare/home",
//   app: () => System.import("@inficare/home"),
//   activeWhen: ["/home"]
// });

// registerApplication({
//   name: "@inficare/report",
//   app: () => System.import("@inficare/report"),
//   activeWhen: ["/report"]
// });

start({
  urlRerouteOnly: true,
});
