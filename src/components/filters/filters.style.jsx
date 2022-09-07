import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-left: 4%;
`
export const FiltersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .filter-value{
        padding: 0 8px;
        border-right: 0.5px solid lightgray;
    }
`

export const FilterSpan = styled.div`
    font-weight: bold;
`
