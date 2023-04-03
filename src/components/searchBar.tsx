import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #4728c9;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #4728c9;
      border-radius: 35px;
    }
  }
`;

interface Props {
  setSearchQuery: (arg: any) => void;
}

const SearchBar = ({ setSearchQuery }: Props) => {
  return (
    <form>
      <CustomBorderTextField
        id="search-bar"
        className={'search_bar'}
        onInput={(e: any) => {
          setSearchQuery(e.target.value);
        }}
        label="Envoyer à"
        variant="outlined"
        placeholder="Tapez le nom de la personne"
        style={{ width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
