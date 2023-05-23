interface IStat {
    label: string
    value: string
}

export const Stats = () => {
    const stats: IStat[] = [
        { label: 'I love coding more than money, I write code because I love', value: '' },
        { label: 'Project completed in 6 countries', value: '170+' },
        { label: 'Students from all over the world', value: '5,000+' },
        { label: 'Achieved Daily Organic traffic', value: '300,000' },
    ]
    return (
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map(({ label, value }: IStat, statIdx: number) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-gray-300/20 pl-6">
                    <dt className="text-base leading-7 text-gray-300">{label}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-gray-300">{value}</dd>
                </div>
            ))}
        </dl>
    )
}