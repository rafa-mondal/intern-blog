<!-- importing font -->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />

<script type="text/javascript">
    //import descriptions from '../descriptions.json';
    const text = "";
</script>

<div class="page"> 
    <header>
        <div class=logo> 
            <a href="/">
                <button class="home-button"> <img src="/images/esri-logo.svg" alt=""/> </button>
            </a>
            <div class="title-text"> Everline US </div>
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
            For this project, I helped configure the logic of the inspection algorithm with consideration to geoprocessing functions provided in ArcGIS Pro. The goal was to determine whether a pipeline inspection was valid based on tracking an inspector’s location as they went along the pipeline. If the inspector remained relatively on track, with consideration to some other parameters, the inspection was considered valid.
        </div>
        <div class='md-text'> The Process </div>
        <div class='sm-text'>
            The client allowed a lot of freedom in developing a solution, so long as it followed a couple of provided parameters. This freedom meant that I had a lot of flexibility, but that I also had to infer some things on my own. For example: how do I determine if an inspector is “close enough” to the route? The easiest way to do this would be to create a geofence, which is bounded from the centerline from a certain configurable distance, equidistant from the right and left of the pipe. I could then make use of geometry.contains() in ArcGIS Pro to determine whether or not the inspector’s location fell within that geofence. Here are some notes I made while constructing the logic for the program.
        </div>
        <img class="img" src="/images/everline-notes.png" alt=""/>
        <img class="img" src="/images/everline-paper.jpg" alt=""/>

        <div class='sm-text'>
            The following is a pseudocode implementation of Method #1
        </div>
        <img class="img" src="/images/everline-code.png" alt=""/>
        <div class='sm-text'>
            Some edge cases to consider were:<br>
            1)	What if there was an obstacle in the way that affected the inspector’s path?<br>
            2)	What if the inspector forgets to turn off the app? (dwell)<br>
            3)	What if there are inaccuracies in the GPS data tracking inspector location?
        </div>
        <div class='sm-text'>
            After the initial logic had been approved, I was able to work with the incredibly intelligent and talented JP Stupfel on the deliverable. We scheduled a pair programming session to create both a server-side and client-ride rendered deliverable, from which the client would choose which to implement based on their internal infrastructure and needs. Below is an example of the CodePen we worked on together:
        </div>
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
            font-size: 22px;
        }

        & .body {
            padding-top: 1rem;
            padding-left: 6rem;
            padding-right: 6rem;
            text-align: center;
        }

        & footer {
            height: 10%;
            text-align: center;
            color: #3C4770;
            padding: 1rem;
        }
    }

    .grid {
        display: grid;
        grid-gap: 2rem;
        
        grid-template-areas: "text tile";
        
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    } 

    .tile {
        border-radius: 20px;
        height: 80%;
        padding: 2rem;
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

    .img {
        width: 60%;
        height: 100%;
        border-radius: 20px;
        
    }

    .code-block {
        font-family: 'Courier New';
        font-size: 14px;
        padding: 2rem;
        width: 60%;
        background-color: rgba(230, 230, 230);
    }

    .sm-text {
        font-size: 22px;
        color: #3C4770;
        grid-area: text;
        padding: 2rem;
        text-align: start;
    }

    .md-text {
        font-size: 44px;
        color: #3C4770;
        padding: 2rem;
        text-align: start;
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
</style>