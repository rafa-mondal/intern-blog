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
            <div class="title-text"> Community Health Dashboard </div>
        </div>
        <div class="links">
            <div class="link-align">
                <a href="https://storymaps.arcgis.com/stories/69e37ee9b86748c1bfbd3b017b592db0" target="_blank" rel="noreferrer noopener">"About me" Storymap</a>
                <!-- <img class="img" src="src/link.svg" alt=""> -->
            </div>
            <div class="link-align">
                <img class="img" src="/images/linkedin.svg" alt=""/>
                <a href="https://www.linkedin.com/in/rafa-mondal-4a8899221/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </div>
        </div>
    </header>
    <div class="body">
       <div class='md-text'> Overview </div>
       <div class='sm-text'> 
            The community health dashboard was my first project at Esri! I was tasked with polishing a custom Svelte framework web app for a state government. This dashboard helps the department track and work towards certain priorities and goals to ensure the health, equity, and wellbeing of the state's citizens. My contribution was making UI changes to the site, as  well as updating the print style sheet to make the web app readable and accessible in a paper format.
        </div>
       <div class='md-text'> "Smallifying" UI </div>
       <div class='sm-text'>
        Tweaking the UI to be smaller, or as Lillie dubbed it, “Smallifying the UI” meant shrinking down the interface vertically with respect to spacing, font size, and component size. A lot of my time was spent meticulously cross referencing the web app with the design mockup to ensure they matched, from element spacings and dimensions to font colors, weights, and sizes. The dashboard was designed through Figma, an online design tool I had extensive experience with before my internship, which helped ease along the process. The bulk of translating the Figma prototype into the working web app was frontiered by others before my internship started. After fine tuning the UI, this was my result:
       </div>
       <img class="img" src="/images/chhs-small-before.png" alt=""/>
       <div class='caption'> Main branch before "smallify" changes</div>
       <img class="img" src="/images/chhs-small-after.png" alt=""/>
       <div class='caption'> Main branch after "smallify" changes</div>
       <div class='sm-text'>
        Changes highlighted:<br>
        &emsp;✤ Smaller heading<br>
        &emsp;✤ Smaller navigation bar<br>
        &emsp;✤ Smaller SP heading<br>
        &emsp;✤ Smaller Impact Goals sidebar<br>
        &emsp;✤ General font shrinkage<br>
        &emsp;✤ Edited tile layout & dimensions<br>
        &emsp;✤ Gap of space added between IG description & tile<br>
        &emsp;✤ Scrollable section stretches across entire width of page
       </div>
       <div class='md-text'> Print Style Sheet </div>
       <div class='sm-text'>
        My next major task for the dashboard was to create the Print Styling Sheet for the dashboards. When you print a page, your browser automatically generates a print layout for the page, with varying degrees of readability. Reformatting the print sheet meant thinking about all the nuances that went into to translating an interactive webpage into a tangible print. This was a bit of a unique task since my team had limited experience with Print Style Sheets. Since I was mostly on my own, I began making a research document of best practices and began development from there:
       </div>
       <div class='img-grid'>
        <img class="img-long" src="/images/chhs-print-before.png" alt=""/>
        <img class="img-long" src="/images/chhs-print-after.png" alt=""/>
        <div class='caption'> Before </div>
        <div class='caption'> After</div>
       </div>
       <div class='sm-text'>
        Changes highlighted:<br>

        &emsp;✤ Different styles for black & white and color<br>
        &emsp;✤ Different styles for portrait & landscape modes<br>
        &emsp;&emsp;✿ Print style sheet prioritizes portrait & black and white<br>
        &emsp;✤ Adding text contrast (grey text --> black text)<br>
        &emsp;✤ Removed navigation bars<br>
        &emsp;&emsp;✿ SPNav only shows current SP on page<br>
        &emsp;&emsp;✿ IG Nav is removed entirely<br>
        &emsp;✤ Removed “CalHHS Equity Dashboard” link<br>
        &emsp;✤ Added appropriate page breaks to Objective Cards (shouldn't be split in the middle)<br>
        &emsp;✤ Removed extraneous buttons (print button, jump to top button)<br>
       </div>
       <div class='md-text'> Unique Challenges</div>
       <div class='sm-text'> Svelte packages HTML, CSS, and JavaScript into one framework. I had some prior experience working with HTML, CSS, and JS, so understanding how Svelte wired them all together took a bit of time to fully understand. After working on this project, I became really comfortable with Svelte and even chose it as my development framework for the Intern Hackathon later on in the internship (and for this Intern Blog!)</div>
       <div class='sm-text'> Regarding the print style sheet, it's important to understand that people interact with paper and digital interfaces very differently. For example, I had to remove any extraneous buttons or links that would render obsolete on paper and convert a “dark mode” web app into a “light mode” print sheet to conserve ink. On the web app, the navigation bar toggled between different impact goals which display on the page one at a time—this presented a challenge since the print layout requires all information to be laid out at once. I decided it was best to remove the Strategic Priority Goals navigation bar, since it didn't have function on paper and took up a lot of space. For the Impact Goals navigation bar, I removed it and worked in coordination with another team member to display all the goals at a time in lieu of toggling a navigation bar. A final challenge of designing a print style sheet is that you can't open it in the browser and inspect elements. This was a bit of barrier in fully understanding the layout, but frequent checks and intuition helped me deliver the final design phase.</div>
       <div class='sm-text'> Working alongside the exceedingly impressive and creative Lillie made working on this task extremely rewarding. Whether it was answering a small question, or even going classroom mode and pulling out a whiteboard to give a CSS class application crash course, I always felt supported throughout the project. Special thanks to Lillie Bahrami! </div>
    </div>
    <footer>thank you for reading :)<br><br>contact: rafa.audrija.mondal@gmail.com</footer>
</div>


<style lang="scss">
    .page {
        position: absolute;
        /* BRUH width: 100%;*/
        width: 97vw;
        top: 0;
        left: 0;
        padding: 1rem;

        background-image: linear-gradient(#DBDEFF, #F9EDFF, #FFFFFF);
        background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        
        font-family: "Jura";

        & header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            /*background-color: rgba(221, 221, 221, 50);*/
            font-size: 22px;
        }

        & .body {
            padding-top: 1rem;
            padding-left: 6rem;
            padding-right: 6rem;
            /*padding-top: 2rem;*/
            text-align: center;
        }

        & footer {
            height: 10%;
            /*background-color: rgba(221, 221, 221, 50);*/
            text-align: center;
            color: #3C4770;
            padding: 1rem;
        }
    }

    .logo { display: flex; }

    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 22%;
    }

    .link-align {
        display: flex;
        align-items: center;
    }

    .img-grid {
        display: grid;
        grid-gap: 2rem;
        
        padding: 2rem;

        grid-template-areas: 
            "img img"
            "caption caption";

        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 0.01fr;
    }

    .img {
        width: 80%;
        height: 100%;
        border-radius: 20px;
    }

    .img-long {
        grid-area: "img";
        height: 80%;
        border-radius: 20px;
    }

    .md-text {
        font-size: 44px;
        color: #3C4770;
        text-align: start;
        padding: 2rem;
    }

    .sm-text {
        font-size: 22px;
        color: #3C4770;
        text-align: start;
        padding: 2rem;
    }

    .caption {
        grid-area: "caption";
        font-size: 22px;
        color: #3C4770;
        padding: 2rem;
        text-align: center;
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
</style>