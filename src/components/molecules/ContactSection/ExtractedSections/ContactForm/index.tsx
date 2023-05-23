import { IContactInputs } from "../IExtractedSection"


export const ContactForm = () => {
    const inputs: IContactInputs[] = [
        {
            id: "first-name",
            name: "first-name",
            label: "First name",
            autoComplete: "given-name",
        },
        {
            id: "last-name",
            name: "last-name",
            label: "Last name",
            autoComplete: "family-name",
        },
        {
            id: "message",
            name: "message",
            label: "Message",
            extraClass: 'sm:col-span-2',
            rows: 4,
            defaultValue: ""
        }
    ]
    return (
        <form className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {inputs.map(({ id, label, type = "text", extraClass = "", rows, ...rest }: IContactInputs) => {
                    return (
                        <div className={extraClass}>
                            <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
                                {label}
                            </label>
                            <div className="mt-2.5">
                                {rows ? (
                                    <textarea
                                        {...{ id, rows, ...rest }}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                ) : (
                                    <input
                                        {...{ type, id }} {...rest}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Let's talk
                </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
                By submitting this form, I agree to the{' '}
                <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                </a>
                .
            </p>
        </form>
    )
}