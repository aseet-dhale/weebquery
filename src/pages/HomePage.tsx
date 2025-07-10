import { useQuery } from "@apollo/client";
import { GetAnimeListDocument, type Media } from "../generated/graphql/graphql";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";
import AnimeCard from "../components/AnimeCard";
import { Pagination, Stack } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router";

function HomePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get("page")) ?? 2;
  const { loading, data, error } = useQuery(GetAnimeListDocument, {
    variables: {
      page: page,
      sort: "POPULARITY_DESC",
    },
  });

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/?page=${value}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error.message} />;
  const animeCardsData = data?.Page?.media || [];
  const filteredAnimeCardsData = animeCardsData
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map((card) => card as Media);
  return (
    <>
      <Stack
        direction="row"
        useFlexGap
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: 2, flexWrap: "wrap" }}
      >
        {filteredAnimeCardsData.map((card) => (
          <AnimeCard key={card.id} media={card} />
        ))}
      </Stack>
      <Stack sx={{ marginTop: 2 }} alignItems="center">
        <Pagination
          count={data?.Page?.pageInfo?.total ?? 10}
          page={page}
          variant="outlined"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}

export default HomePage;
