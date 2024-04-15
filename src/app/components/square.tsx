import { useState } from "react";
import matrix from "../matrix";
export default function Square({
    params: { index, row, element },
}: {
    params: { index: number, row: number, element: number[] };
}) {
    const [values, setValues] = useState(Array(element.length).fill(""));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const userInput: number = parseInt(e.target.value);
        console.log(userInput);
        if ( isNaN(userInput))  {
            const newValues = [...values];
            newValues[i] = '';
            setValues(newValues);
            return;

        }
        let pointer: number = index;
        let verPointer: number = index;

        if (verPointer === 0 || verPointer === 1 || verPointer === 2) {
            verPointer = index;
        } else if (verPointer === 3 || verPointer === 6 ) {
            verPointer = 0;
        } else if (verPointer === 4 || verPointer === 7) {
            verPointer = 1;
        }  else if (verPointer === 5 || verPointer === 8) {
            verPointer = 2;
        }

        if (pointer  % 3 === 0 ) {

            pointer = index;
        } else if (pointer === 8) {
                pointer = 6;
        } else {
            pointer -= pointer % 3;
        }
        
        let exists: boolean = false;
        if (isNaN(userInput)) {
            return;
        }
        for ( let a = 0; a < matrix.length; a++) {

            if (a === index) {
                for ( let j = 0; j < 3; j++) {

                    if (userInput === matrix[a][j][0] || userInput === matrix[a][j][1] || userInput === matrix[a][j][2]) {
                        exists = true;
                        break;
                 }

                }

                for (let b = 0; b < 3; b++) {

                   for ( let k = 0; k < 3; k++) {
                    if ( userInput === matrix[pointer][row][k] || 
                        userInput === matrix[verPointer][k][i]) {
                    console.log(verPointer, row, index, pointer, i, k)

                        exists = true;
                        
                        break;
                    }
                   }
                   pointer ++;
                   verPointer += 3;
                }
        }
        }
        if (exists === false) { 
        matrix[index][row][i] = userInput;
            const newValues = [...values];
            newValues[i] = userInput;
            setValues(newValues);
        } else {

        }

    };

    return (
        <div>
        {element.map((e, i) => (
         <input type="number" key={i} className="w-10 h-10  border border-gray-300"  min={1} max={9} value ={values[i]} 

         onChange={(e) => handleInputChange(e, i)}
         />
        
    ))}
    </div>
)
}
