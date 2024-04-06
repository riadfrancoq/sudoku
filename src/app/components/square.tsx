import { useState } from "react";
import matrix from "../matrix";
export default function Square({
    params: { index, row, element },
}: {
    params: { index: number, row: number, element: number[] };
}) {
    const [values, setValues] = useState(Array(element.length).fill(""));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        let exists: boolean = false;
        const userInput: number = parseInt(e.target.value);
        for ( let a = 0; a < matrix.length; a++) {
            if (a = index) {
                for ( let j = 0; j < 3; j++) {

                    if (userInput === matrix[a][j][0] || userInput === matrix[a][j][1] || userInput === matrix[a][j][2]) {
                        exists = true;
                        break;
                 }

                }
        }
        }
        if (exists === false) { 
        matrix[index][row][i] = userInput;
            console.log(matrix);
            const newValues = [...values];
            newValues[i] = userInput;
            setValues(newValues);
        } else {

        }

    };

    return (
        <div>
        {element.map((e, i) => (
         <input type="number" key={i} className="w-10 h-10  border border-gray-300" min={1} max={9} value ={values[i]} 

         onChange={(e) => handleInputChange(e, i)}
         />
        
    ))}
    </div>
)
}
