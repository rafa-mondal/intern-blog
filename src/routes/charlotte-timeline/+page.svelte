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
        <div class='sm-text'>Esri Professional Services is a client-facing division, and this was one of the few engagements where I was able to see the process emerge. A city government approached us in creating a timeline webapp for the city, using <b>Timeline JS</b>. Our initial deliverable was sending a proof of concept, where we could confirm we could develop a timeline embedding images, videos, as well as Google and ArcGIS Online maps.  </div>
        <div class='md-text'> TimelineJS</div>
        <div class='sm-text'>TimelineJS is a no-code development platform where you input elements in a Google Spreadsheet. After reviewing the documentation, I was able to get a sample running with desired media embeds. </div>
        <img class="img" src="/images/timeline-ex.png" alt=""/>
        <div class='caption'> Spreadsheet Template Example (unable to retrieve original spreadsheet) </div>
        <div class='md-text'>Client Demo</div>
        <div class='sm-text'>Concurrently, I created a GitHub repo with a vanilla HTML project so Lillie Bahrami and I could have a common codebase to work off. She worked on the JSON inputs and polished the timeline we had created to present to the client.</div>
        <img class="img" src="/images/timeline-demo.png" alt=""/>
        <div class='sm-text'>When touching base with the client, there was a miscommunication with the hosting platform. They were unable to preview our deliverable, and were concerned if the project would be able to move forward at all. Thankfully, we were able to demonstrate the timeline on our end and they loved it, so we were able to pivot our plans for the hosting and the project moved forward. Professional Services is described as customer-focused and adaptable, and this was an exciting moment because I felt I could be a part of that.</div>
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
        width: 80%;
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

    @media screen and (max-width: 800px) {
        .page { padding: none; }

        .title-text { font-size: 50px; }
    }
</style>