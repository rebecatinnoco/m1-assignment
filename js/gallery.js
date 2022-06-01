var photos = []; //empty array to store image element
    var fileNames = []; //empty array to store image filenames
    var imageList = []; //empty array to store html list that contain an image
    var image; //empty array to store the assembled image list codes
    var openList = "<li id='photo"; //declare a variable to contain open list tag
    var closeList = "</li>"; //declare a variable to contain close list tag

    //Lab Assigment Module1_week3_Day3
    //1-part 

    var openCaptionTag = "<div class='caption'>";
    var closeCaptionTag = "</div>";
    var captionTexts = ['Metrowest Village','Townhouses','Senior Living','Commercial Area','Golf Course','Bill Frederick','Metrowest Landscaping','Restaurants','School Bus','Car Care','Gas Stations'];
    var captionList = [];

    //2-part

    var openDescTag = "<div id='description' onClick='displayInfo(";
    var openDescTagClose = ")'>";
    var closeDescTag = "</div>";
    var descTexts = ['Metrowest Village d','Townhouses d','Senior Living d','Commercial Area d','Golf Course d','Bill Frederick d','Metrowest Landscaping d','Restaurants d','School Bus d','Car Care d','Gas Stations d'];
    var descList = [];

    //<div class="description"> | Metrowest View | </div>
    
    ///Lab Assigment Module1_week4_Day3
    var openBoxTag = "<div id='box";
    var openBoxTagClose = "'>";
    var closeBoxTag = "</div>";
    var boxText = ['More than 50 condominums available','Wide golf courses avaible through the area','Shopping area with plenty store options','Restaurants from every place in the world','Several local places to visit','More than 50 condominums available','Wide golf courses avaible through the area','Shopping area with plenty store options','Restaurants from every place in the world','Several local places to visit'];
    var closeText = ["Click This To Close"]
    var boxList = [];

    //Create a lopp to create 6 images starting with index of 0
    for (var i=0; i<10; i++) {
        fileNames.push( "metrowest"+(i+1)); //Create image file name and store in the array
        photos.push(+i+1+"'><img src='images/"+fileNames[i]+".jpg'"); //Assemble file name into image element and store in an array
        captionList[i] = openCaptionTag + captionTexts[i] + closeCaptionTag; //Adding Caption format
        descList[i] = openDescTag + i + openDescTagClose + descTexts[i] + closeDescTag; //Adding Description format
        image = openList + photos[i] + closeList + descList[i] + captionList[i];
        imageList.push(image); //Store(push) the assemble list codes into an array
    }
    
    //Display all six images codes stored in the array
    document.getElementById("album").innerHTML = imageList.join("");

    var closeInfo = document.getElementById("close-info");
        closeInfo.addEventListener("click",hideInfo);

    //creating a function to diplay the info
    function displayInfo(x) {
        var x;
        document.getElementById("info-box").style.visibility="visible";
        document.getElementById("title").innerHTML= captionTexts[x];
        document.getElementById("info").innerHTML= boxText[x];
        document.getElementById("close-info").innerHTML=closeText;
    }
    function hideInfo () {
        document.getElementById("info-box").style.visibility="hidden";
    }