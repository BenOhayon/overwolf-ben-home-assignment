
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            .container {
                box-sizing: border-box;
                width: 400px;
                min-height: 420px;
                padding: 48px 24px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 24px;
                background-color: var(--color-surface-primary);
            }
            
            #image {
                width: 112px;
                height: 112px;
                flex-shrink: 0;
                object-fit: cover;
            }
    
            .title {
                color: #FFF;
                font-size: 24px;
                font-weight: 700;
                line-height: 28px;
                text-align: center;
            }
    
            .content {
                color: var(--color-text-primary);
                font-family: Lato;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
                text-align: center;
            }

            @media screen and (width <= 685px) {
                .container {
                    width: calc(100vw - 40px);
                    margin: auto;
                }
            }
        </style>
        <div class="container">
            <lottie-player id="image" background="transparent" speed="1" loop hover></lottie-player>
            <h3 class="title"></h3>
            <div class="content"></div>
        </div>
    `
    
    class OverwolfAboutFeature extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.image = shadow.querySelector('#image')
            this.compTitle = shadow.querySelector('.title')
            this.compContent = shadow.querySelector('.content')
        }
    
        connectedCallback() {
            this.image.setAttribute("src", this.getAttribute('image-src'))
            this.compTitle.innerHTML = this.getAttribute('title')
            this.compContent.innerHTML = this.getAttribute('content')
        }
    }
    
    customElements.define("overwolf-about-feature", OverwolfAboutFeature)
})()