
(() => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            .container {
                box-sizing: border-box;
                width: 400px;
                padding: 48px;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 24px;
                background-color: var(--color-surface-primary);
                transition: all 300ms ease-out;
            }

            .container:hover {
                translate: 0 -10px;
            }

            .container-titles {
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: start;
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
            }

            ::slotted(*) {
                width: 40px;
                height: 40px;
                color: var(--color-text-pure);
            }

            @media screen and (width <= 685px) {
                .container {
                    width: calc(100vw - 40px);
                    margin: auto;
                }
            }
        </style>
        <div class="container">
            <slot></slot>
            <div class="container-titles">
                <h3 class="title"></h3>
                <div class="content"></div>
            </div>
        </div>
    `
    
    class OverwolfFullSuiteFeature extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))
            this.compTitle = shadow.querySelector('.title')
            this.compContent = shadow.querySelector('.content')
        }
    
        connectedCallback() {
            this.compTitle.innerHTML = this.getAttribute('title')
            this.compContent.innerHTML = this.getAttribute('content')
        }
    }
    
    customElements.define("overwolf-full-suite-feature", OverwolfFullSuiteFeature)
})()