import { badgeColors } from "../../constants/PostRelated"

export const randomBadgeGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 7)
    const colors =  badgeColors[randomNumber]
    return colors;
}