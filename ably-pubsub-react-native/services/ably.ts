// // services/ably.ts
// import * as Ably from 'ably';

// // This pulls from your .env file
// const apiKey = process.env.EXPO_PUBLIC_ABLY_API_KEY;

// if (!apiKey) {
//   console.error(
//     'Ably API Key is missing! Make sure EXPO_PUBLIC_ABLY_API_KEY is set in your .env file.'
//   );
// }

// // We use 'clientId' to identify this specific user/device
// export const realtime = new Ably.Realtime({
//   key: apiKey,
//   clientId: 'referu-user-' + Math.random().toString(36).substring(7),
// });

// services/ably.ts
import * as Ably from 'ably';

const apiKey = process.env.EXPO_PUBLIC_ABLY_API_KEY;

if (!apiKey) {
  console.warn('Ably API Key is missing! Check your .env file.');
}

// Export a single instance to be used by the AblyProvider
export const realtimeClient = new Ably.Realtime({
  key: apiKey,
  clientId: `user-${Math.random().toString(36).substring(7)}`,
});
