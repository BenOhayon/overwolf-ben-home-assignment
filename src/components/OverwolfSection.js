
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            .overwolf-section {
                width: 100vw;
                display: flex;
                flex-direction: column;
                gap: 48px;
            }

            .overwolf-section.has-bg {
                position: relative;
            }

            .overwolf-section-title {
                font-size: 44px;
                font-weight: 700;
                color: var(--color-text-pure);
                text-align: center;
            }

            .overwolf-section-content {
                width: 90vw;
                max-width: 1396px;
                margin: auto;
            }

            .overwolf-section.has-bg > .overwolf-section-content {
                position: absolute;
                inset: 0;
                margin: auto;
                z-index: 20;
            }
                
            .overwolf-section-image {
                width: 50%;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                z-index: 10;
            }

            @media screen and (width <= 685px) {
                .overwolf-section:not(.stretch) {
                    width: calc(100vw - 40px);
                    margin: auto;
                }

                .overwolf-section.has-bg > .overwolf-section-image {
                    position: static;
                    width: 100%;
                }

                .overwolf-section.has-bg > .overwolf-section-content {
                    position: static;
                }

                .overwolf-section-title {
                    font-size: 32px;
                }
            }
        </style>
        <section class="overwolf-section">
            <div class="overwolf-section-title"></div>
            <div class="overwolf-section-content">
                <slot></slot>
            </div>
            <img class="overwolf-section-image" alt="section background image" />
        </section
    `
    
    class OverwolfSection extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.section = shadow.querySelector('.overwolf-section')
            this.sectionContent = shadow.querySelector('.overwolf-section-content')
            this.sectionImage = shadow.querySelector('.overwolf-section-image')
            this.sectionTitle = shadow.querySelector('.overwolf-section-title')
        }
    
        connectedCallback() {
            const isHero = this.getAttribute('hero')
            const sectionTitle = this.getAttribute('section-title')
            const backgroundImageUrl = this.getAttribute('background-image')
            const isLimitedContent = this.getAttribute('limited')
            const backgroundColor = this.getAttribute('bg-color')
            const padding = this.getAttribute('padding')
            const stretch = this.getAttribute('stretch')

            if (stretch) {
                this.section.classList.add('stretch')
            }
            
            if (backgroundColor) {
                this.section.style.backgroundColor = backgroundColor
            }

            if (padding) {
                this.section.style.padding = padding
            }

            if (isHero !== null) {
                this.section.style.minHeight = 'calc(100dvh - 80px - 170px)'
            }

            if (sectionTitle) {
                this.sectionTitle.innerText = sectionTitle
            } else {
                this.sectionTitle.remove()
            }

            if (backgroundImageUrl) {
                this.section.classList.add('has-bg')
                this.sectionImage.src = backgroundImageUrl
            } else {
                this.sectionImage.remove()
            }

            if (isLimitedContent) {
                this.sectionContent.style.maxWidth = 'unset'
                this.sectionContent.style.margin = 0
            }
        }
    }
    
    customElements.define("overwolf-section", OverwolfSection)
})()