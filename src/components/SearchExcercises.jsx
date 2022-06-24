import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { excerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  //display categories
  useEffect(() => {
    const fetchExcerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        excerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExcerciseData();
  }, []);

  const handleSearch = async (e) => {
    if (search) {
      const excercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );

      const searchedExcercises = excercisesData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search) ||
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExcercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Excercises"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
