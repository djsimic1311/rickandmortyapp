import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: .5rem;
`

export const CharacterCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  border: 1px solid #a8a8a8;
  padding: .5rem;
  border-radius: 6px;
  h2 {
    font-size: 2rem;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
  }
  cursor: pointer;
`

export const SearchInput = styled.input`
  font-size: 1.1rem;
  padding: .5rem;
  border: 1px solid #a8a8a8;
  border-radius: 6px;
`