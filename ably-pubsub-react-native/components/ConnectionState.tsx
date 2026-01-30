// components/ConnectionState.tsx

// React hooks are exported from the 'ably/react' path of the 'ably' package.
import { useAbly, useConnectionStateListener } from "ably/react";
import { useState } from "react";
import { Text } from "react-native";

export function ConnectionState() {
  // The useAbly hook returns the Ably Realtime client instance provided by the AblyProvider
  const ably = useAbly();
  const [connectionState, setConnectionState] = useState(ably.connection.state);

  // useConnectionStateListener hook listens for changes in connection state
  useConnectionStateListener((stateChange) => {
    setConnectionState(stateChange.current);
  });

  return (
    <Text className="mt-4 text-center">Connection: {connectionState}!</Text>
  );
}
