/* eslint-disable no-unused-vars */
import { FlatList, View, Text } from "react-native";
import { render, screen } from '@testing-library/react-native';
import useRepositories from "../../hooks/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            renderItem={({ item }) => (
                <>
                    <View testID="repositoryItem">
                        <Text>{item.fullName}</Text>
                    </View>
                    <View testID="repositoryItem">
                        <Text>{item.description}</Text>
                    </View>
                    <View testID="repositoryItem">
                        <Text>{item.language}</Text>
                    </View>
                    <View testID="repositoryItem">
                        <Text>{item.stargazersCount}</Text>
                    </View>
                    <View testID="repositoryItem">
                        <Text>{item.ratingAverage}</Text>
                    </View>
                </>

            )
            }
        />
    );
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId('repositoryItem');

      // Check first repository
      expect(repositoryItems[0]).toHaveTextContent('jaredpalmer/formik');
      expect(repositoryItems[1]).toHaveTextContent('Build forms in React, without the tears');
      expect(repositoryItems[2]).toHaveTextContent('TypeScript');
      expect(repositoryItems[3]).toHaveTextContent('21856');
      expect(repositoryItems[4]).toHaveTextContent('88');

      // Check second repository
      expect(repositoryItems[5]).toHaveTextContent('async-library/react-async');
      expect(repositoryItems[6]).toHaveTextContent('Flexible promise-based React data loader');
      expect(repositoryItems[7]).toHaveTextContent('JavaScript');
      expect(repositoryItems[8]).toHaveTextContent('1760');
      expect(repositoryItems[9]).toHaveTextContent('72');
    });
  });
});