AOS.init()
const aboutData = [
    {
        src: "./assets/lottie-jsons/swords.json",
        title: "Legendary Apps",
        content: "Create powerful desktop apps and overlays for AAA games, using basic HTML and Javascript"
    },
    {
        src: "./assets/lottie-jsons/anvil.json",
        title: "Legandary Mods",
        content: "Create, manage and monetize mods for AAA games, exposing them to millions of gamers"
    },
    {
        src: "./assets/lottie-jsons/server.json",
        title: "Legandary Servers",
        content: "Create in-game stores, sell goods to your gamers and grow your player base through our tools & server list"
    },
    {
        src: "./assets/lottie-jsons/megaphone.json",
        title: "Legandary Ads",
        content: "Supercharge your website with ads, and get faster payments, customer service, and ad load time"
    },
    {
        src: "./assets/lottie-jsons/crystals.json",
        title: "Legandary Funds",
        content: "Overwolf's creator fund is a $50M fund dedicated to supporting game studios, developers and creators"
    }
]

const countersData = [
    {
        countTarget: 15,
        suffix: 'B',
        description: "Yealy Downloads"
    },
    {
        countTarget: 100,
        suffix: 'M',
        description: "Monthly Active Gamers"
    },
    {
        countTarget: 178,
        suffix: 'K',
        description: "In-Game Creators"
    },
    {
        countTarget: 1500,
        suffix: '+',
        description: "Games Supported"
    }
]

const fullSuiteData = [
    {
        src: `<svg>
                <use href="#tools" />
            </svg>`,
        title: "Developer SDK",
        content: "Integrate various features such as overlays and real-time alerts"
    },
    {
        src: `<svg>
                <use href="#games" />
            </svg>`,
        title: "Game Event API",
        content: "Create apps that respond to in-game actions & events"
    },
    {
        src: `<svg>
                <use href="#profit" />
            </svg>`,
        title: "Monetization Tools",
        content: "Turn your app into revenue through ads & subscriptions"
    }
]

const successStoriesData = [
    {
        imageSrc: `./assets/images/slide-1${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-1-icon.png",
        title: "RuneMaster",
        content: "RuneMaster predicts your opponent's rune choices based on historical patterns and recommends the best counter-runes and champion strategies to outplay them right from the start."
    },
    {
        imageSrc: `./assets/images/slide-2${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-2-icon.png",
        title: "ChampionSync",
        content: "ChampionSync analyzes your past matches and suggests champions that perfectly sync with your playstyle. It also suggests teammates that complement your team composition, boosting your synergy in ranked games."
    },
    {
        imageSrc: `./assets/images/slide-3${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-3-icon.png",
        title: "Pathfinder",
        content: "Pathfinder tracks enemy junglers in real-time by analyzing map patterns, predicting ganks before they happen, and offering optimal warding positions to keep your team safe."
    },
    {
        imageSrc: `./assets/images/slide-4${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-4-icon.png",
        title: "RuneMaster",
        content: "RuneMaster predicts your opponent's rune choices based on historical patterns and recommends the best counter-runes and champion strategies to outplay them right from the start."
    },
    {
        imageSrc: `./assets/images/slide-5${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-5-icon.png",
        title: "ChampionSync",
        content: "ChampionSync analyzes your past matches and suggests champions that perfectly sync with your playstyle. It also suggests teammates that complement your team composition, boosting your synergy in ranked games."
    },
    {
        imageSrc: `./assets/images/slide-6${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-6-icon.png",
        title: "Pathfinder",
        content: "Pathfinder tracks enemy junglers in real-time by analyzing map patterns, predicting ganks before they happen, and offering optimal warding positions to keep your team safe."
    },
    {
        imageSrc: `./assets/images/slide-7${isMobile ? "-mobile" : ""}.png`,
        iconSrc: "./assets/images/slide-7-icon.png",
        title: "RuneMaster",
        content: "RuneMaster predicts your opponent's rune choices based on historical patterns and recommends the best counter-runes and champion strategies to outplay them right from the start."
    }
]

const main = document.querySelector('main')
const header = document.querySelector('header')
const countersSection = document.querySelector('#counters-section')
const aboutSectionContentEl = document.querySelector('.about-overwolf')
const countersContentEl = document.querySelector('.counters')
const fullSuiteContentEl = document.querySelector('.overwolf-full-suite')
const successStoriesSlider = document.querySelector('overwolf-slider')
const heroArrowButton = document.querySelector('.hero-down-arrow-container')
const backToTopButton = document.querySelector('.back-to-top-button')
const headerJoinButton = document.querySelector('.header-join-button')
const heroJoinButton = document.querySelector('.hero-join-button')

window.addEventListener('scroll', () => {
    header.style.backgroundColor = window.scrollY === 0 ? '#000000' : '#000000aa'
})

headerJoinButton.addEventListener('click', () => {
    redirectToURL('https://discord.com/invite/overwolf-developers')
})

heroJoinButton.addEventListener('click', () => {
    redirectToURL('https://discord.com/invite/overwolf-developers')
})

heroArrowButton.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about')
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 })
})

aboutData.forEach(aboutObj => {
    const aboutEl = document.createElement('overwolf-about-feature')
    aboutEl.setAttribute("image-src", aboutObj.src)
    aboutEl.setAttribute("title", aboutObj.title)
    aboutEl.setAttribute("content", aboutObj.content)
    aboutSectionContentEl.appendChild(aboutEl)
})

countersData.forEach(counterObj => {
    const counterEl = document.createElement('overwolf-counter')
    counterEl.setAttribute("count-target", counterObj.countTarget)
    counterEl.setAttribute("suffix", counterObj.suffix)
    counterEl.setAttribute("description", counterObj.description)
    countersSection.addEventListener('transitionend', () => counterEl.startNumberAnimation())
    countersContentEl.appendChild(counterEl)
})

fullSuiteData.forEach(fullSuiteObj => {
    const fullSuiteEl = document.createElement('overwolf-full-suite-feature')
    fullSuiteEl.setAttribute('title', fullSuiteObj.title)
    fullSuiteEl.setAttribute('content', fullSuiteObj.content)
    fullSuiteEl.innerHTML = fullSuiteObj.src
    fullSuiteContentEl.appendChild(fullSuiteEl)
})

successStoriesData.forEach(successStoryObj => {
    const successStoryEl = document.createElement('overwolf-success-story-item')
    successStoryEl.setAttribute('image-src', successStoryObj.imageSrc)
    successStoryEl.setAttribute('icon-src', successStoryObj.iconSrc)
    successStoryEl.setAttribute('title', successStoryObj.title)
    successStoryEl.setAttribute('content', successStoryObj.content)
    successStoriesSlider.appendChild(successStoryEl)
})

const resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth <= OVERWOLF_MOBILE_THRESHOLD) {
        countersContentEl.style.gridTemplateColumns = `repeat(2, ${(countersContentEl.innerWidth - `${countersContentEl.style.gap}px`) / 2})`
    }
})

resizeObserver.observe(main)