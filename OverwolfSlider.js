
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            *::-webkit-scrollbar {
                display: none;
            }
            
            * {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }

            .overwolf-slider-container {
                width: 100vw;
                overflow-x: hidden;
                position: relative;
                color: var(--color-text-pure);
            }

            .overwolf-slider {
                box-sizing: border-box;
                height: fit-content;
                display: flex;
                gap: 24px;
                flex-wrap: nowrap;
                overflow-x: auto;
                padding-left: 260px;
                scroll-behavior: smooth;
            }

            .overwolf-slider-arrow {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                padding: 7px;
                background-color: #303030;
                cursor: pointer;
                transition: all 250ms ease-out;
            }

            .overwolf-slider-arrow:hover {
                /* translate: 0 -5px;
                box-shadow: 0 0 5px 1px #cccccc; */
                scale: 1.3;
            }

            .overwolf-slider-forward-arrow {
                right: 5px;
            }

            .overwolf-slider-backward-arrow {
                left: 5px;
            }

            @media screen and (width <= 685px) {
                .overwolf-slider-arrow {
                    top: initial;
                    bottom: 5px;
                }

                .overwolf-slider {
                    padding-left: 0;
                    gap: 20px;
                }
            }
        </style>
        <div class="overwolf-slider-container">
            <svg class="overwolf-slider-forward-arrow overwolf-slider-arrow" style="rotate: 180deg;">
                <symbol id="sliderArrow" viewBox="0 0 24 25">
                    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M17.4286 3.82603L16 2.39746L6 12.3975L7.42857 13.826L7.42859 13.826L16.0001 22.3976L17.4287 20.969L8.85716 12.3974L17.4286 3.82603Z" fill="currentcolor"/>
                </symbol>
                <use href="#sliderArrow" />
            </svg>
            <svg class="overwolf-slider-backward-arrow overwolf-slider-arrow">
                <symbol id="sliderArrow" viewBox="0 0 24 25">
                    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M17.4286 3.82603L16 2.39746L6 12.3975L7.42857 13.826L7.42859 13.826L16.0001 22.3976L17.4287 20.969L8.85716 12.3974L17.4286 3.82603Z" fill="currentcolor"/>
                </symbol>
                <use href="#sliderArrow" />
            </svg>
            <div class="overwolf-slider">
                <slot></slot>
            </div>
        </div>
    `
    
    class OverwolfSlider extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.slider = shadow.querySelector('.overwolf-slider')
            this.forwardButton = shadow.querySelector('.overwolf-slider-forward-arrow')
            this.backwardButton = shadow.querySelector('.overwolf-slider-backward-arrow')
            
            if (isMobile) {
                this.itemsGapPx = 20
                this.slidingDeltaX = window.innerWidth + this.itemsGapPx
            } else {
                this.slidingDeltaX = 400
                this.itemsGapPx = this.slider.style.gap
            }
        }

        checkForSlideDelta() {
            if (window.innerWidth <= OVERWOLF_MOBILE_THRESHOLD) {
                this.itemsGapPx = 20
                this.slidingDeltaX = window.innerWidth + this.itemsGapPx
            } else {
                this.slidingDeltaX = 400
                this.itemsGapPx = this.slider.style.gap
            }
        }
    
        connectedCallback() {
            this.forwardButton.addEventListener('click', () => {
                this.slider.scrollTo({
                    left: this.slider.scrollLeft + this.slidingDeltaX,
                    behavior: 'smooth'
                })
            })
            
            this.backwardButton.addEventListener('click', () => {
                this.slider.scrollTo({
                    left: this.slider.scrollLeft - this.slidingDeltaX,
                    behavior: 'smooth'
                })
            })

            const resizeObserver = new ResizeObserver(() => {
                this.checkForSlideDelta()
            })
            resizeObserver.observe(this.slider)
        }
    }
    
    customElements.define("overwolf-slider", OverwolfSlider)
})()