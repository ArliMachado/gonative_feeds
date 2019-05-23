import '~/config/DevToolsConfig';
import '~/config/ReactotronConfig';

import React, { Component } from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';
import Post from '~/components/Post';

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

export default class App extends Component {
  store = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Arli Machado',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, ducimus reprehenderit animi cum, blanditiis fuga reiciendis inventore eos aspernatur voluptates dolores quos. Facere dolor quod fuga, nulla dolorum laboriosam voluptate.',
      },
      {
        id: 2,
        title: 'Aprendendo Java',
        author: 'Rafael Lima',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorem eum adipisci nam at optio quam molestias deleniti non! Minima necessitatibus, ipsa mollitia quam doloremque facilis repudiandae soluta! Fuga, dicta.',
      },
      {
        id: 3,
        title: 'Melhor Jogador do Mundo',
        author: 'Leonel Messi',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum praesentium totam earum laboriosam possimus iste facere maiores exercitationem impedit fuga, eaque quo, architecto id blanditiis perspiciatis obcaecati delectus minus laborum.',
      },
      {
        id: 4,
        title: 'Joga Muito',
        author: 'Cristiano Ronaldo',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt recusandae ratione, corrupti, commodi, nulla explicabo sed delectus magnam temporibus placeat dignissimos aliquid reprehenderit porro ipsum non ducimus? Dolor, nulla ducimus!',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.store.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
