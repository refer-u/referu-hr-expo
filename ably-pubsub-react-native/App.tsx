// import { ScreenContent } from 'components/ScreenContent';
// import { StatusBar } from 'expo-status-bar';

// import './global.css';

// export default function App() {
//   return (
//     <>
//       <ScreenContent title="Home" path="App.tsx"></ScreenContent>
//       <StatusBar style="auto" />
//     </>
//   );
// }

// App.tsx

// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';

// import './global.css';

// export default function App() {
//   return (
//     <View className="mt-8 w-full flex-1 items-center">
//       <View className="w-[90%] max-w-[900px] rounded-lg border border-blue-500">
//         <View className="w-full rounded-lg bg-gray-100 p-4">
//           <Text className="text-center text-lg font-semibold text-blue-500">
//             Ably Pub/Sub React Native
//           </Text>
//         </View>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// App.tsx
// App.tsx

// import * as Ably from 'ably';
// import { AblyProvider, ChannelProvider } from 'ably/react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, Text, View } from 'react-native';

// import { ConnectionState } from 'components/ConnectionState';
// import './global.css';

// // Create your Ably Realtime client
// const realtimeClient = new Ably.Realtime({
//   key: process.env.ABLY_API_KEY,
//   clientId: 'my-first-client',
// });

// export default function App() {
//   return (
//     <AblyProvider client={realtimeClient}>
//       <ChannelProvider channelName="my-firs-chanel">
//         <SafeAreaView className="flex-1 bg-white">
//           <View className="mt-8 w-full flex-1 items-center">
//             <View className="w-[90%] max-w-[900px] rounded-lg border border-blue-500">
//               <View className="w-full rounded-lg bg-gray-100 p-4">
//                 <Text className="text-center text-lg font-semibold text-blue-500">
//                   Ably Pub/Sub React Native
//                 </Text>
//                 {/* Add ConnectionState here */}
//                 <ConnectionState />
//               </View>
//             </View>
//             <StatusBar style="auto" />
//           </View>
//         </SafeAreaView>
//       </ChannelProvider>
//     </AblyProvider>
//   );
// }

// App.tsx

// import * as Ably from 'ably';
// import { AblyProvider, ChannelProvider } from 'ably/react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, Text, View } from 'react-native';
// import { ConnectionState } from './components/ConnectionState';
// import { Messages } from './components/Messages';

// import './global.css';

// // Create your Ably Realtime client
// const realtimeClient = new Ably.Realtime({
//   key: process.env.ABLY_API_KEY,
//   clientId: 'my-first-client',
// });

// export default function App() {
//   return (
//     <AblyProvider client={realtimeClient}>
//       <ChannelProvider channelName="my-first-channel">
//         <SafeAreaView className="flex-1 bg-white">
//           <View className="mt-8 w-full flex-1 items-center">
//             <View className="w-[90%] max-w-[900px] rounded-lg border border-blue-500">
//               <View className="w-full rounded-lg bg-gray-100 p-4">
//                 <Text className="text-center text-lg font-semibold text-blue-500">
//                   Ably Pub/Sub React Native
//                 </Text>
//                 <ConnectionState />
//               </View>

//               <View className="flex-column justify-evenly lg:flex-row">
//                 <View className="lg:w-3/4">
//                   {/* Your Messages component should go here */}
//                   <Messages />
//                 </View>
//               </View>
//             </View>
//             <StatusBar style="auto" />
//           </View>
//         </SafeAreaView>
//       </ChannelProvider>
//     </AblyProvider>
//   );
// }
import { AblyProvider, ChannelProvider } from 'ably/react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, Text, View } from 'react-native';

// Import the centralized client from your service folder
import { realtimeClient } from './services/ably';

// Import your custom components
import { ConnectionState } from './components/ConnectionState';
import { Messages } from './components/Messages';

// Import your global styles (Tailwind/NativeWind)
import './global.css';

export default function App() {
  return (
    /**
     * AblyProvider: Provides the Ably Realtime instance to all child components.
     * ChannelProvider: Scopes the hooks (like useChannel) to 'my-first-channel'.
     */
    <AblyProvider client={realtimeClient}>
      <ChannelProvider channelName="my-first-channel">
        <SafeAreaView className="flex-1 bg-white">
          <View
            className="flex-1 items-center px-4"
            style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            {/* Header Container */}
            <View className="w-full max-w-[900px] overflow-hidden rounded-lg border border-blue-500">
              <View className="w-full bg-gray-100 p-4">
                <Text className="text-center text-lg font-bold text-blue-600">
                  Ably Pub/Sub React Native
                </Text>

                {/* Connection Status Indicator */}
                <ConnectionState />
              </View>

              {/* Chat/Messages Section */}
              <View className="bg-white">
                <Messages />
              </View>
            </View>

            <StatusBar style="dark" />
          </View>
        </SafeAreaView>
      </ChannelProvider>
    </AblyProvider>
  );
}
