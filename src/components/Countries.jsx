import { Box, Stack } from "@mui/material";
import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      pb={5}
      gap={5}
      justifyContent={"space-evenly"}
    >
      {countries.map((item, id) => (
        <Box key={id}>
          <CountryCard countryData={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default Countries;
