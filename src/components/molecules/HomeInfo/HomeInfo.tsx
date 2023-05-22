export const HomeInfo = () => {
    const texts = ['Hello,', 'I am Rashad a lead', 'senior developer from', 'Los Angeles']

    return (
        <div className="bg-[#111827] lg:h-calc-screen-minus-header w-full max-h-full">
            <div className="max-w-6xl mx-auto min-h-calc-screen-minus-header h-full flex items-center justify-between p-4 flex-wrap">
                <div className="lw-[420px] font-bold flex flex-col">
                    {texts.map((text) => <span className="text-[2.5rem] text-white" key={text}>{text}</span>)}
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-[1rem]"
                    >
                        Hire Me
                    </button>
                </div>
                {window.innerWidth > 728 && (
                    <div className="h-[300px] w-[270px] relative bg-[#fcfbfb] p-2 border-[.5rem] border-solid border-[#4f46e5] rounded-md">
                        <img className="absolute top-6 h-[300px]" src={"https://rashadmirza.com/images/slider-image.png"} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}