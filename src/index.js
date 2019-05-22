import '~/config/DevToolsConfig';
import '~/config/ReactotronConfig';

import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import Post from '~/components/Post';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Post />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb7474',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
