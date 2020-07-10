import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    GridItem,
    GridWrapper,
} from '@source/component/layout/grid.component.styles';

export type GridProps = CommonProps & {
    columns?: number;
    rows?: number;
    columnGap?: string;
    rowGap?: string;
    useColumnWrapper?: boolean;
    useRowWrapper?: boolean;
    useOuterGap?: boolean;
};

export const Grid: React.FC<GridProps> = (props) => {
    const { columns, rows, useColumnWrapper, useRowWrapper } = props;

    if (useRowWrapper && useColumnWrapper) {
        throw new Error('You can use only rowWrapper or columnWrapper');
    }

    const gridItems = React.Children.map(props.children, (child, i) => (
        <div key={i}>{child}</div>
    ));

    function* generateWrappedItems() {
        const wrappersCount = useColumnWrapper ? columns : rows;

        for (let i = 0; i < wrappersCount; i++) {
            yield (
                <div key={i}>
                    {gridItems
                        .filter(
                            (item, itemIndex) =>
                                itemIndex % wrappersCount === i,
                        )
                        .map((item) => (
                            <GridItem
                                key={item.key}
                                columnGap={props.columnGap}
                                rowGap={props.rowGap}
                                useColumnWrapper={props.useColumnWrapper}
                                useRowWrapper={props.useRowWrapper}
                            >
                                {item}
                            </GridItem>
                        ))}
                </div>
            );
        }
    }

    return (
        <GridWrapper
            id={props.id}
            style={props.style}
            className={props.className}
            columnGap={props.columnGap}
            rowGap={props.rowGap}
            useOuterGap={props.useOuterGap}
            columns={props.columns}
            rows={props.rows}
        >
            {useColumnWrapper || useRowWrapper
                ? Array.from(generateWrappedItems())
                : gridItems}
        </GridWrapper>
    );
};

Grid.defaultProps = {
    columnGap: '8px',
    rowGap: '8px',
};
