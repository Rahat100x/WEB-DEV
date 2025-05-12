async function registerUser() {
    await callecData()
    validateUserEmail();
    await insertUnDb();
    enddEmail();
    sendPushNotification();
}

registerUser()
  .then(() => console.log('Done'))
  .catch(() => console.log('Err'))