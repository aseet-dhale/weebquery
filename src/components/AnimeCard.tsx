import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { type Media } from "../generated/graphql/graphql";
import { Link } from "react-router";

type AnimeCardProps = {
  media: Media;
};

const AnimeCard = ({ media }: AnimeCardProps) => {
  return (
    <>
      <Link
        to={`/anime/${media.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card variant="outlined" sx={{ minHeight: 200, marginTop: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={media.coverImage?.extraLarge || ""}
            />
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="body1">
                {media.title?.native}
              </Typography>
              <Typography gutterBottom variant="caption">
                {media.title?.english || media.title?.romaji}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};
export default AnimeCard;
