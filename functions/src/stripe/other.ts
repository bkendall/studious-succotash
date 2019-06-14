import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const other = functions.firestore.document('user/s').onWrite((change, context) => {
  console.log("Got a change", change, context)
});
