// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weaterApiBaseUrl: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'weather-by-api-ninjas.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderVale: '88f266f83bmshee519f2555fed09p1f23e6jsn9c0e475b6637'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
