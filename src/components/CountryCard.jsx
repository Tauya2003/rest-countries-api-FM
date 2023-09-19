import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ countryData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${countryData.name.common}`);
  };

  return (
    <Card
      sx={{ bgcolor: "elements.main", height: 320, width: 280, px: "auto" }}
    >
      <CardMedia
        onClick={handleClick}
        sx={{ height: 140, width: 280, bgcolor: "#0002" }}
        image={countryData.flags.svg}
        title={countryData.name.official}
      />

      <CardContent sx={{ pl: 3 }}>
        <Typography
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            color: "text.main",
            fontWeight: 800,
            fontSize: 17,
            mb: 3,
            mt: 1,
          }}
        >
          {countryData.name.common}
        </Typography>

        <Typography
          sx={{ color: "text.main", fontWeight: 600, fontSize: 14, my: 0.7 }}
        >
          Population:{" "}
          <Box component={"span"} sx={{ fontWeight: 300 }}>
            {countryData.population.toLocaleString()}
          </Box>
        </Typography>

        <Typography
          sx={{ color: "text.main", fontWeight: 600, fontSize: 14, my: 0.7 }}
        >
          Region:{" "}
          <Box component={"span"} sx={{ fontWeight: 300 }}>
            {countryData.region}
          </Box>
        </Typography>

        <Typography
          sx={{ color: "text.main", fontWeight: 600, fontSize: 14, my: 0.7 }}
        >
          Capital:{" "}
          <Box component={"span"} sx={{ fontWeight: 300 }}>
            {countryData.capital}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
