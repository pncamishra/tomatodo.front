// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3000',
  auth0: {
    clientID: 'CYfAnN20CAbDyWu1YJf0UdTn3nJ0cVNs',
    domain: 'anastasia-a-zhivaeva.us.auth0.com',
    redirectUrl: 'http://localhost:4200/tomatodo',
    logoutUrl: 'http://localhost:4200',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
