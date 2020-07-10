import styled from 'styled-components';

export type GridWrapperProps = {
    columns: number;
    rows: number;
    columnGap: string;
    rowGap: string;
    useOuterGap: boolean;
};

export const GridWrapper = styled.div<GridWrapperProps>`
    display: grid;
    box-sizing: border-box;
    column-gap: ${({ columnGap }) => columnGap};
    row-gap: ${({ rowGap }) => rowGap};
    margin: ${({ useOuterGap, rowGap, columnGap }) =>
        useOuterGap ? `${rowGap} ${columnGap}` : 'none'};
    grid-template-columns: ${({ columns, columnGap }) =>
        !!columns
            ? `repeat(${columns}, calc(${
                  100 / columns
              }% - ${columnGap} / ${columns} * ${columns - 1}))`
            : 'none'};
    grid-template-rows: ${({ rows, rowGap }) =>
        !!rows
            ? `repeat(${rows}, calc(${100 / rows}% - ${rowGap} / ${rows} * ${
                  rows - 1
              }))`
            : 'none'};
`;

export type GridItemProps = {
    useColumnWrapper: boolean;
    useRowWrapper: boolean;
    columnGap: string;
    rowGap: string;
};

export const GridItem = styled.div<GridItemProps>`
    margin-top: ${({ useColumnWrapper, rowGap }) =>
        useColumnWrapper ? rowGap : 0};
    margin-left: ${({ useRowWrapper, columnGap }) =>
        useRowWrapper ? columnGap : 0};
    &:first-child {
        margin: 0;
    }
`;
