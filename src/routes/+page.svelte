<!-- importing font -->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />

<script type="text/javascript">

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
            <div class="link-align">
                <!-- <img class="img" src="/images/storymap.png" alt=""/> -->
                <a href="https://storymaps.arcgis.com/stories/69e37ee9b86748c1bfbd3b017b592db0" target="_blank" rel="noreferrer noopener">"About me" Storymap</a>
            </div>
            <div class="link-align">
                <img class="img" src="/images/linkedin.svg" alt=""/>
                <a href="https://www.linkedin.com/in/rafa-mondal-4a8899221/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </div>
        </div>
    </header>
    <div class="body">
        <div class="intro-grid"> 
         
            <div class="title-image"> <img src="/images/intern.gif" class="img" alt=""> </div>
            <div class="header-text"> 
                <span> Rafa<br>Mondal’s<br>Software Internship<br>Summer 2023<br></span>
                <span class="md-text">June 6th - August 25th</span>
            </div>
        </div>
        <div class="tile-grid"> 

            <div class="tile"> 
                <a href="/wapo-maps">
                    <button id="i" class="tile-button"> <img src="/images/wapo-map.png" class="img" alt=""> </button>
                </a>

                <div id="nine" class="tile-desc">
                    <span class="sm-text">Early August<br></span>
                    <span class="lg-text">Washington Post Weather Map<br></span>
                    <span class="sm-text">Python scripting project to generate map graphics<br></span>
                </div> 
            </div>

            <div class="tile"> 
                <a href="/lattice">
                    <button id="e" class="tile-button"> <img src="/images/lattice-new.png" class="img" alt=""> </button>
                </a>

                <div id="five" class="tile-desc">
                    <span class="sm-text">Late June - August<br></span>
                    <span class="lg-text">Career Lattice Viewer<br></span>
                    <span class="sm-text">React app development on internal tool to track Esri career progress<br></span>
                </div>
            </div>

            <div class="tile"> 
                <a href="/health-dashboard">
                    <button id="d" class="tile-button"> <img src="/images/chhs-new.png" class="img" alt=""> </button>
                </a>

                <div id="four" class="tile-desc">
                    <span class="sm-text">June<br></span>
                    <span class="lg-text">Community Health Dashboard<br></span>
                    <span class="sm-text">Svelte webapp dashboard to track community health goals of a state government  <br></span>
                </div>
            </div>

            <div class="tile"> 
                <a href="/calcite">
                    <button id="b" class="tile-button"> <img src="/images/calcite.png" class="img" alt=""> </button>
                </a>

                <div id="two" class="tile-desc">
                    <span class="sm-text">Late July<br></span>
                    <span class="lg-text">Calcite Web Component<br></span>
                    <span class="sm-text">Research and design on framework agnostic web components dependent on Calcite<br></span>
                </div>
            </div>

            <div class="tile"> 
                <a href="/pipeline">
                    <button id="f" class="tile-button"> <img src="/images/everline.svg" class="img" alt=""> </button>
                </a>

                <div id="six" class="tile-desc">
                    <span class="sm-text">Early June<br></span>
                    <span class="lg-text">Pipeline Inspection Logic<br></span>
                    <span class="sm-text">Geofencing logic development of a pipeline inspector tracking system<br></span>
                </div> 
            </div>

            <div class="tile"> 
                <a href="/charlotte-timeline">
                    <button id="h" class="tile-button"> <img src="/images/charlotte-ex.png" class="img" alt=""> </button>
                </a>

                <div id="eight" class="tile-desc">
                    <span class="sm-text">Early August<br></span>
                    <span class="lg-text">TimelineJS Sample<br></span>
                    <span class="sm-text">Creating a sample TimelineJS web app with embedded media for a city government<br></span>
                </div> 
            </div>
            
            <div class="tile"> 
                <a href="/pothole">
                    <button id="g" class="tile-button"> <img src="/images/pothole.png" class="img" alt=""> </button>
                </a>

                <div id="seven" class="tile-desc">
                    <span class="sm-text">July<br></span>
                    <span class="lg-text">Pothole Detection Deep Learning<br></span>
                    <span class="sm-text">Creating test data by identifying potholes through LiDAR & ArcGIS Pro Oriented Imagery <br></span>
                </div>
            </div>

            <div class="tile"> 
                <a href="/user-conference">
                    <button id="a" class="tile-button"> <img src="/images/uc.png" class="img" alt=""> </button>
                </a>

                <div id="one" class="tile-desc">
                    <span class="sm-text">July 10th - July 14th<br></span>
                    <span class="lg-text">User Conference 2023<br></span>
                    <span class="sm-text">The largest GIS conference in the world, and a celebration of how GIS shapes the world<br></span>
                </div>
            </div>

            <div class="tile"> 
                <a href="/hackathon">
                    <button id="c" class="tile-button"> <img src="/images/group-hackathon-pic.png" class="img" alt=""> </button>
                </a>

                <div id="three" class="tile-desc">
                    <span class="sm-text">July 21st - July 23rd<br></span>
                    <span class="lg-text">Intern Hackathon<br></span>
                    <span class="sm-text">Esri's 8th annual Weekend of Innovation, where interns work together in teams to build a product using GIS<br></span>
                </div> 
            </div>
        </div>
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
        }

        & footer {
            height: 10%;
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

    .intro-grid {
        display: grid;
        grid-gap: 2rem;
        
        grid-template-areas: "titleImage titleImage titleText";
        
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    } 

    .tile-grid {
        display: grid;
        grid-gap: 2rem;
        
        padding-top: 3rem;
        padding-bottom: 2rem;

        grid-template-areas: 
            "a   b   c"
            "one two three";

        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 0.6fr;

        @media screen and (max-width: 1450px) {
            grid-template-areas: 
            "a   b"
            "one two";

            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 0.6fr;
        }

        @media screen and (max-width: 800px) {
            grid-template-areas: 
            "a"
            "one";

            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: 1fr 0.6fr;
        }
    }

    .title-image { 
        grid-area: titleImage;
    }

    .img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .lg-text {
        font-size: 32px;
        font-weight: 600;
        color: #3C4770;
    }

    .md-text {
        font-size: 44px;
        color: #3C4770;
    }

    .sm-text {
        font-size: 22px;
        color: #3C4770;
    }

    .header-text { 
        grid-area: titleText;
        font-size: 60px;
        color: #3C4770;
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

    .tile {

    }

    .tile-button {
        background: none;
        border: none;
        border-radius: 20px;
        aspect-ratio: 1.24;

        &:hover {
            cursor: pointer;
            border: solid transparent;
        }
    }

    .tile-desc {
        aspect-ratio: 1.95;
        padding: 1rem;
    }
</style>