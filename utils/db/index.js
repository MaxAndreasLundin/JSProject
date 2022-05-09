import admin from "firebase-admin";
import fs from "fs";

import * as firebase from "firebase/app";
import { initializeApp } from "firebase-admin/app";
import serviceAccount from "./serviceAccountKey.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
