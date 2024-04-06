import Matrix from "./components/matrix";
import matrix from "./matrix";
export default function Sudoku() {

  return (
   <main className="grid grid-cols-3 w-max h-max border border-gray-950 gap-1">
    {matrix.map((e, i)=> {
      return <Matrix key={i}   params={{matrix: e, index: i}} />
    })}
   </main>
  );
}
