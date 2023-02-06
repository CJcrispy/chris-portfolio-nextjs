import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterIcon,
  CursorArrowRaysIcon,
  MoonIcon,
  SunIcon,
  Squares2X2Icon,
  XMarkIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import userData from "../constant/data";
import { useTheme } from 'next-themes';
import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';

const solutions = [
  {
    name: 'About',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/about',
    icon: UserIcon,
  },
  {
    name: 'Projects',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/projects',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Experience',
    description: "Connect with third-party tools that you're already using.",
    href: '/experience',
    icon: Squares2X2Icon,
  },
  {
    name: 'Contact',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '/contact',
    icon: ChatBubbleBottomCenterIcon,
  },
]

function Navbar() {

	const [active, setActive] = useState(false)
	const {systemTheme, theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false); 

	const handleClick = () => {
		setActive(!active)
	}

	useEffect(() => {
	setMounted(true);
	}, []); 

	const renderThemeChanger = () => { 
	if (!mounted) return null;

	const currentTheme = theme === 'system'? systemTheme : theme; 
		if (currentTheme === 'dark') {
		return (
			<SunIcon className="w-7 h-7 text-blue-500"
			role="button"
			onClick={() => setTheme('Light')}
			/>

		);
		}else {
		return (
			<MoonIcon
			className="w-7 h-7 text-blue-500"
			role="button"
			onClick={() => setTheme('dark')}
			/>
		);
		}
	};
	
  return (
    <Popover className="relative ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* Header */}
            <div className="flex flex-col justify-center items-center flex-shrink-0">
              <Link href="/">
                <a>
                <h1 className="font-semibold text-xl">
                  {userData.name}<span className="text-blue-500"> {userData.lastName}</span>
                </h1>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {userData.designation}
                </p>
                </a>
              </Link>
            </div>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
              </Link>
              <Link href="/projects">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Projects
              </a>
              </Link>
              <Link href="/experience">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Experience
              </a>
              </Link>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {renderThemeChanger()}

            </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a>
                    <h1 className="font-semibold text-xl">
                      {userData.name}<span className="text-blue-500"> {userData.lastName}</span>
                    </h1>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      {userData.designation}
                    </p>
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">

              <div >
			          {renderThemeChanger()}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar;