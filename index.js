/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Afeadthergrogfadmtialyespp from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Afeadthergrogfadmtialyespp);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { feadthergrogfadmtialyesOnMessageRecieved } = require('./services/initializfeadthergrogfadmtialyesationShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await feadthergrogfadmtialyesOnMessageRecieved(remoteMessage);
  });
});
