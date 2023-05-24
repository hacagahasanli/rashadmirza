import { randomBadgeGenerator } from "utils"

export const Tags = () => {
    const tags = [
        '#Git Cheat Sheet',
        '#Git Commands',
        '#Git Commit',
        '#Git rebase ',
        '#Git merge ',
        '#Git Pull Request',
        '#Git for beginners'
    ]
    return (
        <div className="flex gap-2 flex-wrap ">
            {tags.map((tag: string, index: number) => {
                return <span key={tag + index} className={`inline-flex font-semibold rounded-md px-2 py-1 text-md ring-1 ring-inset ${randomBadgeGenerator()}`}>
                    {tag}
                </span>
            })}
        </div>
    )
}