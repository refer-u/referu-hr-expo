// components/Messages.tsx

import type { Message } from 'ably';
import { useChannel } from 'ably/react';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

function MessageView({ message }: { message: Message }) {
  // Displays an individual message
  const isMine = message.clientId === 'my-first-client';
  return (
    <View className={`my-1 rounded px-2 py-1 shadow-sm ${isMine ? 'bg-green-100' : 'bg-blue-50'}`}>
      <Text className="text-gray-800">{message.data}</Text>
    </View>
  );
}

export function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  // useChannel hook also provides a publish method
  const { publish } = useChannel('my-first-channel', (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });

  // Function to handle publishing messages
  const handlePublish = () => {
    if (!inputValue.trim()) return;
    publish('my-first-messages', inputValue.trim()).catch((err) =>
      console.error('Error publishing message', err)
    );
    setInputValue('');
  };

  return (
    <View className="h-[200px] w-full rounded-lg lg:h-[400px]">
      <ScrollView className="flex-1 p-4">
        {messages.map((msg: Message) => (
          <MessageView key={msg.id} message={msg} />
        ))}
      </ScrollView>
      <View className="mb-2 mt-auto flex-row items-center border-t border-gray-200 p-2">
        <TextInput
          placeholder="Type your message..."
          className="flex-1 rounded border border-gray-400 bg-white p-2"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handlePublish}
        />
        <TouchableOpacity
          className="ml-2 items-center justify-center rounded bg-blue-500 px-4 py-2"
          onPress={handlePublish}>
          <Text className="text-white">Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
