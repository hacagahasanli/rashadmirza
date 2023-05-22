import { Bars3Icon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { openHamburger } from 'store';

export const MainMenu = () => {
    const dispatch = useDispatch()

    return (
        <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => dispatch(openHamburger(true))}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}