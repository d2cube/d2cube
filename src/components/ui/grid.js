import React from 'react';
import {Element, useTheme} from 'uinix-ui';

const Grid = ({items, itemComponent: Item, size}) => {
  const theme = useTheme();
  const slotSize = theme.sizes.slot;
  const borderWidth = theme.spacings.xxs;
  const borderColor = theme.colors.interface.border;

  const styles = {
    grid: {
      backgroundColor: 'interface.grid',
      backgroundImage: `linear-gradient(to right, ${borderColor} ${borderWidth}, transparent ${borderWidth}),
    linear-gradient(to bottom, ${borderColor} ${borderWidth}, transparent ${borderWidth})`,
      backgroundSize: `${slotSize}px ${slotSize}px`,
      display: 'grid',
      gridTemplateColumns: `repeat(${size[1]}, ${slotSize}px)`,
      gridTemplateRows: `repeat(${size[0]}, ${slotSize}px)`,
      paddingBottom: borderWidth,
      paddingRight: borderWidth,
    },
    item: ({size, position}) => ({
      gridRowStart: position[1],
      gridRowEnd: position[1] + size[1],
      gridColumnStart: position[0],
      gridColumnEnd: position[0] + size[0],
    }),
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Element
      styles={styles.grid}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {items.map((item) => (
        <Element
          key={item.id}
          styleProps={{
            position: item.position,
            size: item.size,
          }}
          styles={styles.item}
        >
          <Item item={item} />
        </Element>
      ))}
    </Element>
  );
};

export default Grid;
