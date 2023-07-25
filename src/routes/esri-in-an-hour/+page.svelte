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
                <button class="home-button"> <img src="src/esri-logo.svg" alt=""/> </button>
            </a>
            <div class="title-text"> Esri in an Hour </div>
        </div>
        <div class="links">
            <div class="link-align">
                <a href="https://storymaps.arcgis.com/stories/69e37ee9b86748c1bfbd3b017b592db0" target="_blank" rel="noreferrer noopener">"About me" Storymap</a>
                <!-- <img class="img" src="src/link.svg" alt=""> -->
            </div>
            <div class="link-align">
                <img class="img" src="src/linkedin.svg" alt=""/>
                <a href="https://www.linkedin.com/in/rafa-mondal-4a8899221/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </div>
        </div>
    </header>
    <body>
       
    </body>
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

        & body {
            padding-top: 1rem;
            padding-left: 6rem;
            padding-right: 6rem;
            /*padding-top: 2rem;*/
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
    }

    .title-image { 
        grid-area: titleImage;
        /*background-color: rgba(221, 221, 221, 50);*/
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
        /*background-color: rgba(221, 221, 221, 50);*/
    }

    .title-text { 
        grid-area: title; 
        font-size: 70px;
        color: #3C4770;
        padding-left: 1rem;
        /* background-color: rgba(221, 221, 221, 50); */
    }

    #a { grid-area: a; }

    #b { grid-area: b; }

    #c { grid-area: c; }

    /*#d { grid-area: d; }

    #e { grid-area: e; }

    #f { grid-area: f; }*/

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

    .tile-button {
        background: none;
        border: none;
        border-radius: 20px;
        aspect-ratio: 1.24;

        /*transition: border-width 0.6s linear;*/

        &:hover {
            cursor: pointer;
            border: solid transparent;
        }
    }

    .tile-desc {
        /*background-color: rgba(221, 221, 221, 50);*/
        aspect-ratio: 1.95;
        padding: 1rem;
    }
</style>