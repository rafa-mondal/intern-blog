<!-- importing font -->
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />

<script type="text/javascript">
    import descriptions from '../../../src/descriptions.json';
    const wapo_description = descriptions
</script>

<div class="page"> 
    <header>
        <div class=logo> 
            <a href="/">
                <button class="home-button"> <img src="/images/esri-logo.svg" alt=""/> </button>
            </a>
            <div class="title-text"> Washington Post Weather Maps </div>
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
        <div class='sm-text'> This was one of my shorter projects, but definitely one of my favorites for the summer! I was tasked with creating a formatted and labeled map graphic to be used in weather reports by the Washington Post. This involved parsing through JSON files for date, forecast, and unit formation, and pulling in fellow intern Peter LeCavalier’s code as an external module to generate the map legend. After I had collected and formatted the graphic components, I used <b>matplotlib.pyplot</b> to create the final map graphic and add in the formatted annotations and images.</div>
        <div class='md-text'> Data Parsing </div>
        <div class='sm-text'>My main mentor for this project, Gina O’Neil, had created a mock graphic for what my script should aim to generate. She provided guidelines on where my script should draw from when pulling in map data: </div>
        <img class="img" src="/images/wapo-notes.jpg" alt=""/>
        <div class='sm-text'>I structured my script to loop through each map type, and then each forecast day within each map type. With the known map type, or directory (dir), it would search into a JSON log file “*_image_processing_log” with the corresponding directory name. From there it would grab the map graphic title, units, source, forecast retrieval date (timestamp), and date (weekday). From there, I formatted accordingly: </div>
        <div class='sm-text'>
            &emsp;✤ <b>title_string</b> ⇒ title_string([units_formatted])<br>
            &emsp;✤ <b>units</b> ⇒ units_formatted (Ex: “Degrees C” ⇒ “°C”)<br>
            &emsp;✤ <b>forecast_date</b> ["YYYYMMDD_XXXX[AM/PM]"]/[“XXXX[AM/PM]”] ⇒ Month. Day, Year XXXX[am/pm] ET<br>
            &emsp;✤ <b>date </b> ["YYYYMMDD_XXXX[AM/PM]"]/[“XXXX[AM/PM]”] ⇒ Weekday, Month. Day, Year
        </div>
        <div class='sm-text'> The data parsing process involved importing datetime modules, creating dictionaries mapping integers to days/months, and  string concatenation to output the desired format.</div>
        <div class='md-text'> Generating Graphics </div>
        <div class='sm-text'> Once I had all the formatted strings, it was time to stich it all together into the final map graphic. I grabbed the plain map graphic and displayed it using <b>matplotlib.pyplot.imread()</b> and <b>matplotlib.pyplot.imshow()</b>. Then I added in the title, and the text annotations (forecast_date, date) which dynamically fit to the map’s corners. </div>
        <div class='sm-text'> To insert the legend, I had to call Peter’s colorbar.py code. I initially found myself stuck since the RBG inputs for the colorbar weren’t provided in my log files, but after talking with Gina she provided me with another log file which had the desired inputs. Before I could insert the legend and call it a day, I had to make some additional tweaks to the colorbar:</div>
        <img class="img" src="/images/wapo-peter.png" alt=""/>
        <div class='caption'> Before</div>
        <img class="img" src="/images/wapo-rafa.png" alt=""/>
        <div class='caption'> After</div>
        <div class='sm-text'>The final step was to put everything together and output the labeled map graphics. Running my script outputs a new directory with subdirectories based on map type, each containing the labeled map series:  </div>
        <img class="img" src="/images/wapo-apt.png" alt=""/>
        <img class="img" src="/images/wapo-sky.png" alt=""/>
        <div class='sm-text'> I’ve been focusing a lot on website development and front-end work, so a python scripting project was a nice change of pace. It made me remember how much I love automating tasks and working with data, especially when it had tangible real-world benefit (like being used by the Washington Post!!). Special thanks to Gina O’Neil, Josh Peterson, Peter LeCavalier, and Jared Kohler.</div>
    </div>
    <footer>thank you for reading :)<br><br>contact: rafa.audrija.mondal@gmail.com</footer>
</div>


<style lang="scss">
    .page {
        position: absolute;
        width: calc(100% - 2rem);
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
            /*padding-top: 2rem;*/
            text-align: center;
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
</style>