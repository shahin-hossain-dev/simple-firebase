/**
 * 1. visit: console.firebase.google.com
 * 2. create project (skip analytics)
 * 3. Register app (Create app)
 * 4. npm install firebase
 * 5. add config file to your project
 * 6. DANGER:do not share or publish your firebase config file to pushing public github
 * 7. go to Docs > build > authentication > web > get started
 * 8. export app from the firebase.config.js file export default app
 * 9. Login.jsx: import {getAuth} from "firebase/auth"
 * 10. create const auth = getAuth(app)
 * 11. import google auth provider and create a new provider
 * 12. use singInWithPopup and pass auth & Provider
 * 13. activate sign in method (google, facebook, github etc.)
 * 14, [Vite]: change  127.0.0.1 to localhost
 */
