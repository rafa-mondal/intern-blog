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
        <div class="md-text">Overview</div>
        <div class="sm-text">User Conference is the largest GIS Conference in the world, celebrating the future of GIS and current achievements. This year, I was able to attend three virtual sessions: the Plenary on opening day hosted by Esri CEO Jack Dangermond, an Arcade mapping and visualization workshop, and a cartography workshop. I will delve into my favorite panel, the cartography workshop.</div>
        <img class="img-small" src="/images/uc-glow.png" alt=""> 
        <div class="md-text">Mapping Wizardry</div>
        <div class="sm-text">
            “Mappy Wizardry” hosted by
            <a href="https://mappy-hour-carto.hub.arcgis.com/?rsource=https%3A%2F%2Flinks.esri.com%2Fmappyhour">Kenneth Field</a>
            was unquestionably my favorite virtual panel. This session aimed to “demonstrate the cartographic power and flexibility of ArcGIS,” which piqued my interests in both technology and design. One demonstration showed an alternate way to map election data:
        </div>
        <img class="img-small" src="/images/uc-map.png" alt="">
        <div class="sm-text">The goal of this map was to better reflect votes with regards to physical area. This takes state population into account, standardizes the shape representation of states, and breaks down winning results into areas within the state. From here, you can observe that most states are actually “purple” which is information you couldn’t glean off a typical election results map.</div>
        <div class="sm-text">Another map I found interesting about this session was the tiger boundaries. This map, called a “space-time cube,” translates data into the z-axis to create a 3-dimensional representation of the data. An observer can look at cross-sections in this graph, especially in the boundaries, to view where a tiger was at a particular location throughout the timeframe recorded.</div>
        <img class="img-small" src="/images/uc-tiger.png" alt=""> 
        <div class="sm-text">I found it incredible that such sophisticated, diverse maps can be created in ArcGIS Pro. Data by itself contains insights that are difficult to understand from looking at raw tables; it is the way the data is presented that is integral to our understanding and the conclusions we may draw. The ability to accurately, clearly, and concisely represent data in a way that best communicates the purpose and structure of the data is a skill I would like to advance throughout my professional career.</div>
    </div>
    <footer>thank you for reading :)<br><br>contact: rafa.audrija.mondal@gmail.com</footer>
</div>

