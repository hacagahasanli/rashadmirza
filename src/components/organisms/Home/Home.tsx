import { Header } from "components"

export const Home = () => {
    const texts = ['Hello,', 'I am Rashad a lead', 'senior developer', 'Los Angeles']
    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto h-calc-screen-minus-header flex items-center justify-between p-4 bg-[#ffffff]">
                <div className="w-[380px] font-bold flex flex-col">
                    {texts.map((text) => <span className="text-[2.5rem]">{text}</span>)}
                </div>
                <div className="w-[200px] flex">
                    <img src={"https://rashadmirza.com/images/slider-image.png"} alt="" />
                </div>
            </div>
        </div>
    )
}