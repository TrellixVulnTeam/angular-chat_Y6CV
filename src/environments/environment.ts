// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 取得したFirebaseの情報を設定してください
  firebase: {
    apiKey: "AIzaSyC6A7-3_tHaqxsOFbw8yruUoysMzMdbXxU",
    authDomain: "angular-chat-e8a4c.firebaseapp.com",
    databaseURL: "https://angular-chat-e8a4c-default-rtdb.firebaseio.com",
    projectId: "angular-chat-e8a4c",
    storageBucket: "angular-chat-e8a4c.appspot.com",
    messagingSenderId: "1089842731458",
    appId: "1:1089842731458:web:24eaef424fef5cd4025e5b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
