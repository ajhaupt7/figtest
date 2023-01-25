import React from "react";
import { getNumericalDateValue } from "utils";
import { GanttItem } from "./GanttItem";

type DivProps = React.HTMLAttributes<HTMLDivElement>;



// You can use `getColorFromString` to get the colors for the Gantt Chart rows
export const GanttChart = ({
  items,
  onItemClick,
  ...props
}: DivProps & {
  items: ItemWithColor[];
  onItemClick: (name: string) => void;
  }) => {
  const sortedItems = items.sort((a, b) => {
    if (a.start === b.start) {
      return a.end > b.end ? 1 : -1
    }

    return a.start > b.start ? 1 : -1
  });
  const { min, max } = getMinMaxRange();

  return (
    <div 
      {...props}>
      <ul>
      {sortedItems.map((item, index) => <GanttItem 
        item={item} 
        max={max}
        min={min}
        onClick={(name: string) => onItemClick(name)} />)}
      </ul>
    </div>
  );
  
  function getMinMaxRange() {
    return items.reduce((acc, value) => {
      const start = getNumericalDateValue(value.start);
      const end = getNumericalDateValue(value.end);

      if (!acc.min || start < acc.min) {
        acc.min = start;
      }

      if (!acc.max || end > acc.max) {
        acc.max = end;
      }

      return acc;
    }, { min: null, max: null });
  }
};
