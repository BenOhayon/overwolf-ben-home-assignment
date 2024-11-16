
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            .overwolf-slider-item {
                width: 400px;
                display: flex;
                flex-direction: column;
                gap: 40px;
                align-items: start;
            }

            .overwolf-slider-item:last-child {
                padding-right: 20px;
            }
                
            .overwolf-slider-item-image {
                width: 100%;
                aspect-ratio: 1.2;
                flex-shrink: 0;
                object-fit: cover;
                border-radius: 10px;
            }

            .overwolf-slider-item-content {
                display: flex;
                flex-direction: column;
                gap: 16px;
                align-items: start;
            }

            .overwolf-slider-item-title-container {
                width: 100%;
                display: flex;
                gap: 16px;
                align-items: center;
            }

            .overwolf-slider-item-title-icon {
                width: 50px;
                height: 50px;
                flex-shrink: 0;
            }

            .overwolf-slider-item-title {
                color: var(--color-text-pure);
                font-size: 24px;
                font-weight: 700;
            }

            .overwolf-slider-item-content {
                font-family: Lato;
                color: #9f9f9f;
                font-size: 16px;
                font-weight: 400;
            }
                
            @media screen and (width <= 685px) {
                .overwolf-slider-item {
                    width: calc(100vw - 30px);
                    margin: auto;
                    padding-inline: 15px;
                    padding-bottom: 120px;
                }

                .overwolf-slider-item-image {
                    aspect-ratio: 1;
                }

                .overwolf-slider-item:last-child {
                    padding-right: 15px;
                }
            }
        </style>
        <div class="overwolf-slider-item">
            <img class="overwolf-slider-item-image" alt="success story main image" />
            <div class="overwolf-slider-item-content">
                <div class="overwolf-slider-item-title-container">
                    <img class="overwolf-slider-item-title-icon" alt="success story icon" />
                    <div class="overwolf-slider-item-title"></div>
                </div>
                <div class="overwolf-slider-item-content-text"></div>
            </div>
        </div>
    `
    
    class OverwolfSuccessStoryItem extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.image = shadow.querySelector('.overwolf-slider-item-image')
            this.itemIcon = shadow.querySelector('.overwolf-slider-item-title-icon')
            this.itemTitle = shadow.querySelector('.overwolf-slider-item-title')
            this.itemContent = shadow.querySelector('.overwolf-slider-item-content-text')
        }
    
        connectedCallback() {
            this.image.src = this.getAttribute('image-src')
            this.itemIcon.src = this.getAttribute('icon-src')
            this.itemTitle.innerHTML = this.getAttribute('title')
            this.itemContent.innerHTML = this.getAttribute('content')
        }
    }
    
    customElements.define("overwolf-success-story-item", OverwolfSuccessStoryItem)
})()