import { BackgroundSvg, ContactForm, ContactInfo, ContactTitle } from "./ExtractedSections"


export const ContactSection = () => {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <BackgroundSvg />
            <div className="mx-auto max-w-xl lg:max-w-4xl lg:mt-24 sm:mt-6">
                <ContactTitle />
                <div className="mt-8 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <ContactForm />
                   <ContactInfo />
                </div>
            </div>
        </div>
    )
}