// components/PresenceStatus.tsx

// 'ably/react' exports hooks for working with presence on a channel
import { usePresence, usePresenceListener } from 'ably/react';
import { Text, View } from 'react-native';

export function PresenceStatus() {
  // Enter the current client into the presence set with an optional status
  usePresence('my-first-channel', { status: "I'm here!" });

  // Subscribe to presence updates on the channel
  const { presenceData } = usePresenceListener('my-first-channel');

  return (
    <View className="w-full bg-white px-4 py-2">
      <Text className="mb-2 border-b border-gray-200 pb-2 text-center text-green-700">
        Present: {presenceData.length}
      </Text>

      <View>
        {presenceData.map((member, idx) => (
          <View key={idx} className="mb-2 flex-row items-center">
            <View className="mr-2 h-2 w-2 rounded-full bg-green-500" />
            <Text className="text-gray-800">
              {member.clientId}
              {member.data?.status ? ` (${member.data.status})` : ''}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
