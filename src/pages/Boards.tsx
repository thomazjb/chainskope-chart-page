"use client"
import React from 'react';
import dynamic from 'next/dynamic'
import LineChart from '@/components/LineChart';
import  metricsData from '@/utils/metricsData' ;
import  contractsData from '@/utils/contractsData'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/24/outline'


const RootLayout = dynamic(() => import('@/app/layout'), { ssr: false })
const metrics = metricsData.data.data;
const contracts = contractsData.data;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Boards() {
  return (
    <RootLayout>

      <>
        <div className="flex flex-col h-screen">
          <header className="bg-white shadow z-9">
            <div className="mx-auto max-w-8xl px-4 py-3 sm:px-4 lg:px-4">
              <h1 className="text-1 font-bold tracking-tight text-gray-900">Untitled</h1>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">
            <div className="flex h-full">
              <div className="w-1/5 bg-neutral-50 max-w-4xl py-6 sm:px-2 lg:px-2 h-full">
                <div className="w-full px-4">
                  <div className="mx-auto w-full max-w-md rounded-2xl p-2">
                    <Disclosure defaultOpen>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-bold text-1 tracking-tight text-gray-900">
                            <span className="text-gray-900 text-lg font-inter font-semibold leading-5 break-all">Data Source</span>
                            <ChevronDownIcon
                              className={`${open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-gray-900`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm rounded-lg bg-white shadow py-2 text-gray-500">
                            <div className="flex items-center">
                              <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700" />
                                <span className="ml-2 text-gray-900">
                                  <div className="flex items-center">
                                    <img
                                      className="h-6 w-6 rounded-full border outline-2 border-gray-400"
                                      src='/img/cool_nft_name.png'
                                      alt=""
                                    />
                                    <p className="text-gray-900 ml-2 font-inter text-xs">Cool NFT Collection Name</p>
                                  </div></span>
                              </label>
                            </div>
                            <div className="flex items-center mt-2">
                              <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700" />
                                <span className="ml-2 text-gray-900">
                                  <div className="flex items-center">
                                    <img
                                      className="h-6 w-6 rounded-full border outline-2 border-gray-400"
                                      src='/img/rumble_kong.png'
                                      alt=""
                                    />
                                    <p className="text-gray-900 ml-2 font-inter text-xs">Rumble Kong</p>
                                  </div></span>
                              </label>
                            </div>
                            <div className="flex items-center mt-2">
                              <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700" />
                                <span className="ml-2 text-gray-900">
                                  <div className="flex items-center">
                                    <img
                                      className="h-6 w-6 rounded-full border outline-2 border-gray-400"
                                      src='/img/punks2023.png'
                                      alt=""
                                    />
                                    <p className="text-gray-900 ml-2 font-inter text-xs">Punks2023</p>
                                  </div></span>
                              </label>
                            </div>
                            <hr className="my-4 border-t border-gray-300" />
                            <div className="flex items-center justify-center">
                              <a href="#" className="text-gray-500 inline-flex items-center text-center hover:text-gray-900 transition duration-300">Add Another Source</a>
                            </div>

                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <div className='mt-2'>
                      <Disclosure defaultOpen>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-bold text-1 tracking-tight text-gray-900">
                              <span className="text-gray-900 text-lg font-inter font-semibold leading-5 break-all">Metrics</span>
                              <PlusIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                  } h-5 w-5 text-gray-900`}
                              />
                            </Disclosure.Button>
                            {metrics.map((metric) => (
                              <div className='mt-4'>
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
                  </div>
                </div>
              </div>
              <div className="w-4/5 max-w-7xl py-6 lg:px-8 h-full shadow">
                <h1>OPA</h1>
              </div>
            </div>
          </main>
        </div>
      </>

    </RootLayout>
  )
}