"use client";
import matrix from "../matrix";
import Square from "./square";
export default function Matrix({
    params: { matrix, index },
}: {
    params: { matrix: number[][], index: number };
}) {
    return (
        <div className="border border-gray-800">
            {matrix.map((e, i) => (
                <Square 
                 key={i}  params={{
                    element: e,
                    index: index,
                    row: i
                 }}  />
            ))}
        </div>
    );
};