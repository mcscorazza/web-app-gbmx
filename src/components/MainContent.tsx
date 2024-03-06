import { ArrowDownFromLine, ArrowUpFromLine } from 'lucide-react';
import React from 'react';

const MainContent: React.FC = () => {
    // Sample data for the table
    const tableData = [
        { id: 1, name: 'John Doe', age: 30, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
        { id: 3, name: 'Tom Brown', age: 35, city: 'Chicago' },
    ];
    return (
        <>
            <div className='grid w-full bg-slate-200 p-4' >
                <div className='grid grid-cols-[500px_minmax(600px,_1fr)] grid-rows-1 gap-3'>
                    <div className="grid items-center">
                        <div className='h-full bg-zinc-50 rounded shadow p-2'>
                            <div className="container mx-auto p-4">
                                <h1 className="text-2xl font-bold mb-4">Summary Page</h1>

                                {/* Summary section */}
                                <div className="mb-4">
                                    <h2 className="text-lg font-semibold mb-2">Summary</h2>
                                    {/* Add summary components here */}
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum orci quis leo feugiat, at euismod velit venenatis. Integer convallis eleifend arcu, nec aliquet elit.</p>
                                </div>

                                {/* Add table component here */}
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 bg-gray-200 border border-gray-300">ID</th>
                                            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Name</th>
                                            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Age</th>
                                            <th className="px-4 py-2 bg-gray-200 border border-gray-300">City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((row) => (
                                            <tr key={row.id}>
                                                <td className="px-4 py-2 border border-gray-300">{row.id}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.name}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.age}</td>
                                                <td className="px-4 py-2 border border-gray-300">{row.city}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Charts section */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">Charts</h2>
                                    {/* Add chart components here */}
                                    <div className="bg-gray-200 h-full flex items-center justify-center">
                                        <p className="text-gray-500">Chart Area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid h-full items-center grid-cols-4 grid-rows-[120px_minmax(200px,_1fr)_200px] gap-3">
                        <div className='h-full bg-zinc-50 rounded shadow p-2'>
                            <h1  className='text-2xl w-full text-center mb-2 font-bold'>Tração</h1>
                            <div className='flex flex-row w-full justify-around p-2'>
                                <ArrowUpFromLine size="40" color="green" />
                                <span className='text-3xl'>50 [tf]</span>
                                <ArrowDownFromLine  size="40" color="red" />
                                <span className='text-3xl'>8 [tf]</span>
                            </div>
                        </div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2'>
                        <h1  className='text-2xl w-full text-center mb-2 font-bold'>Compressão</h1>
                            <div className='flex flex-row w-full justify-around p-2'>
                                <ArrowUpFromLine size="40" color="green" />
                                <span className='text-3xl'>-5 [tf]</span>
                                <ArrowDownFromLine  size="40" color="red" />
                                <span className='text-3xl'>-8 [tf]</span>
                            </div>
                        </div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2'>
                        <h1  className='text-2xl w-full text-center mb-2 font-bold'>95% Tração</h1>
                            <div className='flex flex-row w-full justify-around p-2'>
                                <ArrowUpFromLine size="40" color="green" />
                                <span className='text-3xl'>85 [tf]</span>
                                <ArrowDownFromLine  size="40" color="red" />
                                <span className='text-3xl'>88 [tf]</span>
                            </div>
                        </div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2'>
                        <h1  className='text-2xl w-full text-center mb-2 font-bold'>95% Compressão</h1>
                            <div className='flex flex-row w-full justify-around p-2'>
                                <ArrowUpFromLine size="40" color="green" />
                                <span className='text-3xl'>-8 [tf]</span>
                                <ArrowDownFromLine  size="40" color="red" />
                                <span className='text-3xl'>-8.3 [tf]</span>
                            </div>
                        </div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2 col-span-3 overflow-hidden flex items-center justify-center'>
                            <img src="map.webp" alt="" className='h-full rounded-md' />
                        </div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2'>G</div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2 col-span-2'>H</div>
                        <div className='h-full bg-zinc-50 rounded shadow p-2 col-span-2'>I</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;
