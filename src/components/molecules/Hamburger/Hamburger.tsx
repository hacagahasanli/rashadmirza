import { Dialog } from '@headlessui/react'
import { Navigations } from 'components'
import { useDispatch, useSelector } from 'react-redux';
import { openHamburger } from 'store';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { IHamburgerState } from './IHamburger';
import { INavigation } from 'interfaces';

export const Hamburger = ({ navigation }: { navigation: INavigation[] }) => {
    const dispatch = useDispatch()
    const { isOpenHamburger } = useSelector((state: IHamburgerState) => state.common)

    const closeHamburgerHandler = () => dispatch(openHamburger(false))

    return (
        <Dialog as="div" className="lg:hidden" open={isOpenHamburger} onClose={closeHamburgerHandler}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={closeHamburgerHandler}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <Navigations {...{ navigation }} mobile={true} />
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}