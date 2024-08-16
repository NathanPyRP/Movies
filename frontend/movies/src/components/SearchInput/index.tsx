import React from "react";
import {
  SearchInputWrapper,
  Input,
  SearchIcon,
  SearchButton,
  FilterButtonWrapper,
  FilterButton,
  FilterIcon,
  FilterDropdown,
  FilterSection,
  FilterTitle,
  FilterOptions,
  FilterOption,
  DatePicker,
} from "./styles";
import { useFilterDropdownStore } from "../../store/filterDropdownStore";
import 'react-datepicker/dist/react-datepicker.css';


const SearchInput = () => {
  const { isFilterDropdownOpen, openFilterDropdown, closeFilterDropdown } =
    useFilterDropdownStore();

  const toggleFilter = () => {
    if (isFilterDropdownOpen) {
      closeFilterDropdown();
    } else {
      openFilterDropdown();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <SearchInputWrapper>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        <Input type="text" placeholder="Pesquisar..." />
        <FilterButtonWrapper>
          <FilterButton onClick={toggleFilter}>
            <FilterIcon />
          </FilterButton>
        </FilterButtonWrapper>
      </SearchInputWrapper>
      {isFilterDropdownOpen && (
        <FilterDropdown>
          <FilterSection>
            <FilterTitle>Gêneros cinematográficos</FilterTitle>
            <FilterOptions>
              <FilterOption>Ação</FilterOption>
              <FilterOption>Aventura</FilterOption>
              <FilterOption>Comédia</FilterOption>
              <FilterOption>Drama</FilterOption>
              <FilterOption>Ficção Científica</FilterOption>
              <FilterOption>Romance</FilterOption>
              <FilterOption>Terror</FilterOption>
              <FilterOption>Mostrar mais...</FilterOption>
            </FilterOptions>
          </FilterSection>
          <FilterSection>
            <FilterTitle>Data de lançamento</FilterTitle>
            <DatePicker>
              <input type="date" placeholder="00/00/0000" />
              <span>a</span>  {/* Modifiquei de <p> para <span> */}
              <input type="date" placeholder="00/00/0000" />
            </DatePicker>

          </FilterSection>
        </FilterDropdown>
      )}
    </div>
  );
};

export default SearchInput;
