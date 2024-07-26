import { FlatList, View, StyleSheet } from 'react-native';
// import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import theme from '../themes/themes';
// import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    color: "#d6d6d6",
    backgroundColor: theme.colors.backgroundMain
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  // const {repositories} = useRepositories();
  // Get the nodes from the edges array

  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem repositoryItem={item} />
      )
      }
    />
  );
};

export default RepositoryList;