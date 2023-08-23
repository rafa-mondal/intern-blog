<!-- importing font -->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />

<script type="text/javascript">
    import '../app.css'
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
        <div class="intro-grid"> 
         
            <div class="title-image"> <img src="/images/intern.gif" class="img" alt=""> </div>
            <div class="header-text"> 
                <span> Rafa Mondal’s Software Internship Summer 2023<br></span>
                <span class="md-text-main">June 6th - August 25th</span>
            </div>
        </div>
        <div class="tile-grid"> 

            <div> 
                <a href="/wapo-maps">
                    <button class="tile-button"> <img src="/images/wapo-map.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">Early August<br></span>
                    <span class="lg-text">Washington Post Weather Map<br></span>
                    <span class="sm-text-main">Python scripting project to generate map graphics<br></span>
                </div> 
            </div>

            <div> 
                <a href="/lattice">
                    <button class="tile-button"> <img src="/images/lattice-new.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">Late June - August<br></span>
                    <span class="lg-text">Career Lattice Viewer<br></span>
                    <span class="sm-text-main">React app development on internal tool to track Esri career progress<br></span>
                </div>
            </div>

            <div> 
                <a href="/health-dashboard">
                    <button class="tile-button"> <img src="/images/chhs-new.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">June<br></span>
                    <span class="lg-text">Community Health Dashboard<br></span>
                    <span class="sm-text-main">Svelte webapp dashboard to track community health goals of a state government  <br></span>
                </div>
            </div>

            <div> 
                <a href="/calcite">
                    <button class="tile-button"> <img src="/images/calcite.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">Late July<br></span>
                    <span class="lg-text">Calcite Web Component<br></span>
                    <span class="sm-text-main">Research and design on framework agnostic web components dependent on Calcite<br></span>
                </div>
            </div>

            <div> 
                <a href="/pipeline">
                    <button class="tile-button"> <img src="/images/everline.svg" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">Early June<br></span>
                    <span class="lg-text">Pipeline Inspection Logic<br></span>
                    <span class="sm-text-main">Geofencing logic development of a pipeline inspector tracking system<br></span>
                </div> 
            </div>

            <div> 
                <a href="/charlotte-timeline">
                    <button class="tile-button"> <img src="/images/charlotte-ex.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">Early August<br></span>
                    <span class="lg-text">TimelineJS Sample<br></span>
                    <span class="sm-text-main">Creating a sample TimelineJS web app with embedded media for a city government<br></span>
                </div> 
            </div>
            
            <div> 
                <a href="/pothole">
                    <button class="tile-button"> <img src="/images/pothole.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">July<br></span>
                    <span class="lg-text">Pothole Detection Deep Learning<br></span>
                    <span class="sm-text-main">Creating test data by identifying potholes through LiDAR & ArcGIS Pro Oriented Imagery <br></span>
                </div>
            </div>

            <div> 
                <a href="/user-conference">
                    <button class="tile-button"> <img src="/images/uc.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">July 10th - July 14th<br></span>
                    <span class="lg-text">User Conference 2023<br></span>
                    <span class="sm-text-main">The largest GIS conference in the world, and a celebration of how GIS shapes the world<br></span>
                </div>
            </div>

            <div> 
                <a href="/hackathon">
                    <button class="tile-button"> <img src="/images/group-hackathon-pic.png" class="img" alt=""> </button>
                </a>

                <div class="tile-desc">
                    <span class="sm-text-main">July 21st - July 23rd<br></span>
                    <span class="lg-text">Intern Hackathon<br></span>
                    <span class="sm-text-main">Esri's 8th annual Weekend of Innovation, where interns work together in teams to build a product using GIS<br></span>
                </div> 
            </div>
        </div>
    </div>
    <footer>thank you for reading :)<br><br>contact: rafa.audrija.mondal@gmail.com</footer> 
</div>


<style lang="scss">
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

        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 0.6fr;
    }

    .title-image { grid-area: titleImage; }

    .header-text { 
        grid-area: titleText;
        font-size: 60px;
        color: #3C4770;

        /*& .md-text-main {
            @media screen and (max-width: 1450px) {
                font-size: 30px;
                font-weight: 300;
            }

            @media screen and (max-width: 600px) {
                font-size: 22px;
                font-weight: 300;
            }
        }*/
    }

    .sm-text-main {
        font-size: 22px;
        color:  var(--navy-blue);
    }

    .md-text-main {
        font-size: 44px;
        color:  var(--navy-blue);
    }

    .lg-text {
        font-size: 32px;
        font-weight: 600;
        color:  var(--navy-blue);
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

    @media screen and (max-width: 1450px) {
        .intro-grid { display: block; }

        .tile-grid { 
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 0.6fr;
        }
        
        .header-text { 
            font-size: 40px;
            text-align: center;
            font-weight: 600;
        }

        .md-text-main {
            font-size: 30px;
            font-weight: 300;
        }
    }

    @media screen and (max-width: 800px) {
        .tile-grid { 
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: 1fr 0.6fr;
        }
    }

    @media screen and (max-width: 550px) {
        .header-text { font-size: 30px; }

        .md-text-main { 
            font-size: 22px;
            font-weight: 300;
        }
    }

    @media screen and (max-width: 400px) {
        .header-text { font-size: 25px; }
    }
</style>