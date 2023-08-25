<!-- importing font -->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />

<script type="text/javascript">
    import '../../app.css'
</script>

<div class="page"> 
    <header>
        <div class=logo> 
            <a href="/">
                <button class="home-button"> <img id="esri-logo" src="/images/esri-logo.svg" alt=""/> </button>
            </a>
            <div class="title-text"> Intern Blog </div>
        </div>
        <div class="links">
            <a class="link-align" href="https://storymaps.arcgis.com/stories/69e37ee9b86748c1bfbd3b017b592db0" target="_blank" rel="noreferrer noopener">
                <img class="icon-img" height= 10% src="/images/storymap.svg" alt=""/>
                <span>Storymap</span>
            </a>

            <a class= "link-align" href="https://www.linkedin.com/in/rafa-mondal-4a8899221/" target="_blank" rel="noreferrer noopener">
                <img class="icon-img" src="/images/linkedin.svg" alt=""/>
                <span>LinkedIn</span>
            </a>
        </div>
    </header>
    <div class="body">
       <div class='md-text'> Overview </div>
       <div class='sm-text'> 
            The community health dashboard was my first project at Esri! I was tasked with polishing a custom Svelte framework web app for a state government. This dashboard helps the department track and work towards certain priorities and goals to ensure the health, equity, and wellbeing of the state's citizens. My contribution was making UI changes to the site, as  well as updating the print style sheet to make the web app readable and accessible in a paper format.
        </div>
       <div class='md-text'> "Smallifying" UI </div>
       <div class='sm-text'>
        Tweaking the UI to be smaller, or as Lillie dubbed it, “Smallifying the UI” meant shrinking down the interface vertically with respect to spacing, font size, and component size. A lot of my time was spent meticulously cross referencing the web app with the design mockup to ensure they matched, from element spacings and dimensions to font colors, weights, and sizes. The dashboard was designed through Figma, an online design tool I had extensive experience with before my internship, which helped ease along the process. The bulk of translating the Figma prototype into the working web app was frontiered by others before my internship started. After fine tuning the UI, this was my result:<br><br> (the following has been modified to protect proprietary client information)
       </div>
       <img class="img" src="/images/health-small-before.png" alt=""/>
       <div class='caption'> Main branch before "smallify" changes</div>
       <img class="img" src="/images/health-small-after.png" alt=""/>
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
        My next major task for the dashboard was to create the Print Styling Sheet for the dashboards. When you print a page, your browser automatically generates a print layout for the page, with varying degrees of readability. Reformatting the print sheet meant thinking about all the nuances that went into to translating an interactive webpage into a tangible print. This was a bit of a unique task since my team had limited experience with Print Style Sheets. Since I was mostly on my own, I began making a research document of best practices and began development from there: <br><br> (the following has been modified to protect proprietary client information)
       </div>
       <div class='img-grid'>
            <div class="half-section">
                <img class="img-long" src="/images/health-print-before.png" alt=""/>
                <div class='caption'> Before </div>
            </div>
            <div class="half-section">
                <img class="img-long" src="/images/health-print-after.png" alt=""/>
                <div class='caption'> After</div>
            </div>
       </div>
       <div class='sm-text'>
        Changes highlighted:<br>

        &emsp;✤ Different styles for black & white and color<br>
        &emsp;✤ Different styles for portrait & landscape modes<br>
        &emsp;&emsp;✿ Print style sheet prioritizes portrait & black and white<br>
        &emsp;✤ Adding text contrast (grey text ⇒ black text)<br>
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
    /*.img-grid {
        display: grid;
        grid-gap: 2rem;
        padding: 2rem;

        grid-template-areas: 
            "img img"
            "caption caption";

        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 0.5fr 0.01fr;

        @media screen and (max-width: 800px) {
            display: inline;
        }
    }*/

    .img-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .img-long {
        grid-area: "img";
        height: 80%;
        width: 100%;
        border-radius: 20px;
    }
</style>