import styled from 'styled-components';

const SearchContainer = styled.div`
  padding-top: 18px;
  padding-bottom: 96px;
`;

const Input = styled.input`
  padding: 10px 18px;
`;

const Button = styled.button`
  padding: 10px 18px;
`;

const SearchBar = ({ title, onChange, onClick }) => {
  return(
    <SearchContainer>
      <Input 
        type="text"
        placeholder="Search movies"
        value={title}
        onChange={onChange}
      /> 
      <Button onClick={() => onClick(title)}>Search</Button>
    </SearchContainer>
  );
}

export default SearchBar;