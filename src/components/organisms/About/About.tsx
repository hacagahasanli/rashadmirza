import { blog_gif } from "assets"
import { Footer, Header } from "components"

export const About = () => {
    const stats = [
        { label: 'Business was founded', value: '2012' },
        { label: 'People on the team', value: '120+' },
        { label: 'Users on the platform', value: '250k' },
        { label: 'Paid out to creators', value: '$70M' },
    ]
    return (
        <div>
            <Header />
            <div className="w-full h-full bg-white pb-12 font-bold">
                <div className="px-6 pt-10 lg:px-8 ">
                    <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Rashad Mirza</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-900">Lead senior developer, who spends his day by developing, tutoring and learning new languages</p>
                        <p className="mt-2 text-lg leading-8 text-gray-900"> Developing since 2004</p>
                    </div>
                </div>
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        {/* <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                    semper sed amet vitae sed turpis id.
                                </p>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                                    hac adipiscing egestas.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                                    voluptate.
                                </p>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                                    hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                </p>
                            </div>
                        </div> */}
                        <img className="w-[300px]" src={blog_gif} alt="blog_gif" />
                        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-gray-900/20 pl-6">
                                    <dt className="text-base leading-7 text-gray-900">{stat.label}</dt>
                                    <dd className="text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}