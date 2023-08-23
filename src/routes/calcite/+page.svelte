<!-- importing font -->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />

<script type="text/javascript">
    // document.getElementById("myButton").onclick = function () {
    //     location.href = "www.yoursite.com";
    // };

    // https://www.npmjs.com/package/svelte-routing
</script>

<div class="page"> 
    <header>
        <div class=logo> 
            <a href="/">
                <button class="home-button"> <img src="/images/esri-logo.svg" alt=""/> </button>
            </a>
            <div class="title-text"> Intern Blog </div>
        </div>
        <div class="links">
            <a class="link-align" href="https://storymaps.arcgis.com/stories/69e37ee9b86748c1bfbd3b017b592db0" target="_blank" rel="noreferrer noopener">
                <img class="img" height= 10% src="/images/storymap.svg" alt=""/>
                <span>Storymap</span>
            </a>

            <a class= "link-align" href="https://www.linkedin.com/in/rafa-mondal-4a8899221/" target="_blank" rel="noreferrer noopener">
                <img class="img" src="/images/linkedin.svg" alt=""/>
                <span>LinkedIn</span>
            </a>
        </div>
    </header>
    <div class="body">
        <div class='md-text'> Overview</div>
        <div class='sm-text'>The goal for this project was to build a framework-agnostic package that supports the ArcGIS authentication workflow for JavaScript and/or TypeScript web applications. My task was to research and create a prototype for “arcgis-account-manager-ui,” a web component that supports a UI implementation built in Calcite Components. </div>
        <div class='md-text'> Proof of Concept</div>
        <div class='sm-text'>My first task was to prove the concept that we can build web components dependent upon the Calcite Design System, more commonly known as Calcite Components, which supports all frameworks, including React. Calcite Components is built using <b>Stencil.js</b>, a “library for building reusable, scalable component libraries,” which seemed promising for creating a framework-agnostic web component. After compiling and presenting a research document, I was able to create two sample web components dependent upon Calcite:</div>
        <img class="img-small" src="/images/calcite-component.png" alt=""/>
        <div class='md-text'> Design Prototype</div>
        <div class='sm-text'>I then designed Figma protypes of the different components, which I have decided to sort into AccountTile, AccountManager, and AccountPreview. These components are based off the now deprecated Calcite-React components, and have configurable properties that are either unique to the new, more encompassing component, or are exposed from the existing calcite components they are dependent upon.</div>
        <img class="img" src="/images/calcite-overview.png" alt=""/>
        <div class='sm-text'>Special thanks to Brandon Lammey, Lillie Bahrami, and Josh Peterson!</div>
    </div>
    <footer>thank you for reading :)<br><br>contact: rafa.audrija.mondal@gmail.com</footer>
</div>


<style lang="scss">
    .page {
        position: absolute;
        width: (100% - 2rem);
        top: 0;
        left: 0;
        margin: 0;
        padding: 1rem;
        overflow-x: hidden;

        background-image: linear-gradient(#DBDEFF, #F9EDFF, #FFFFFF);
        background-size: cover;
        background-repeat: no-repeat;
        
        font-family: "Jura";

        & header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size: 22px;

            @media screen and (max-width: 800px) {
                //background-color: #DBDEFF;
                //position: fixed;
            }
        }

        & .body {
            padding-top: 1rem;
            padding-left: 6rem;
            padding-right: 6rem;

            @media screen and (max-width: 800px) {
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }

        & footer {
            height: 10%;
            text-align: center;
            color: #3C4770;
            padding: 1rem;
        }
    }

    .logo { 
        display: flex; 
        align-items: center;

        & a {
            & button {
                & img {
                    @media screen and (max-width: 600px) {
                        width: 80px;
                    }
                }   
            }   
        }

        & .title-text {
            @media screen and (max-width: 600px) {
                font-size: 35px;
            }
        }
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 400px;

        @media screen and (max-width: 906px) {
            width: 25%;

            & span {
                display: none;     
            }
        }
    }

    .link-align {
        display: flex;
        align-items: center;
    }

    .img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .img-small {
        border-radius: 20px;
    }

    .md-text {
        font-size: 44px;
        color: #3C4770;
        padding: 2rem;
        text-align: start;
    }

    .sm-text {
        font-size: 22px;
        color: #3C4770;
        padding: 2rem;
        text-align: start;
    }

    .title-text { 
        grid-area: title; 
        font-size: 70px;
        color: #3C4770;
        padding-left: 1rem;
        /* background-color: rgba(221, 221, 221, 50); */
    }

    .home-button {
        border: none;
        padding: none;
        background: none;
        margin: 0;
        padding: 0;

        transition: transform .5s ease-in-out;
        
        &:hover {
            cursor: pointer;
            transform: rotate(360deg);
        }  
    }

    @media screen and (max-width: 800px) {
        .page { padding: none; }

        .title-text { font-size: 50px; }
    }
</style>