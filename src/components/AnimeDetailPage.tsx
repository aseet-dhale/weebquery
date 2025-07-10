import { useQuery } from "@apollo/client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GetAnimeDocument } from "../generated/graphql/graphql";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";
import theme from "../utils/theme";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GetAnimeDocument, {
    variables: {
      id: (id || 0) as number,
    },
  });
  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error.message} />;
  console.log(data);
  return (
    <Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          width="100%"
          alt={`Cover image ${data?.Media?.title?.english}`}
          src={data?.Media?.bannerImage || ""}
          style={{ objectFit: "cover", maxHeight: "300px" }}
        />
        <img
          style={{ maxWidth: "15%", marginTop: "-15%" }}
          src={data?.Media?.coverImage?.extraLarge || ""}
        />
      </div>
      <Container maxWidth="xl" sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Typography variant="h3">{data?.Media?.title?.native}</Typography>
            <Typography variant="subtitle1">
              {data?.Media?.title?.english || data?.Media?.title?.romaji}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AnimeDetailPage;
