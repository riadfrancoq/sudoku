export default function Square({
    params: { index, row, element },
}: {
    params: { index: number, row: number, element: number[] };
}) {

    return (
        <div>
        {element.map((e, i) => (
         <input className="w-10 h-10  border border-gray-300"/>
        
    ))}
    </div>
)
}
