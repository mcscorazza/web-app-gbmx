import { ArrowDown, ArrowDownFromLine, ArrowUp, ArrowUpFromLine } from 'lucide-react';
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <>
      <div className='grid w-full bg-slate-500 p-4' >
        <div className='grid grid-cols-[500px_minmax(500px,_1fr)] grid-rows-1 gap-3'>
          <div className="grid items-center">
            <div className='h-full bg-slate-600 rounded shadow p-2 text-slate-300'>
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Relatório de Viagem </h1>
                <div className="mb-4">
                  <h2 className="text-2xl bg-slate-700 font-semibold p-2 rounded-md mb-2 w-full border border-slate-800 flex justify-center">Vagão de Monitoramento</h2>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                       Relatório:              </div>
                    <div className='font-light text-xl text-teal-300'>          123456                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                       ID Trem:              </div>
                    <div className='font-light text-xl text-teal-300'>          HTT 98765-4                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                       Qtde vagões na composição:              </div>
                    <div className='font-light text-xl text-teal-300'>          135 vgs                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                       # Vagão de Monitoramento:              </div>
                    <div className='font-light text-xl text-teal-300'>          02                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                       Início da Viagem:              </div>
                    <div className='font-light text-xl text-teal-300'>          06.03.2024 08h57                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                       Conclusão da Viagem:              </div>
                    <div className='font-light text-xl text-teal-300'>          08.03.2024 14h18                  </div>
                  </div>

                  <h2 className="text-2xl bg-slate-700 font-semibold p-2 rounded-md mt-6 mb-2 w-full border border-slate-800 flex justify-center">Condução do Trem</h2>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      Máximo valor de Tração:              </div>
                    <div className='font-light text-xl text-cyan-300'>          50 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      Localização:              </div>
                    <div className='font-light text-xl text-cyan-300'>          Batente Traseiro AE                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      Máximo valor de Compressão:              </div>
                    <div className='font-light text-xl text-red-300'>          -150 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                     Localização:              </div>
                    <div className='font-light text-xl text-red-300'>          Viga Central Cab. B                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      P95 Tração:              </div>
                    <div className='font-light text-xl text-cyan-300'>          50 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      P95 Compressão:              </div>
                    <div className='font-light text-xl text-cyan-300'>          -80 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      Picos de Tração acima do P95:              </div>
                    <div className='font-light text-xl text-cyan-300'>          4                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-lg'>                      Picos de Compressão acima do p95:              </div>
                    <div className=' font-light text-xl text-red-300'>          2                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="grid h-full items-center grid-cols-4 grid-rows-[140px_minmax(200px,_1fr)_480px] gap-3 text-slate-300">
            <div className='h-full bg-teal-950 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>Tração</h1>
              <div className='flex flex-row w-full justify-around p-2 text-teal-300'>
                <ArrowUp  className='border rounded-md bg-teal-900 border-teal-800' size="50" />
                <span className='text-4xl font-semibold'>50 [tf]</span>
              </div>
            </div>
            <div className='h-full bg-red-950 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>Compressão</h1>
              <div className='flex flex-row w-full justify-around p-2 text-red-300'>
                <ArrowDown className='border rounded-md bg-red-900 border-red-800' size="50" />
                <span className='text-4xl font-semibold'>-150 [tf]</span>
              </div>
            </div>
            <div className='h-full bg-teal-950 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>95% Tração</h1>
              <div className='flex flex-row w-full justify-around p-2 text-teal-300'>
                <ArrowUpFromLine  className='border rounded-md bg-teal-900 border-teal-800' size="50" />
                <span className='text-4xl font-semibold'>40 [tf]</span>
              </div>
            </div>
            <div className='h-full bg-red-950 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>95% Compressão</h1>
              <div className='flex flex-row w-full justify-around p-2 text-red-300'>
                <ArrowDownFromLine className='border rounded-md bg-red-900 border-red-800' size="50" />
                <span className='text-4xl font-semibold'>-80 [tf]</span>
              </div>
            </div>
            <div className='h-full bg-slate-600 rounded shadow p-2 col-span-2'></div>
            <div className='h-full bg-slate-600 rounded shadow p-2 col-span-2'></div>
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
