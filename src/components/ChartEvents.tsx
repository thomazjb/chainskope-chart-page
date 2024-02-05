import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

interface TableProps { }

const ChartEvents: React.FC<TableProps> = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState<boolean[]>(Array(2).fill(false));
    const [isTbodyVisible, setIsTbodyVisible] = useState(true); // State to manage tbody visibility

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setSelectedRows(Array(2).fill(newSelectAll));
    };

    const handleRowSelect = (index: number) => {
        const updatedRows = [...selectedRows];
        updatedRows[index] = !updatedRows[index];
        setSelectedRows(updatedRows);

        const allSelected = updatedRows.every((row) => row);
        setSelectAll(allSelected);
    };

    const handleToggleTbody = () => {
        setIsTbodyVisible((prevState) => !prevState);
    };

    return (
        <table className="border-collapse w-full mt-4 text-sm">
            <thead>
                <tr>
                    <th className="border-b border-neutral-300 font-medium text-left">
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span>
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    className="form-checkbox h-4 w-4 mr-2 text-blue-600 rounded-sm"
                                />
                                Events ({selectedRows.filter((row) => row).length})</span>
                            {isTbodyVisible ? (
                                <ChevronUpIcon className='h-5 w-5 ml-1 text-blue-800' onClick={handleToggleTbody} role="button" />
                            ) : (
                                <ChevronDownIcon className='h-5 w-5 ml-1 text-blue-800' onClick={handleToggleTbody} role="button" />
                            )}
                        </span>
                    </th>
                    {Array.from({ length: 10 }, (_, index) => (
                        <th key={index} className={`border-b border-neutral-300 font-medium text-right pr-2 ${index === 0 ? 'border-r' : ''}`}>
                            {index === 0 ? 'Average' : 'Jun ' + index}
                        </th>
                    ))}
                </tr>
            </thead>
            {isTbodyVisible && (
                <tbody>
                    {Array.from({ length: 2 }, (_, rowIndex) => (
                        <tr key={rowIndex} className="border-none">
                            <td className="">
                                <input
                                    type="checkbox"
                                    checked={selectedRows[rowIndex]}
                                    onChange={() => handleRowSelect(rowIndex)}
                                    className="form-checkbox h-4 w-4 text-blue-600 rounded-sm"
                                />
                                <span className="pl-2">Event-{rowIndex}</span>
                            </td>
                            {Array.from({ length: 10 }, (_, colIndex) => (
                                <td key={colIndex} className={`p-2 text-right ${colIndex === 0 ? 'border-r border-neutral-300' : ''}`}>
                                    {colIndex === 0 ? '500' : 'Col ' + colIndex}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            )}
        </table>
    );
};


export default ChartEvents;
