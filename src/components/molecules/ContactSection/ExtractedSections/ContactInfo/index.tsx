import { memo } from "react"

export const ContactInfo = memo(() => (
    <div className="lg:mt-6 lg:w-80 lg:flex-none">
        <img className="h-12 w-auto" src="https://rashadmirza.com/images/logo/logo-white.png" alt="" />
        <figure className="mt-10">
            <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
            </blockquote>
            <figcaption className="mt-10 flex gap-x-6">
                <img
                    src="https://rashadmirza.com/images/user/1.png"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                    <div className="text-base font-semibold text-gray-900">Rashad Mirza</div>
                    <div className="text-sm leading-6 text-gray-600">CTO of Sayt.az</div>
                </div>
            </figcaption>
        </figure>
    </div>
))