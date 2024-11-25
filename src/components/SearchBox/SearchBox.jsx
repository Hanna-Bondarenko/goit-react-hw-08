import { useDispatch, useSelector } from "react-redux";
import { TextField, Box } from "@mui/material"; // Імпорт компонентів Material UI
import { selectNameFilter } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 2, // margin-bottom
      }}
    >
      <TextField
        label="Find contacts by name"
        variant="outlined"
        value={filter}
        onChange={handleChange}
        sx={{
          width: "100%",
          maxWidth: 400,
          mt: 2, // margin-top для збільшення відступу зверху
        }}
        InputLabelProps={{
          sx: {
            marginTop: 2, // Збільшення відступу для самого label
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;
