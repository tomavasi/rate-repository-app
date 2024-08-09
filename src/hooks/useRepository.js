import { SINGLE_REPO} from "../graphql/queries";
import { useQuery } from "@apollo/client";

export const useRepository = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(SINGLE_REPO, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.endCursor;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};