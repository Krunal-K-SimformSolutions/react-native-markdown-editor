import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import Formats from './Formats';

const defaultMarkdownButton = ({ item, getState, setState, foregroundColor }) => {
  const defaultStyles = { padding: 8, color: foregroundColor, fontSize: 16 };

  return (
    <TouchableOpacity onPress={() => item.onPress({ getState, setState, item })}>
      <Text style={[defaultStyles, item.style]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export const renderFormatButtons = ({ getState, setState }, formats, markdownButton, foregroundColor) => {
  const list = (
    <FlatList
      data={formats ? formats : Formats}
      extraData={{ foregroundColor }}
      keyboardShouldPersistTaps="always"
      renderItem={({ item, index }) =>
        markdownButton
          ? markdownButton({ item, getState, setState })
          : defaultMarkdownButton({ item, getState, setState, foregroundColor })}
      horizontal
    />
  );
  return list;
};