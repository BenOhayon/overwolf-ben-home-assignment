
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            .overwolf-button.stretch {
                width: calc(100% - 10%);
                margin-inline: 5%;
            }

            .overwolf-button {
                box-sizing: border-box;
                padding: 11px 24px;
                width: fit-content;
                font-family: Montserrat;
                background-color: black;
                color: var(--color-surface-invert);
                font-size: 16px;
                font-weight: 500;
                border-color: var(--color-text-primary);
                transition: all 300ms ease-out;
                cursor: pointer;
            }
        </style>
        <button class="overwolf-button">
            <slot></slot>
        </button
    `
    
    class OverwolfButton extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.button = shadow.querySelector('.overwolf-button')
        }
    
        connectedCallback() {
            const color = this.getAttribute('color')
            const borderColor = this.getAttribute('border-color')
            const backgroundColor = this.getAttribute('bg-color')
            const hoverBackgroundColor = this.getAttribute('hover-bg-color')
            const hoverColor = this.getAttribute('hover-color')
            const stretch = this.getAttribute('stretch')
            const applyStretchInMobile = this.getAttribute('apply-stretch-in-mobile')

            if (![undefined, null].includes(stretch) || ![undefined, null].includes(applyStretchInMobile)) {
                const resizeObserver = new ResizeObserver(() => {
                    if (document.body.clientWidth <= OVERWOLF_MOBILE_THRESHOLD) {
                        if (applyStretchInMobile === 'true') {
                            this.style.width = '100%'
                            this.button.classList.add('stretch')
                        } else {
                            this.button.classList.remove('stretch')
                        }
                    } else {
                        if (stretch === 'true') {
                            this.style.width = '100%'
                            this.button.classList.add('stretch')
                        } else {
                            this.button.classList.remove('stretch')
                        }
                    }
                })
                resizeObserver.observe(document.querySelector('main'))
            }

            

            if (backgroundColor) {
                this.button.style.backgroundColor = backgroundColor
            }

            if (color) {
                this.button.style.color = color
            }

            if (borderColor) {
                this.button.style.border = `1px solid ${borderColor}`
            }

            this.button.addEventListener('mouseover', () => {
                this.button.style.color = hoverColor ?? (color ?? 'black')
                this.button.style.backgroundColor = hoverBackgroundColor ?? (backgroundColor ?? 'var(--color-text-pure)')
            })
            this.button.addEventListener('mouseout', () => {
                this.button.style.color = color ?? 'var(--color-text-pure)'
                this.button.style.backgroundColor = backgroundColor ?? 'black'
            })
        }
    }
    
    customElements.define("overwolf-button", OverwolfButton)
})()