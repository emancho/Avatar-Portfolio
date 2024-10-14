import React, {useState} from 'react';
// components
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DragII from './DragII';
import MultiActionAreaCard from './MultiActionAreaCard';

export default function DrawContainer({ w, h, maxWidth }){
    const [drawLines, setDrawLines] = useState([]);

    // Reset function to clear lines
    const handleReset = () => {
        setDrawLines([]); // Clear all lines
    };

    return (
        <>
            <MultiActionAreaCard
                content={<DragII lines={drawLines} width={w} height={h} setLines={setDrawLines}></DragII>}
                button={
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleReset}>
                        Clear
                    </Button>
                }
                maxWidth={maxWidth}
                height={maxWidth + 25}    
            />
        </>

    );
}