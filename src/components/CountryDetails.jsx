import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { KeyboardBackspace } from "@mui/icons-material";
import Loading from "./Loading";

const CountryDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetchFromAPI(`/name/${name}?fullText=true`).then((response) =>
      setCountryData(response[0])
    );
  }, [name]);

  const handleClick = (item) => {
    fetchFromAPI(`/alpha/${item}`).then((response) => {
      navigate(`/country/${response[0]?.name?.common}`);
    });
  };

  if (!countryData) return <Loading />;

  console.log(countryData.currencies);

  function mapData(data) {
    const dataObject = Object.keys(data).map((code) => {
      const name = data[code];
      return { code, name };
    });

    return dataObject;
  }

  const languages = mapData(countryData.languages);
  const nativeNames = mapData(countryData.name.nativeName);
  const currencies = mapData(countryData.currencies);

  console.log(currencies);

  return (
    <Box sx={{ minHeight: "calc(100vh - 64px)", bgcolor: "background.main" }}>
      <Toolbar sx={{ height: 100, px: { md: 10 } }}>
        <Button
          startIcon={<KeyboardBackspace />}
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "elements.main",
            color: "text.main",
            textTransform: "capitalize",
            width: 130,
            boxShadow: "0px 0px 5px #0006",
          }}
        >
          Back
        </Button>
      </Toolbar>

      <Stack
        mt={3}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={{ md: "space-between" }}
        px={{ md: 10 }}
        gap={{ md: 10 }}
      >
        <Box sx={{ height: { xs: 200, md: 400 }, width: { xs: 300, md: 560 } }}>
          <img
            src={countryData.flags.svg}
            alt={countryData.flags.alt}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <Box sx={{ width: { xs: 300, md: "auto" } }}>
          <Typography
            sx={{
              color: "text.color",
              fontSize: 20,
              fontWeight: 800,
              mt: { xs: 3, md: 0 },
              mb: 2,
            }}
          >
            {countryData.name.common}
          </Typography>

          <Stack direction={{ md: "row" }} gap={{ md: 5 }}>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Native Name:{" "}
                <Box component="span" sx={{ fontWeight: 300 }}>
                  {nativeNames[0].name.official}
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Population:{" "}
                <Box component="span" sx={{ fontWeight: 300 }}>
                  {countryData.population.toLocaleString()}
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Region:{" "}
                <Box component="span" sx={{ fontWeight: 300 }}>
                  {countryData.region}
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Sub Region:{" "}
                <Box component="span" sx={{ fontWeight: 300 }}>
                  {countryData.subregion}
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                  display: "flex",
                  gap: 0.7,
                }}
              >
                Capital:{" "}
                <Box component="span" sx={{ fontWeight: 300 }}>
                  {countryData?.capital}
                </Box>
              </Typography>
            </Stack>

            <Stack gap={1} mt={{ xs: 3 }}>
              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Top Level Domain:{" "}
                <Box component="span" sx={{ fontWeight: 300 }}>
                  {countryData?.tld[0]}
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                  minWidth: 300,
                }}
              >
                Currencies:{" "}
                {currencies.map((item, id) => (
                  <Box key={id} component="span" sx={{ fontWeight: 300 }}>
                    {item.name.name}
                    {", "}
                  </Box>
                ))}
              </Typography>

              <Stack
                direction={"row"}
                gap={1}
                sx={{
                  color: "text.main",
                  fontWeight: 600,
                  fontSize: 16,
                  maxWidth: 400,
                }}
              >
                <Box component={"span"}>Languages: </Box>
                <Box>
                  {languages.map((item, id) => (
                    <Box key={id} component="span" sx={{ fontWeight: 300 }}>
                      {item.name}
                      {", "}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            my={{ xs: 3 }}
            direction={{ md: "row" }}
            alignItems={{ md: "center" }}
            gap={{ md: 1 }}
          >
            <Typography
              sx={{ color: "text.main", fontSize: 17, fontWeight: 600 }}
            >
              Border Countries:
            </Typography>

            <Stack
              direction={"row"}
              my={1}
              gap={{ xs: 1, md: { x: 2 } }}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              maxWidth={{ md: 320 }}
            >
              {countryData?.borders &&
                countryData?.borders.map((item, id) => (
                  <Button
                    key={id}
                    sx={{
                      bgcolor: "elements.main",
                      color: "text.main",
                      textTransform: "capitalize",
                      boxShadow: "0 0 3px #0002",
                      minHeight: 10,
                      height: 30,
                      minWidth: 90,

                      "&:hover": { bgcolor: "elements.main" },
                    }}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </Button>
                ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CountryDetails;
