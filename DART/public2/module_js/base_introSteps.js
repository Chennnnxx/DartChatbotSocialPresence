let jqhxrArray = new Array(); // this array will be handed to Promise.all
let pathArrayIntro = window.location.pathname.split('/');
const subdirectory1 = pathArrayIntro[1]; // idenify the current page
const subdirectory2 = pathArrayIntro[2]; // idenify the current module
let startTimestamp = Date.now();

function startIntro(enableDataCollection) {
    var intro = introJs().setOptions({
        steps: stepsList,
        'hidePrev': true,
        'hideNext': true,
        'exitOnOverlayClick': false,
        'exitOnEsc': false,
        'showStepNumbers': false,
        'showBullets': false,
        'scrollToElement': true,
        'doneLabel': 'Done &#10003',
        'keyboardNavigation': false
    });
    
    /*
    onbeforechange:
    "Given callback function will be called before starting a new step of
    introduction. The callback function receives the element of the new step as
    an argument."
    */
    intro.onbeforechange(function() {
        
        // check to see if there is a function on this step
        if(this._introItems[this._currentStep].myBeforeChangeFunction){
            //if so, execute it.
            this._introItems[this._currentStep].myBeforeChangeFunction();
            
        }
        }).onchange(function() {  //intro.js built in onchange function
        if (this._introItems[this._currentStep].myChangeFunction){
            this._introItems[this._currentStep].myChangeFunction();
        }

    
        // if this function is defined in the custom js file, run it
        try {
            additionalOnBeforeChange($(this));
        } catch (error) {
            if (!(error instanceof ReferenceError)) {
                console.log("There has been an unexpected error:");
                console.log(error);
            }
        }
        // Skip the remaining code in this function if data collection is disabled.
        if (!enableDataCollection) {
            return;
        }
        // Data collection is enabled:
        // ._currentStep has the number of the NEXT tutorial box you're moving toward.
        // However, we want to know the number of the step we are LEAVING.
        // We can use ._direction to determine if we are going forward or backward,
        // and then subtract/add accordingly to get the number we want.
        let leavingStep = 0;
        
        if ($(this)[0]._direction === "forward") {
            leavingStep = ($(this)[0]._currentStep - 1);
        } else if ($(this)[0]._direction === "backward") {
            leavingStep = ($(this)[0]._currentStep + 1);
        } else {
            console.log(`There was an error in calculating the step number.`);
        }
        let totalTimeOpen = Date.now() - startTimestamp;
        let cat = new Object();
        cat.subdirectory1 = subdirectory1;
        cat.subdirectory2 = subdirectory2;
        cat.stepNumber = leavingStep;
        cat.viewDuration = totalTimeOpen;
        cat.absoluteStartTime = startTimestamp;
        // Check that leavingStep is a legitimate number. -1 seems to occur whenever
        // the page is loaded, or when the back button is used - we don't want to
        // record those occurrences.
        if (leavingStep !== -1) {
            const jqxhr = $.post("/introjsStep", {
                action: cat,
                _csrf: $('meta[name="csrf-token"]').attr('content')
            });
            jqhxrArray.push(jqxhr);
        }
    });

    /*
    onafterchange:
    "Given callback function will be called after starting a new step of
    introduction. The callback function receives the element of the new step as
    an argument."
    */
    intro.onafterchange(function() {
        // Voiceovers.playVoiceover(stepsList[$(this)[0]._currentStep].audioFile);
        // reset the timestamp for the next step
        startTimestamp = Date.now();
        hideHelpMessage();
               
        

        // SIM 1 Customization
        // disable the step for elvis when we want them to click the profile page instead
        if(subdirectory1 === "sim" && subdirectory2 === "trolls" && intro._currentStep === 6) { // your disabled step 2 for example {
            // alert("this has been activated hehehe");
            // console.log($('.introjs-nextbutton'));
            var original_onclick = $('.introjs-nextbutton').get(0).onclick;
            let elements = document.getElementsByTagName('a');
            // console.log(elements);
            // console.log(elements[33]);
            elements[33].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-nextbutton').addClass('introjs-disabled');
            $('.introjs-nextbutton').get(0).onclick = null;
            $('#step3').on('click', function() {
                // reset next button for future use
                elements[33].style.filter = "";
                $('.introjs-nextbutton').removeClass('introjs-disabled');
                $('.introjs-nextbutton').get(0).onclick = original_onclick;
                
                // activate the click for the user too so we can automatically move them along!!
                elements[33].click();
              })
        }

        // at next step disable back button
        if(subdirectory1 === "sim" && subdirectory2 === "trolls" && intro._currentStep === 7) { // your disabled step 2 for example {
            // console.log("the click: ");
            var original_onclick = $('.introjs-prevbutton').get(0).onclick;
            // console.log(original_onclick);            
            let elements = document.getElementsByTagName('a');
            // console.log(elements[32]);
            elements[32].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-prevbutton').addClass('introjs-disabled');
            $('.introjs-prevbutton').get(0).onclick = null;
            $('.introjs-nextbutton').on('click', function() {
                elements[32].style.filter = "";
                $('.introjs-prevbutton').removeClass('introjs-disabled');
                $('.introjs-prevbutton').get(0).onclick = original_onclick;
              })
        }

        // make them hit back button to return to friend request
        if(subdirectory1 === "sim" && subdirectory2 === "trolls" && intro._currentStep === 13) { // your disabled step 2 for example {
            var original_onclick = $('.introjs-nextbutton').get(0).onclick;
            let elements = document.getElementsByTagName('a');
            // console.log(elements);
            // console.log(elements[33]);
            elements[33].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-nextbutton').addClass('introjs-disabled');
            $('.introjs-nextbutton').get(0).onclick = null;
            $('#backBtn').on('click', function() {
                // reset next button for future use
                elements[33].style.filter = "";
                $('.introjs-nextbutton').removeClass('introjs-disabled');
                $('.introjs-nextbutton').get(0).onclick = original_onclick;
                
                // activate the click for the user too so we can automatically move them along!!
                elements[33].click();
              })
        }

        // at last step disable back button, they must click decline
        if(subdirectory1 === "sim" && subdirectory2 === "trolls" && intro._currentStep === 14) { // your disabled step 2 for example {
            var original_onclick = $('.introjs-prevbutton').get(0).onclick;
            let elements = document.getElementsByTagName('a');
            // console.log(elements[32]);
            elements[32].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-prevbutton').addClass('introjs-disabled');
            $('.introjs-prevbutton').get(0).onclick = null;
        }

        // SIM 2 Customization
        // disable the next btn for chris when we want them to click the profile page instead
        if(subdirectory1 === "sim2" && subdirectory2 === "trolls" && intro._currentStep === 3) { // your disabled step 2 for example {
            // alert("this has been activated hehehe");
            // console.log($('.introjs-nextbutton'));

            var original_onclick = $('.introjs-nextbutton').get(0).onclick;
            let elements = document.getElementsByTagName('a');
            // console.log(elements);
            // console.log(elements[27]);
            elements[27].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-nextbutton').addClass('introjs-disabled');
            $('.introjs-nextbutton').get(0).onclick = null;
            $('#step3').on('click', function() {
                // reset next button for future use
                elements[27].style.filter = "";
                $('.introjs-nextbutton').removeClass('introjs-disabled');
                $('.introjs-nextbutton').get(0).onclick = original_onclick;
                
                // activate the click for the user too so we can automatically move them along!!
                elements[27].click();
              })
        }

        // at next step disable back button
        if(subdirectory1 === "sim2" && subdirectory2 === "trolls" && intro._currentStep === 4) { // your disabled step 2 for example {
            // console.log("the click: ");
            var original_onclick = $('.introjs-prevbutton').get(0).onclick;
            // console.log(original_onclick);            
            let elements = document.getElementsByTagName('a');
            // console.log(elements);
            elements[26].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-prevbutton').addClass('introjs-disabled');
            $('.introjs-prevbutton').get(0).onclick = null;
            $('.introjs-nextbutton').on('click', function() {
                elements[26].style.filter = "";
                $('.introjs-prevbutton').removeClass('introjs-disabled');
                $('.introjs-prevbutton').get(0).onclick = original_onclick;
            })
        }

        // make user hit left arrow back button to return to friend request
        if(subdirectory1 === "sim2" && subdirectory2 === "trolls" && intro._currentStep === 9) { // your disabled step 2 for example {
            var original_onclick = $('.introjs-nextbutton').get(0).onclick;
            let elements = document.getElementsByTagName('a');
            // console.log(elements);
            // console.log(elements[27]);
            elements[27].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-nextbutton').addClass('introjs-disabled');
            $('.introjs-nextbutton').get(0).onclick = null;
            $('#backBtn').on('click', function() {
                // reset next button for future use
                elements[27].style.filter = "";
                $('.introjs-nextbutton').removeClass('introjs-disabled');
                $('.introjs-nextbutton').get(0).onclick = original_onclick;
                
                // activate the click for the user too so we can automatically move them along!!
                elements[27].click();
              })
        }

        // at last step disable back button, they must click decline
        if(subdirectory1 === "sim2" && subdirectory2 === "trolls" && intro._currentStep === 10) { // your disabled step 2 for example {
            var original_onclick = $('.introjs-prevbutton').get(0).onclick;
            let elements = document.getElementsByTagName('a');
            elements[26].style.filter = "grayscale(100%)";


            // $('.introjs-nextbutton').style.backgroundColor = "red";  
            $('.introjs-prevbutton').addClass('introjs-disabled');
            $('.introjs-prevbutton').get(0).onclick = null;
        }

        
    })

    // intro.onafterchange(function(targetElement) {  
    //     if(intro._currentStep == 2) { // your disabled step 2 for example
    //       var original_onclick = $('.introjs-nextbutton').get(0).onclick;
    //       $('.introjs-nextbutton').addClass('introjs-disabled');
    //       $('.introjs-nextbutton').get(0).onclick = null;
    //       $('#searchbox').on('search:done', function() {
    //         $('.introjs-nextbutton').removeClass('introjs-disabled');
    //         $('.introjs-nextbutton').get(0).onclick = original_onclick;
    //       }
    

    /*
    onbeforexit:
    "Works exactly same as onexit but calls before closing the tour. Also,
    returning false would prevent the tour from closing."
    */
    intro.onbeforeexit(function() {
        hideHelpMessage();
        Voiceovers.pauseVoiceover();
        // if this function is defined in the custom js file, run it
        try {
            additionalOnBeforeExit();
        } catch (error) {
            if (!(error instanceof ReferenceError)) {
                console.log("There has been an unexpected error:");
                console.log(error);
            }
        }

        // Skip the remaining code in this function if data collection is disabled.
        if (!enableDataCollection) {
            window.location.href = `/${nextPageURL}/${subdirectory2}`;
            return;
        }
        // Data collection is enabled:
        let leavingStep = $(this)[0]._currentStep;
        // edge case: current step will = -1 when the user leaves the page using
        // something like the back button. Don not record that.
        let totalTimeOpen = Date.now() - startTimestamp;
        let cat = new Object();
        cat.subdirectory1 = subdirectory1;
        cat.subdirectory2 = subdirectory2;
        cat.stepNumber = leavingStep;
        cat.viewDuration = totalTimeOpen;
        cat.absoluteStartTime = startTimestamp;
        const jqxhr = $.post("/introjsStep", {
            action: cat,
            _csrf: $('meta[name="csrf-token"]').attr('content')
        });
        jqhxrArray.push(jqxhr);
        // this is the last step in the module, so change pages once all Promises
        // are completed
        Promise.all(jqhxrArray).then(function() {
            // use the variable nextPageURL defined in the custom js file for the page
            window.location.href = `/${nextPageURL}/${subdirectory2}`
        });
    });

    intro.start(); //start the intro
    return intro;
};

