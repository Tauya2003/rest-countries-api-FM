import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
} from "@mui/material";
import Countries from "../components/Countries";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromAPI("all").then((response) => setCountries(response));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    searchTerm && navigate(`/search/${searchTerm}`);
  };

  const handleChange = (e) => {
    fetchFromAPI(`/region/${e.target.value}`).then((response) =>
      setCountries(response)
    );
  };

  if (!countries) return <Loading />;

  return (
    <Box
      sx={{
        bgcolor: "background.main",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Stack
        px={{ md: 5 }}
        mx={"auto"}
        width={{ md: "100vw" }}
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ md: "center" }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "elements.main",
            my: "25px",
            p: "2px 4px",
            pr: 3,
            display: "flex",
            alignItems: "center",
            width: { xs: 330, md: 400 },
          }}
        >
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <Search sx={{ color: "input.main" }} />
          </IconButton>

          <InputBase
            sx={{ flex: 1, fontSize: "14px", color: "input.main" }}
            placeholder="Search for a country..."
            inputProps={{ "aria-label": "Search for a country" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
          />
        </Paper>

        <FormControl>
          <InputLabel id="label" sx={{ fontSize: 14 }}>
           Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={region}
            label="Region"
            onChange={handleChange}
            sx={{
              width: 200,
              fontSize: 14,
              bgcolor: "elements.main",
              // border: 0,
              // outline: 0,
              // "& .MuiOutlinedInput-root": {
              //   "& fieldset": {
              //     border: "none",
              //   },
              //   "&:hover fieldset": {
              //     borderColor: "transparent",
              //   },
              //   "&.Mui-focused fieldset": {
              //     borderColor: "transparent",
              //   },
              // },
            }}

          >
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"America"}>America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Countries countries={countries} sx={{ bgcolor: "green" }} />
    </Box>
  );
};

export default Feed;
