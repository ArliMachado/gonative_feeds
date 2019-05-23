import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#b3b3b3',
    marginTop: 10,
  },
  postContainer: {
    width: 320,
    height: 200,
    padding: 20,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  postAuthor: {
    fontSize: 16,
  },
  postDescription: {
    marginTop: 10,
    fontSize: 14,
  },
});

const Post = ({ title, author, description }) => (
  <View style={styles.container}>
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postAuthor}>{author}</Text>
      <View style={styles.lineStyle} />
      <Text style={styles.postDescription}>{description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
