"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import metricsData from '@/utils/metricsData';
import contractsData from '@/utils/contractsData';
import chartsData from '@/utils/chartsData';
import LineChart from '@/components/LineChart';
import ChartEvents from '@/components/ChartEvents';
import Header from '@/components/Header';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/outline';
import DateTabs from '@/components/DateTabs';
import Link from 'next/link';


const RootLayout = dynamic(() => import('@/app/layout'), { ssr: false });

const metrics = metricsData.data.data;
const contracts = contractsData.data;

export default function Boards() {
  const jsonData = chartsData;
  const chartData = jsonData.map((chart, index) => ({
    id: `Event-${index}` + ` [${chart.data.metadata['A: Transfer ERC-20'].operation}]`,
    data: Object.entries(chart.data.series['A: Transfer ERC-20']).map(([timestamp, value]) => ({
      x: new Date(parseInt(timestamp)),
      y: value,
    })),
  }));

  const dataSourceItens = [
    {
      id: 1,
      name: "Cool NFT Collection Name",
      image: "/img/cool_nft_name.png",
    },
    {
      id: 2,
      name: "Rumble Kong",
      image: "/img/rumble_kong.png",
    },
    {
      id: 3,
      name: "Punks2023",
      image: "/img/punks2023.png",
    },
  ];

  return (
    <RootLayout>
      <>
        <div className="flex flex-col h-screen">
          <Header></Header>
          <main className="flex-1 overflow-y-auto">
            <div className="flex h-full">
              <div className="w-1/5 bg-neutral-100 max-w-4xl py-6 sm:px-2 lg:px-2 h-full border-r border-gray-300">
                <div className="w-full px-4">
                  <div className="mx-auto w-full max-w-md rounded-2xl p-2">
                    <Disclosure defaultOpen>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-bold text-1 tracking-tight text-gray-900">
                            <span className="text-gray-900 text-md font-inter font-semibold leading-5 break-all">Data Source</span>
                            <ChevronDownIcon
                              className={`${open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-gray-900`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm rounded-lg bg-white shadow py-2 text-gray-500">
                            <div>
                              {dataSourceItens.map(item => (
                                <div key={item.id} className="flex items-center mt-2">
                                  <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500 rounded-sm" />
                                    <span className="ml-2 text-gray-900">
                                      <div className="flex items-center">
                                        <img
                                          className="h-6 w-6 rounded-full border outline-2 border-gray-400"
                                          src={item.image}
                                          alt=""
                                        />
                                        <p className="text-gray-900 ml-2 font-inter text-xs">{item.name}</p>
                                      </div>
                                    </span>
                                  </label>
                                </div>
                              ))}
                            </div>
                            <hr className="my-4 border-t border-gray-300" />
                            <div className="flex items-center justify-center">
                              <Link href="#" className="text-gray-500 inline-flex items-center text-center hover:text-gray-900 transition duration-300">Add Another Source</Link>
                            </div>

                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <div className='mt-2'>
                      <Disclosure defaultOpen>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-bold text-1 tracking-tight text-gray-900  hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                              <span className="text-gray-900 text-md font-inter font-semibold leading-5 break-all">Metrics</span>
                              <PlusIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-900`}
                              />
                            </Disclosure.Button>
                            {metrics.map((metric) => (
                              <div className="mt-2" key={metric.id}>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md rounded-lg bg-white shadow py-2 text-gray-500 ">
                                  <div className="text-blue-600 text-xs font-medium font-inter leading-4">{metric.metric_display_name}</div>
                                  <span className="text-slate-500 text-xs font-medium font-inter leading-4">{metric.operations[6].operation_description} for HonToken (ERC20) on Avalanche C-Chain </span>
                                </Disclosure.Panel>
                              </div>
                            ))}
                          </>
                        )}
                      </Disclosure>
                    </div>

                    <div className='mt-2'>
                      <Disclosure >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-bold text-1 tracking-tight text-gray-900  hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                              <span className="text-gray-900 text-md font-inter font-semibold leading-5 break-all">Filter</span>
                              <PlusIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-900`}
                              />
                            </Disclosure.Button>

                            <div className='mt-2'>
                              <Disclosure.Panel className="px-4 pb-2 pt-4 text-md rounded-lg bg-white shadow py-2 text-gray-500 ">

                              </Disclosure.Panel>
                            </div>

                          </>
                        )}
                      </Disclosure>
                    </div>
                    <div className='mt-2'>
                      <Disclosure >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-bold text-1 tracking-tight text-gray-900  hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                              <span className="text-gray-900 text-md font-inter font-semibold leading-4 break-all">Breakdown</span>
                              <PlusIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-900`}
                              />
                            </Disclosure.Button>

                            <div className='mt-2'>
                              <Disclosure.Panel className="px-4 pb-2 pt-4 text-md rounded-lg bg-white shadow py-2 text-gray-500 ">

                              </Disclosure.Panel>
                            </div>

                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-4/5 py-6 lg:px-8 h-full">
                <div className='p-2'>
                  <DateTabs />
                </div>
                <div className='m-2'>
                  <div className="px-4 sm:px-0 border-b-[1px]">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Title</h3>
                    <p className="mt-1 mb-2 border-neutral-400 max-w-2xl text-sm leading-6 text-gray-500">You can identify your most engaged users by using cohorts.</p>
                  </div>
                </div>
                <div style={{ height: '400px' }} className='p-2'>
                  <LineChart data={chartData} />
                </div>
                <div><ChartEvents></ChartEvents></div>
              </div>
            </div>
          </main>
        </div>
      </>

    </RootLayout>
  )
}