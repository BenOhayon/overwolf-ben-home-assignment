
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            .overwolf-counter {
                width: 160px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: center;
                margin: auto;
            }

            .overwolf-counter-title {
                color: var(--color-text-brand-ow);
                font-size: 48px;
                font-weight: 700;
                line-height: 72px;
                display: flex;
                gap: 0;
                align-items: center;
            }
            
            .overwolf-counter-description {
                color: var(--color-text-primary);
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 1.2px;
                text-align: center;
                text-transform: uppercase;
            }

            @media screen and (width <= 685px) {
                .overwolf-counter {
                    width: unset;
                }

                .overwolf-counter-title {
                    font-size: 44px;
                    line-height: 52px;
                }
            }
        </style>
        <div class="overwolf-counter">
            <div class="overwolf-counter-title">
                <div class="overwolf-counter-title-number"></div>
                <div class="overwolf-counter-title-suffix"></div>
            </div>
            <div class="overwolf-counter-description"></div>
        </div>
    `
    
    class OverwolfCounter extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.titleNumber = shadow.querySelector('.overwolf-counter-title-number')
            this.titleSuffix = shadow.querySelector('.overwolf-counter-title-suffix')
            this.description = shadow.querySelector('.overwolf-counter-description')
        }
    
        connectedCallback() {
            const description = this.getAttribute('description')
            const suffix = this.getAttribute('suffix')
            this.titleSuffix.innerText = suffix
            this.description.innerText = description
        }
        
        startNumberAnimation() {
            const countTarget = this.getAttribute('count-target')
            if (![undefined, null].includes(countTarget)) {
                startCounting(this.titleNumber, countTarget)
            }
        }
    }
    
    customElements.define("overwolf-counter", OverwolfCounter)
})()