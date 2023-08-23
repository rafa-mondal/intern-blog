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
       Stay tuned!
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
            text-align: center;

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
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .md-text {
        font-size: 44px;
        color: #3C4770;
    }

    .sm-text {
        font-size: 22px;
        color: #3C4770;
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

        .md-text { font-size: 38px; }
    }
</style>