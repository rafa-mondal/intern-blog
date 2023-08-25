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
                <img class="tile-img" height= 10% src="/images/storymap.svg" alt=""/>
                <span>Storymap</span>
            </a>

            <a class= "link-align" href="https://www.linkedin.com/in/rafa-mondal-4a8899221/" target="_blank" rel="noreferrer noopener">
                <img class="tile-img" src="/images/linkedin.svg" alt=""/>
                <span>LinkedIn</span>
            </a>
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