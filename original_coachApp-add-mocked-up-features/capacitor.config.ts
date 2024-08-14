import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.offshift.coachapp',
  appName: 'coachApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
