import { IBlogPosts } from "interfaces";

export const posts:any = [
    {
        "id": 1,
        "title": "Whispering Shadows",
        "description": "Whispering Shadows is a gripping thriller that unravels the dark secrets of a small town.",
        "date": "Last updated 2 years ago"
    },
    {
        "id": 2,
        "title": "Crimson Reflections",
        "description": "Crimson Reflections takes you on an emotional journey through the life of Sarah, a talented artist haunted by her past.",
        "date": "Updated 2 weeks ago"
    },
    {
        "id": 3,
        "title": "Luminary Dreams",
        "description": "Luminary Dreams transports you to a futuristic world where dreams are the currency of power. In a society divided by dreamers and non-dreamers, young protagonist.",
        "date": "Last updated 1 year ago"
    },
    {
        "id": 4,
        "title": "Midnight Serenade",
        "description": "Midnight Serenade is a captivating love story set in the enchanting city of Paris. Follow the lives of Gabriel and Isabelle as their paths intertwine under the moonlit streets.",
        "date": "Updated 5 days ago"
    },
    {
        "id": 5,
        "title": "Ember's Embrace",
        "description": "Ember's Embrace is an epic fantasy tale that transports you to a world of magic and destiny. Join Ember, a young sorceress with a powerful gift, on her quest to unite the fractured realms and restore balance to a war-torn land.",
        "date": "Last updated 3 months ago"
    },
    {
        "id": 6,
        "title": "Celestial Harmony",
        "description": "Celestial Harmony is a mesmerizing symphony of science and spirituality. Journey through the cosmos as Dr. Michael Adams unravels the mysteries of the universe and discovers the interconnectedness of all things.",
        "date": "Updated 2 weeks ago"
    },
    {
        "id": 7,
        "title": "Eternal Whispers",
        "description": "Eternal Whispers weaves a tale of timeless love and undying devotion. Follow Sophia and Sebastian as they navigate the complexities of an unbreakable bond that transcends time itself.",
        "date": "Last updated 6 months ago"
    },
    {
        "id": 8,
        "title": "Mystic Rhapsody",
        "description": "Mystic Rhapsody invites you into a world where magic and music entwine. Journey alongside Melody, a gifted musician, as she unlocks the power of ancient melodies and embarks on a quest to restore harmony to a realm ravaged by discord.",
        "date": "Updated 2 weeks ago"
    },
    {
        "id": 9,
        "title": "Cerulean Chronicles",
        "description": "Cerulean Chronicles immerses you in a fantastical realm where sky pirates rule the skies and ancient secrets lie buried in forgotten ruins. Join Captain Arden and her intrepid crew as they embark on a high-flying adventure to reclaim.",
        "date": "Last updated 3 weeks ago"
    },
    {
        "id": 10,
        "title": "Echoes of Eternity",
        "description": "Echoes of Eternity follows the journey of Emily, a young archaeologist on a quest to unravel the mysteries of an ancient civilization.",
        "date": "Updated 1 month ago"
    }
]

