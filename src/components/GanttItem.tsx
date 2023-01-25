import { getNumericalDateValue } from "utils";

export const GanttItem = (
  { item, min, max, onClick }: 
  { item: ItemWithColor; min: number; max: number; onClick: (name: string) => void; }
) => {
  const start = getNumericalDateValue(item.start);
  const end = getNumericalDateValue(item.end);
  const totalRange = max - min;
  const dateRange = (end - start) / totalRange;
  const translate = (start - min) / totalRange;

  return (
    <li 
      onClick={() => onClick(item.name)}
      style={{ transform: `translateX(${(translate * 100)}%)`}}
      className="hover:bg-slate-100 cursor-pointer flex divide-x-4 mt-4" key={item.name}>
      <div style={{ width: `${dateRange * 100}%`}} className={`h-6 ${item.color} rounded-md`}></div>
      <span>{item.name}</span>
    </li>
  )
} 