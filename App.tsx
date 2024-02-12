import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NativeSampleModule from './tm/NativeSampleModule';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>
          NativeSampleModule.reverseString(...) ={' '}
          {NativeSampleModule.reverseString(
            'aaaaa the quick brown fox jumps over the lazy dog',
          )}
        </Text>
        <Text>
          NativeSampleModule.toUpperCaseString(...) ={' '}
          {NativeSampleModule.toUpperCaseString(
            'aaaaa the quick brown fox jumps over the lazy dog',
          )}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
