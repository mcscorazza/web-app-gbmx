import { ArrowDown, ArrowDownFromLine, ArrowUp, ArrowUpFromLine, Hash, LocateFixed } from 'lucide-react';
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <>
      <div className='grid w-full bg-slate-500 p-4' >
        <div className='grid grid-cols-[560px_minmax(500px,_1fr)] grid-rows-1 gap-3'>
          <div className="grid items-center">
            <div className='h-full bg-slate-600 rounded shadow p-2 text-slate-300'>
              <div className="container mx-auto p-4">
                <div className="mb-4">
                  <h2 className="text-2xl bg-slate-700 font-semibold p-2 rounded-md mb-2 w-full border border-slate-800 flex justify-center">Vagão de Monitoramento</h2>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Relatório:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          000001                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       ID Trem:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          HTT 98765-4                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Qtde vagões na composição:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          135 vgs                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       # Vagão de Monitoramento:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          02                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Início da Viagem:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          06.03.2024 08h57                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Conclusão da Viagem:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          08.03.2024 14h18                  </div>
                  </div>

                  <h2 className="text-2xl bg-slate-700 font-semibold p-2 rounded-md mt-6 mb-2 w-full border border-slate-800 flex justify-center">Condução do Trem</h2>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowUp />                      Máximo valor de Tração:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          50 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><LocateFixed />                      Localização:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          Batente Traseiro AE                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowDown />                      Máximo valor de Compressão:              </div>
                    <div className='font-light text-md text-red-300 font-mono'>          -150 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><LocateFixed />                     Localização:              </div>
                    <div className='font-light text-md text-red-300 font-mono'>          Viga Central Cab. B                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowUpFromLine />                      P95 Tração:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          50 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowDownFromLine />                      P95 Compressão:              </div>
                    <div className='font-light text-md text-red-300 font-mono'>          -80 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><Hash />                      Picos de Tração acima do P95:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          4                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><Hash />                      Picos de Compressão acima do p95:              </div>
                    <div className=' font-light text-md text-red-300 font-mono'>          2                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="grid h-full items-center grid-cols-4 grid-rows-[130px_280px_minmax(320px,_1fr)] gap-3 text-slate-300">
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>Tração</h1>
              <div className='flex flex-row w-full justify-around p-2 text-teal-300'>
                <ArrowUp className='border rounded-md bg-teal-900 border-teal-800 p-1' size="60" />
                <span className='text-5xl font-bold'>50 <small className='font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>Compressão</h1>
              <div className='flex flex-row w-full justify-around p-2 text-red-300'>
                <ArrowDown className='border rounded-md bg-red-900 border-red-800 p-1' size="60" />
                <span className='text-5xl font-bold'>-150 <small className='font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>95% Tração</h1>
              <div className='flex flex-row w-full justify-around p-2 text-teal-300'>
                <ArrowUpFromLine className='border rounded-md bg-teal-900 border-teal-800 p-1' size="60" />
                <span className='text-5xl font-bold'>40 <small className='font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>95% Compressão</h1>
              <div className='flex flex-row w-full justify-around p-2 text-red-300'>
                <ArrowDownFromLine className='border rounded-md bg-red-900 border-red-800 p-1' size="60" />
                <span className='text-5xl font-bold'>-80 <small className=' font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-600 rounded shadow p-1 col-span-2'>
              <div className='rounded-md w-full h-full  flex justify-between p-2 gap-1'>
                <img src="plot01.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
                <img src="plot02.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
              </div>

            </div>
            <div className='h-full bg-slate-600 rounded shadow p-1 col-span-2'>
              <div className='rounded-md w-full h-full  flex justify-between p-2 gap-1'>
                <img src="plot03.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
                <img src="plot04.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
              </div>

            </div>

            <div className='h-full bg-slate-600 rounded shadow p-2 col-span-4 overflow-hidden flex items-center justify-center'>
              <img src="map.jpg" alt="" className='h-full rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