function isTutorialBoxOffScreen(bottomOffset) {
    if (window.scrollY > bottomOffset) {
        return true;
    } else {
        return false;
    }
}

function hideHelpMessage() {
    if ($('#clickNextHelpMessage').is(':visible')) {
        $('#clickNextHelpMessage').transition('fade');
    }
}

function showHelpMessage() {
    if ($('#clickNextHelpMessage').is(':hidden')) {
        $('#clickNextHelpMessage').transition('fade down');
    }
}

$('#chatbotButton').on('click',function(){
    $('.introjs-nextbutton').get(0).click(); 
})

$('#chatbotButton_s').on('click',function(){
    $('.introjs-nextbutton').get(0).click(); 
})

$(window).on("load", function() {
    const enableDataCollection = $('meta[name="isDataCollectionEnabled"]').attr('content') === "true";
    // if this function is defined in the custom js file, run it
    try {
        customOnWindowLoad(enableDataCollection);
    } catch (error) {
        if (error instanceof ReferenceError) {
            const intro = startIntro(enableDataCollection);
            const tooltipTopOffset = $('.introjs-tooltip').offset().top;
            const tooltipBottomOffset = tooltipTopOffset + $('.introjs-tooltip').outerHeight();
            let scrolledAway = false;
            // When the user scrolls, check that they haven't missed the first tooltip.
            // If the tooltip is scrolled out of the viewport and the user is still on
            // the first tooltip step after 4 seconds, show a help message.
            $(window).scroll(function() {
                // only want to do this once, so check that scrolledAway is false
                if (isTutorialBoxOffScreen(tooltipBottomOffset) && (!scrolledAway)) {
                    scrolledAway = true;
                    setTimeout(function() {
                        if (intro._currentStep === 0) {
                            showHelpMessage();
                        }
                    }, 4000);
                }
            });
        } else {
            console.log("There has been an unexpected error:");
            console.log(error);
        }
    }
});