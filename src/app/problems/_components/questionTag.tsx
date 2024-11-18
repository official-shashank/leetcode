import React, { useState } from 'react';
import { Box, Button } from "@chakra-ui/react";
import "./style/questionTag.css";

export const CollapsibleBasic = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="name-container">
                <p className='name-item'>Array <span className='noQuestion'>1798</span></p>
                <p className='name-item'>String <span className='noQuestion'>1798</span></p>
                <p className='name-item'>Dynamic Programming <span className='noQuestion'>1798</span></p>
                <p className='name-item'>Math <span className='noQuestion'>1798</span></p>

                {/* Replace Collapsible with a simple conditional render */}
                {isOpen && (
                    <Box>
                        <p className='name-item'>Sorting <span className='noQuestion'>1798</span></p>
                        <p className='name-item'>Greedy <span className='noQuestion'>1798</span></p>
                        <p className='name-item'>Depth-First Search <span className='noQuestion'>1798</span></p>
                        <p className='name-item'>Database <span className='noQuestion'>1798</span></p>
                        <p className='name-item'>Binary Search <span className='noQuestion'>1798</span></p>
                    </Box>
                )}
                <Button className='collapseBtn' onClick={toggleCollapse}  paddingY="3">
                    {isOpen ? 'Collapse ▲' : 'Expand ▼'}
                </Button>
            </div>
        </>
    );
};
