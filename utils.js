function startCounting(targetElementId, targetNumber) {
    const count = new CountUp(targetElementId, targetNumber)
    if (!count.error) {
        count.start()
    } else {
        console.log(count.error)
    }
}

function redirectToURL(url) {
    window.open(url, '_blank')
}