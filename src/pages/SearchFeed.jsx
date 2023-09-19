import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Countries from "../components/Countries";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetchFromAPI(`/name/${searchTerm}`).then((response) =>
      setCountries(response)
    );
  }, [searchTerm]);

  console.log(countries);

  if (!countries) return <Loading />;

  return (
    <Box py={5}>
      <Countries countries={countries} />
    </Box>
  );
};

export default SearchFeed;
