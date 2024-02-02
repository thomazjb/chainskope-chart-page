"use client";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, Cog8ToothIcon, QuestionMarkCircleIcon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Fragment, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navigation = [
  { name: 'Boards', href: '/Boards' },
  { name: 'Reports', href: '/Reports' },
];
type MenuItem = {
  text?: string;
  href?: string;
  isDivider?: boolean;
};

const menuItems: MenuItem[] = [
  { text: 'Organization Settings', href: '/Boards' },
  { text: 'Project Settings', href: '/Boards' },
  { text: 'Personal Settings', href: '/Boards' },
  { isDivider: true },
  { text: 'Shortcuts', href: '/Boards' },
  { text: 'Data Sources', href: '/Boards' },
  { text: 'Plan details and billing', href: '/Boards' },
  { text: 'Invite users', href: '/Boards' },
  { isDivider: true },
  { text: 'Log out', href: '/Boards' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {


  const pathname = usePathname();
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-primary z-10">
      {({ open }) => (
        <>
          <div className="mx-1 max-w-12xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                  <svg className="h-8 w-auto" width="66" height="30" viewBox="0 0 66 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.59724 19.4614L5.05548 21.0032C4.85252 21.2061 4.85252 21.5352 5.05548 21.7382L6.59724 23.2799C6.8002 23.4829 7.12926 23.4829 7.33222 23.2799L8.87397 21.7382C9.07693 21.5352 9.07693 21.2061 8.87397 21.0032L7.33221 19.4614C7.12926 19.2585 6.80019 19.2585 6.59724 19.4614Z" fill="white" />
                    <path d="M23.88 6.53118L22.3382 8.07294C22.1352 8.2759 22.1352 8.60496 22.3382 8.80792L23.88 10.3497C24.0829 10.5526 24.412 10.5526 24.6149 10.3497L26.1567 8.80792C26.3596 8.60496 26.3596 8.2759 26.1567 8.07294L24.6149 6.53118C24.412 6.32822 24.0829 6.32822 23.88 6.53118Z" fill="white" />
                    <path d="M41.2071 19.6277L39.6653 21.1694C39.4624 21.3724 39.4624 21.7015 39.6653 21.9044L41.2071 23.4462C41.4101 23.6491 41.7391 23.6491 41.9421 23.4462L43.4838 21.9044C43.6868 21.7015 43.6868 21.3724 43.4838 21.1694L41.9421 19.6277C41.7391 19.4247 41.4101 19.4247 41.2071 19.6277Z" fill="white" />
                    <path d="M58.0343 6.63573L56.4925 8.17749C56.2895 8.38045 56.2895 8.70951 56.4925 8.91247L58.0342 10.4542C58.2372 10.6572 58.5663 10.6572 58.7692 10.4542L60.311 8.91247C60.5139 8.70951 60.5139 8.38045 60.311 8.1775L58.7692 6.63573C58.5663 6.43278 58.2372 6.43277 58.0343 6.63573Z" fill="white" />
                    <path d="M23.7031 7.72492L6.37256 20.8176L7.45281 22.2475L24.7833 9.15483L23.7031 7.72492Z" fill="white" />
                    <path d="M58.5064 7.55649L41.1782 20.6522L42.2587 22.0819L59.587 8.98622L58.5064 7.55649Z" fill="white" />
                    <path d="M24.4111 7.55592L23.3311 8.98602L40.6638 22.0757L41.7439 20.6456L24.4111 7.55592Z" fill="white" />
                    <path d="M64.2528 3.92402L59.4739 1.17615C59.1421 0.982484 58.7648 0.880432 58.3807 0.880432C57.9965 0.880432 57.6193 0.982484 57.2875 1.17615L52.5086 3.92402C52.1786 4.11664 51.9046 4.39216 51.7139 4.72327C51.5232 5.05438 51.4224 5.42959 51.4214 5.81169V11.3074C51.4212 11.4683 51.4393 11.6286 51.4751 11.7853L53.2135 10.4711V5.81169C53.2136 5.74334 53.2313 5.67616 53.2647 5.61655C53.2982 5.55695 53.3463 5.50691 53.4046 5.4712L58.1835 2.72332C58.2445 2.69189 58.3121 2.67549 58.3807 2.67549C58.4493 2.67549 58.5169 2.69189 58.5778 2.72332L63.3567 5.4712C63.4157 5.50661 63.4648 5.55643 63.4993 5.61599C63.5337 5.67554 63.5525 5.74289 63.5539 5.81169V11.3074C63.5543 11.3766 63.5363 11.4446 63.5016 11.5045C63.4669 11.5644 63.4169 11.6139 63.3567 11.6479L58.5778 14.3958C58.5181 14.431 58.45 14.4496 58.3807 14.4496C58.3113 14.4496 58.2433 14.431 58.1835 14.3958L55.7941 13.0219L54.2409 14.2166L57.2815 15.9729C57.6139 16.1648 57.9909 16.2658 58.3747 16.2658C58.7585 16.2658 59.1355 16.1648 59.4679 15.9729L64.2468 13.225C64.5792 13.0331 64.8552 12.757 65.0471 12.4246C65.239 12.0922 65.34 11.7152 65.34 11.3313V5.83559C65.3444 5.4492 65.2461 5.06859 65.055 4.7327C64.864 4.39682 64.5871 4.11773 64.2528 3.92402Z" fill="white" />
                    <path d="M24.2475 2.55598C24.317 2.55538 24.3852 2.57399 24.4447 2.60975L29.2236 5.35762C29.2838 5.39167 29.3338 5.44119 29.3685 5.50105C29.4031 5.56091 29.4212 5.62895 29.4207 5.69812V10.5726L31.1053 11.845C31.1739 11.6346 31.2101 11.4151 31.2128 11.1939V5.71604C31.2129 5.33222 31.1118 4.95515 30.9199 4.62275C30.7281 4.29034 30.452 4.0143 30.1196 3.82239L25.3407 1.07452C25.0091 0.883734 24.6332 0.783325 24.2505 0.783325C23.8679 0.783325 23.492 0.883734 23.1603 1.07452L18.3814 3.82239C18.0524 4.01656 17.7799 4.29357 17.5913 4.62582C17.4026 4.95807 17.3043 5.33397 17.3062 5.71604V11.2118C17.3083 11.3482 17.3223 11.4841 17.348 11.618L19.0983 10.2918V5.71604C19.0933 5.64506 19.108 5.5741 19.1407 5.51089C19.1733 5.44768 19.2227 5.39466 19.2835 5.35762L24.0624 2.60975C24.1189 2.57722 24.1824 2.55878 24.2475 2.55598Z" fill="white" />
                    <path d="M26.6664 12.998L24.4442 14.2823C24.3846 14.3147 24.3179 14.3317 24.2501 14.3317C24.1823 14.3317 24.1155 14.3147 24.0559 14.2823L21.6127 12.8845L20.0596 14.0792L23.1599 15.8713C23.4911 16.0632 23.8672 16.1643 24.2501 16.1643C24.6329 16.1643 25.009 16.0632 25.3403 15.8713L28.2435 14.1688L26.6664 12.998Z" fill="white" />
                    <path d="M12.1145 20.0529V24.1269C12.1139 24.195 12.0954 24.2618 12.0608 24.3206C12.0262 24.3793 11.9767 24.4279 11.9174 24.4614L7.1385 27.2093C7.07917 27.2475 7.01056 27.2687 6.94004 27.2708C6.86953 27.2729 6.79977 27.2558 6.73827 27.2212L1.95935 24.4734C1.90073 24.4395 1.85214 24.3907 1.81855 24.3319C1.78497 24.2732 1.76759 24.2065 1.7682 24.1388V18.6431C1.76652 18.5744 1.78339 18.5065 1.81703 18.4466C1.85067 18.3867 1.89983 18.3369 1.95935 18.3026L6.73827 15.5547C6.798 15.5195 6.86607 15.501 6.9354 15.501C7.00473 15.501 7.0728 15.5195 7.13253 15.5547L9.95209 17.1795L11.5052 15.9848L8.05247 13.9836C7.71971 13.7929 7.34284 13.6926 6.95929 13.6926C6.57575 13.6926 6.19888 13.7929 5.86612 13.9836L1.0872 16.7315C0.756323 16.9246 0.481828 17.2011 0.291072 17.5334C0.100316 17.8656 -4.03964e-05 18.242 7.68697e-07 18.6252V24.1209C-0.000323176 24.5078 0.101746 24.8879 0.295844 25.2226C0.489941 25.5573 0.769153 25.8346 1.10512 26.0265L5.88404 28.7744C6.2164 28.9663 6.59343 29.0673 6.97721 29.0673C7.361 29.0673 7.73802 28.9663 8.07039 28.7744L12.8493 26.0265C13.176 25.8282 13.4453 25.5481 13.6307 25.214C13.8161 24.8798 13.9112 24.5031 13.9066 24.1209V18.6909L12.1145 20.0529Z" fill="white" />
                    <path d="M47.4246 16.8987L42.6456 14.1448C42.3144 13.9529 41.9383 13.8518 41.5555 13.8518C41.1726 13.8518 40.7965 13.9529 40.4653 14.1448L36.8811 16.2177L38.4342 17.4124L41.3852 15.698C41.4457 15.6654 41.5136 15.6489 41.5823 15.6502C41.6512 15.6475 41.7195 15.664 41.7795 15.698L46.5584 18.4459C46.6174 18.4813 46.6664 18.5311 46.7009 18.5907C46.7354 18.6502 46.7542 18.7176 46.7555 18.7864V24.2821C46.756 24.3513 46.7379 24.4193 46.7033 24.4792C46.6686 24.539 46.6186 24.5886 46.5584 24.6226L41.7795 27.3705C41.7209 27.4058 41.6537 27.4244 41.5853 27.4244C41.5169 27.4244 41.4498 27.4058 41.3912 27.3705L36.6123 24.6226C36.5521 24.5886 36.502 24.539 36.4674 24.4792C36.4327 24.4193 36.4147 24.3513 36.4151 24.2821V20.3694L34.623 19.0134V24.2821C34.623 24.6659 34.724 25.043 34.9159 25.3754C35.1078 25.7078 35.3838 25.9839 35.7162 26.1758L40.4951 28.9236C40.8264 29.1156 41.2025 29.2167 41.5853 29.2167C41.9682 29.2167 42.3443 29.1156 42.6755 28.9236L47.4544 26.1758C47.7868 25.9839 48.0628 25.7078 48.2547 25.3754C48.4466 25.043 48.5476 24.6659 48.5476 24.2821V18.7864C48.5442 18.4005 48.4384 18.0224 48.2411 17.6908C48.0438 17.3591 47.7621 17.0858 47.4246 16.8987Z" fill="white" />
                  </svg>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        onClick={() => router.push(item.href)}
                        className={classNames(
                          pathname === item.href ? 'bg-transparent border-white border text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        <>
                          <div className="flex items-center">
                            <span className="mr-1">{item.name}</span>
                            {item.name === 'Reports' && (
                              <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </>

                      </Link>
                    ))}

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-1">

                <button
                  type="button"
                  className="relative text-white hover:text-white-400 focus:outline-none"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Help</span>
                  <QuestionMarkCircleIcon className="h-6 w-6 m-2" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="relative text-white hover:text-white-400 focus:outline-none"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Configurations</span>
                  <Cog8ToothIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-md bg-transparent text-sm font-medium">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-full"
                          src='/img/thomaz_profile.png'
                          alt=""
                        />
                        <span className="text-white ml-2">Thomaz Boncompagni</span>
                        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {menuItems.map((item, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <>
                              {item.isDivider ? (
                                <hr className="my-1 border-t border-neutral-300" />
                              ) : (
                                <Link href={item.href || '#'}>
                                  <Link
                                    href=""
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-neutral-800'
                                    )}
                                  >
                                    {item.text}
                                  </Link>
                                </Link>
                              )}
                            </>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}