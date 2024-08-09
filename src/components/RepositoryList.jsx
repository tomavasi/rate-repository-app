import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import theme from '../themes/themes';
import { useQuery } from '@apollo/client';
import { GET_REPOS_DATE, GET_REPOS_RATING } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import { RepositoryListHeader } from './RepositoryListHeader';
import { useDebounce } from 'use-debounce';
import { useRepositories } from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
    color: "#d6d6d6",
    backgroundColor: theme.colors.backgroundMain
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const [order, setOrder] = useState({

  });
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 500)
  const { repositories, fetchMore } = useRepositories({
    first: 5,
    ...order,
    searchKeyword: value
  })
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={() => fetchMore()}
      renderItem={({ item }) => (
        <Pressable onPress={() => { navigate(`${item.id}`) }}>
          <RepositoryItem repositoryItem={item} showButton={false} />
        </Pressable>
      )
      }
      ListHeaderComponent={<RepositoryListHeader setOrder={setOrder} order={order} text={text} setText={setText} />}
    />
  );
};

export default RepositoryList;