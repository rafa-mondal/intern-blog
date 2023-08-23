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
        <div class="md-text">Overview</div>
        <div class='sm-text'>The Career Lattice Viewer was the most extensive project I worked on during my Esri internship. The project is an inner-source tool developed by Esri Professional Services that helps employees track their career development in accordance with the “Career Lattice” developed by Esri HR. This web app is built in React and Node.js and was in development for about a year. I was brought on to wrap up remaining tasks and implement remaining features on the app to prepare for its release August 2023. </div>
        <div class="img-grid"> 
            <div class='sm-text'>
                The following is an overview on the work I contributed to the app:<br><br>
                &emsp;✤ Implement responsive design<br>
                &emsp;✤ Create page animations via styled-components<br>
                &emsp;✤ Refresh details panel as another lattice is selected<br>
                &emsp;✤ Implement auto-scroll and highlight functionality<br>
                &emsp;✤ Deploy to GitHub Pages via Actions workflow<br>
                &emsp;✤ Fix styling bugs (extra scroll bars, element overlap, inconsistent sizing, etc)<br>
                &emsp;✤ Implement “About” modal which dynamically updates from README<br>
                &emsp;✤ Create a color legend popover<br>
                &emsp;✤ Update “focus area” JSON data<br>
                &emsp;✤ Design README Banner & additional icons
            </div>
            <img class="img-small" src="/images/lattice-mini.png" alt=""/>
        </div>
        <div class='md-text'> Responsive Design</div>
        <div class="sm-text">Responsive design means designing a display to be compatible with many different screen sizes, such as mobile, tablet, and desktop. I used Chrome DevTools to help simulate different screen sizes and design how components should appear accordingly. I media queried for screen size in the CSS and would shrink down, change layout, abbreviate, or completely hide different elements to streamline the new design.</div>
        <img class="img" src="/images/lattice-gif.gif" alt=""/>
        <div class='md-text'>Animations </div>
        <div class='sm-text'>About 2 months into the development process, we held a UI/UX critique for the current state of the Career Lattice Viewer where we were able to get a lot of helpful feedback. One of the main critiques was that the app felt a little clunky/jumpy. Animations solve this by not only making the UI expressive and visually appealing, but by also emphasize the element actions and relationships (parent and child, active and inactive, etc).</div>
        <img class="img" src="/images/lattice-animation.gif" alt=""/>
        <div class='md-text'>Refresh Panel </div>
        <div class='sm-text'>The existing bug was that the state of the app would not update correctly. When a user had a tile selected, the details panel would fail to refresh to the new tile when the user used the dropdown to select a new lattice. I debugged using Chrome DevTools, which helped me understand how the React components were wired together, and which variables affected the app’s updating state. </div>
        <img class="img" src="/images/lattice-refresh.gif" alt=""/>
        <div class='md-text'>Auto-scroll & Highlight</div>
        <div class='sm-text'>There was already code wiring the auto-scrolling, which I applied to the remaining elements. To implement the highlight, I created a global CSS animation and applied it to a class. On the same event that triggers the auto-scrolling, I added then removed the highlight class from the desired element using <b>setTimeout()</b>. </div>
        <img class="img" src="/images/lattice-highlight.gif" alt=""/>
        <div class='md-text'>GitHub Deployment</div>
        <div class='sm-text'>Since the Career Lattice Viewer is deployed via GitHub pages, the team wanted it to automatically update and reflect pushes to the main branch. I created a Workflow through GitHub Actions to automate the GitHub pages deployment. The generated <b>.yml file</b> automated this workflow trigged by “Push on main.”  </div>
        <img class="img" src="/images/lattice-deploy.png" alt=""/>
        <div class='md-text'>Graphic Design</div>
        <div class='sm-text'>Aside from development, I had some creative input in the app’s graphics. The following are design iterations I made for the Career Lattice Viewer. The last one in each series ended up being the implemented design.</div>
        <img class="img" src="/images/lattice-banner.png" alt=""/>
        <img class="img" src="/images/lattice-legend.png" alt=""/>
        <img class="img" src="/images/lattice-about.png" alt=""/>
        <div class='sm-text'> Special thanks to Lillie Bahrami and Josh Peterson!</div>
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
        }

        & .body {
            padding-top: 1rem;
            padding-left: 6rem;
            padding-right: 6rem;
            text-align: center;

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

    .img-grid {
        display: grid;
        grid-template-areas: "text image";
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
        width: 80%;
        height: 100%;
        border-radius: 20px;
    }


    .img-small {
        grid-area: "img";
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .md-text {
        font-size: 44px;
        color: #3C4770;
        text-align: start;
        padding: 2rem;
    }

    .sm-text {
        grid-area: "text";
        font-size: 22px;
        color: #3C4770;
        text-align: start;
        padding: 2rem;
    }

    .title-text { 
        grid-area: title; 
        font-size: 70px;
        color: #3C4770;
        padding-left: 1rem;
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

        .md-text { font-size: 38px; }
    }
</style>