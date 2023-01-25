import { useState } from "react";
import { GanttChart as FinishedGanttChart, getColorFromString } from "@parssa/universal-ui";
import { GanttChart } from "components/GanttChart";
import { items } from "constants/index";

export const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-emerald-500',
  'bg-slate-500',
  'bg-purple-500'
]

export default function Home() {
  const [showFinalProduct, setShowFinalProduct] = useState(false);
  const [state, setState] = useState(getItemsWithColors());

  return (
    <>
      <main className="container min-h-screen pt-24 tracking-tight">
        <h1 className="text-3xl font-bold">Gantt Chart</h1>
        <div className="my-4 border border-purple-600 bg-purple-50 text-purple-800 p-2 rounded">
          <p className="font-semibold">Implement the Gantt Chart component.</p>
          <ul className="mt-0.5 list-disc list-inside">
            <li>Gantt Chart's display a list of items with a start and end date.</li>
            <li>Items are ordered by their start date.</li>
            <li>Items are displayed in a row.</li>
            <li>
              <span className="font-medium">Bonus:</span> Clicking on rows in the chart remove them
            </li>
          </ul>
          <button
            className="bg-white shadow rounded font-medium px-3 py-1 text-sm mt-2"
            onClick={() => setShowFinalProduct((prev) => !prev)}
          >
            {showFinalProduct ? "Hide" : "Show"} Final Product
          </button>
        </div>

        {showFinalProduct && <FinishedGanttChart defaultItems={items} />}
        <GanttChart 
          className="mt-4" 
          items={state}
          onItemClick={handleItemClick}
          style={{ width: '750px' }} />
      </main>
    </>
  );

  function getItemsWithColors(): ItemWithColor[] {
    return items.map((item, index) => {
      return {
        ...item,
        color: colors[index % 10]
      }
    })
  }

  function handleItemClick(name: string) {
    setState(state.filter(item => item.name !== name));
  }
}