export const postDetails = [
    {
        "id": 1,
        "title": "Whispering Shadows",
        "description": "Whispering Shadows is a gripping thriller that unravels the dark secrets of a small town.",
        "detailedInformation": "What is Browser Testing?\n\nBrowser testing ensures that a website or web application works as expected in a given browser.\nWe use tools like Selenium or PhantomJS to simulate users' actions inside the browser.\n\nWhat is Browser Testing Pros?\n\n- Simulates exactly how a user would interact with the application.\n- Confidence that the application is working end-to-end.\n\nWhat is Browser Testing Cons?\n\n- If you need to execute JavaScript, you need to introduce a new tool to your stack, like Selenium or PhantomJS.\n- Can often break due to UI changes.\n- Can't interact with code directly; needs to make assertions through the UI.\n- Browser Testing is slower.\n",
        "date": "Last updated 2 years ago"
    },
    {
        "id": 2,
        "title": "Crimson Reflections",
        "description": "Crimson Reflections takes you on an emotional journey through the life of Sarah, a talented artist haunted by her past.",
        "detailedInformation": "What is Endpoint Testing?\n\nIn Endpoint testing, we are making HTTP requests directly to an endpoint.\nInstead of how the user would interact with our app, endpoint testing simulates how the browser would interact with our server.\n\nWhat is Endpoint Testing Pros?\n\n- Doesn't require additional tools.\n- Can interact directly with code, more flexible assertions.\n- Won't break due to the UI changes. More stable.\n\nWhat is Endpoint Testing Cons?\n\n- Will give us an untested gap between the front-end and back-end.\n\nWhich One Should I Use?\n\nIt will always depend on your situation and what you expect from your tests.\nBut, considering both testing methods' pros and cons, I should admit that, Endpoint testing seems to be the winner here!\nEndpoint testing is faster, reliable, simple, and gives you confidence!",
        "date": "Updated 2 weeks ago"
    },
    {
        "id": 3,
        "title": "Luminary Dreams",
        "description": "Luminary Dreams transports you to a futuristic world where dreams are the currency of power. In a society divided by dreamers and non-dreamers, young protagonist.",
        "detailedInformation": "Additional detailed information for post with id 3 goes here...",
        "date": "Last updated 1 year ago"
    },
    {
        "id": 4,
        "title": "Midnight Serenade",
        "description": "Midnight Serenade is a captivating love story set in the enchanting city of Paris. Follow the lives of Gabriel and Isabelle as their paths intertwine under the moonlit streets.",
        "detailedInformation": "Additional detailed information for post with id 4 goes here...",
        "date": "Updated 5 days ago"
    },
    {
        "id": 5,
        "title": "Ember's Embrace",
        "description": "Ember's Embrace is an epic fantasy tale that transports you to a world of magic and destiny. Join Ember, a young sorceress with a powerful gift, on her quest to unite the fractured realms and restore balance to a war-torn land.",
        "detailedInformation": "Additional detailed information for post with id 5 goes here...",
        "date": "Last updated 3 months ago"
    },
    {
        "id": 6,
        "title": "Celestial Harmony",
        "description": "Celestial Harmony is a mesmerizing symphony of science and spirituality. Journey through the cosmos as Dr. Michael Adams unravels the mysteries of the universe and discovers the interconnectedness of all things.",
        "detailedInformation": "Additional detailed information for post with id 6 goes here...",
        "date": "Updated 2 weeks ago"
    },
    {
        "id": 7,
        "title": "Eternal Whispers",
        "description": "Eternal Whispers weaves a tale of timeless love and undying devotion. Follow Sophia and Sebastian as they navigate the complexities of an unbreakable bond that transcends time itself.",
        "detailedInformation": "Additional detailed information for post with id 7 goes here...",
        "date": "Last updated 6 months ago"
    },
    {
        "id": 8,
        "title": "Mystic Rhapsody",
        "description": "Mystic Rhapsody invites you into a world where magic and music entwine. Journey alongside Melody, a gifted musician, as she unlocks the power of ancient melodies and embarks on a quest to restore harmony to a realm ravaged by discord.",
        "detailedInformation": "Additional detailed information for post with id 8 goes here...",
        "date": "Updated 2 weeks ago"
    },
    {
        "id": 9,
        "title": "Cerulean Chronicles",
        "description": "Cerulean Chronicles immerses you in a fantastical realm where sky pirates rule the skies and ancient secrets lie buried in forgotten ruins. Join Captain Arden and her intrepid crew as they embark on a high-flying adventure to reclaim.",
        "detailedInformation": "Additional detailed information for post with id 9 goes here...",
        "date": "Last updated 3 weeks ago"
    },
    {
        "id": 10,
        "title": "Echoes of Eternity",
        "description": "Echoes of Eternity follows the journey of Emily, a young archaeologist on a quest to unravel the mysteries of an ancient civilization.",
        "detailedInformation": "Additional detailed information for post with id 10 goes here...",
        "date": "Updated 1 month ago"
    }
]