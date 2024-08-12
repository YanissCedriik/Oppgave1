

// IMG Functions and tags

// -------------------------!!Head!!--------------------------------------------------

function showHead1() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showHead4()">⬅️</button>
            <div> <img src="IMG/head1.png" /> </div>
            <button onclick="showHead2()">➡️</button>

        </div>`;
}

function showHead2() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button class="buttonSizeAgain" onclick="showHead1()">⬅️</button>
            <div> <img src="IMG/head2.pnG" /> </div>
            <button onclick="showHead3()">➡️</button>

        </div>`;
}

function showHead3() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showHead2()">⬅️</button>
            <div> <img src="IMG/head3.png" /> </div>
            <button onclick="showHead4()">➡️</button>

        </div>`;
}

function showHead4() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showHead3()">⬅️</button>
            <div> <img src="IMG/head4.png" /> </div>
            <button onclick="showHead1()">➡️</button>

        </div>`;
}

//-------------------------!!Body!!----------------------------------------------------

function showBody1() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody4()">⬅️</button>
            <div> <img src="IMG/body1.png" /> </div>
            <button onclick="showBody2()">➡️</button>

        </div>`;
}

function showBody2() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody1()">⬅️</button>
            <div> <img src="IMG/body2.pnG" /> </div>
            <button onclick= "showBody3()">➡️</button>

        </div>`;
}

function showBody3() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody2()">⬅️</button>
            <div> <img src="IMG/body3.png" /> </div>
            <button onclick="showBody4()">➡️</button>

        </div>`;
}

function showBody4() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody3()">⬅️</button>
            <div> <img src="IMG/body4.png" /> </div>
            <button onclick="showBody1()">➡️</button>

        </div>`;
}

//---------------------!!Legs!!-------------------------------------------------------

function showLegs1() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showLegs4()">⬅️</button>
            <div> <img src="IMG/legs1.png" /> </div>
            <button onclick="showLegs2()">➡️</button>

        </div>`;
}

function showLegs2() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick= "showLegs1()">⬅️</button>
            <div> <img src="IMG/legs2.pnG" /> </div>
            <button onclick= "showLegs3()">➡️</button>

        </div>`;
}

function showLegs3() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick= "showLegs2()">⬅️</button>
            <div> <img src="IMG/legs3.png" /> </div>
            <button onclick= "showLegs4()">➡️</button>

        </div>`;
}

function showLegs4() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick= "showLegs3()">⬅️</button>
            <div> <img src="IMG/legs4.png" /> </div>
            <button onclick= "showLegs1()">➡️</button>

        </div>`;
}

//-----------------------!!Close innerCard!!-----------------------------------------------------------------

function closeInnerCardTest() {
    if (document.getElementById("innerCard").innerHTML == "") {
        openInnerCardTest();
    } else {
        document.getElementById("innerCard").innerHTML = "";
    }
}

//--------------------------------------------------------------------------------------------------------

function closeInnerCard1() {
    if (document.getElementById("innerCard1").innerHTML == "") {
        openInnerCard1();
    } else {
        document.getElementById("innerCard1").innerHTML = "";
    }
}

function closeInnerCard2() {
    if (document.getElementById("innerCard2").innerHTML == "") {
        openInnerCard2();
    } else {
        document.getElementById("innerCard2").innerHTML = "";
    }
}

function closeInnerCard3() {
    if (document.getElementById("innerCard3").innerHTML == "") {
        openInnerCard3();
    } else {
        document.getElementById("innerCard3").innerHTML = "";
    }
}

function closeInnerCard4() {
    if (document.getElementById("innerCard4").innerHTML == "") {
        openInnerCard4();
    } else {
        document.getElementById("innerCard4").innerHTML = "";
    }
}

function closeInnerCard5() {
    if (document.getElementById("innerCard5").innerHTML == "") {
        openInnerCard5();
    } else {
        document.getElementById("innerCard5").innerHTML = "";
    }
}

//--------------------!!Open innerCard!!----------------------------------------

//--------------------------------------------------------------------------------

function openInnerCard1() {
    document.getElementById("innerCard1").innerHTML = /*HTML*/ `
    De to viktigste verktøyene vi skal bruke er disse:
                <ul>
                    <li>Koderedigeringsprogrammet

                        <a href="https://code.visualstudio.com/">Visual Studio Code</a>

                        <br />

                    <li>Vi skal bruke noen <i>extensions:</i> </li>

                    <ul>

                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li> live-server</li>
                        <li>live-share</li>


                        <li>Nettleseren

                            <a
                                href="https://www.google.com/chrome/?brand=YTUH&gad_source=1&gclid=Cj0KCQjwtsy1BhD7ARIsAHOi4xYDlQwAmUrGZwc--q8deTxT8j0uU8IbWMjlBN53etttDnTlyi9JO-IaAkqKEALw_wcB&gclsrc=aw.ds">Google
                                Chrome</a>
                        </li>



                    </ul>

                    </li>

                </ul>
`;
}

function openInnerCard2() {
    document.getElementById("innerCard2").innerHTML = /*HTML*/ `
    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li><tt>&lt;div&gt;</tt></li>
        <li><tt>&lt;input type="text"&gt;</tt></li>
        <li><tt>&lt;button&gt;</tt></li>
        <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
        </li>
    </ul>

    `;
}

function openInnerCard3() {
    document.getElementById("innerCard3").innerHTML = /*HTML*/ `
     Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
    </ul>

    `;
}

function openInnerCard4() {
    document.getElementById("innerCard4").innerHTML = /*HTML*/ `
    <ul>
                Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende
                programmering
                ved å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a> </li>

            </ul>
    `;
}

function openInnerCard5() {
    document.getElementById("innerCard5").innerHTML = /*HTML*/ `
    <div style="display: flex; align-items:center;" id="allHeads"> <button onclick="showHead4()">⬅️</button>
    <img src="IMG/head1.png" /> <button onclick="showHead2()">➡️</button>
</div>

<div style="display: flex; align-items:center;" id="allBodies"> <button onclick="showBody4()">⬅️</button>
    <img src="IMG/body1.png" /> <button onclick="showBody2()">➡️</button>
</div>


<div style="display: flex; align-items:center;" id="allLegs"> <button onclick="showLegs4()">⬅️</button>
    <img src="IMG/legs1.png" /> <button onclick="showLegs2()">➡️</button>
</div>
    `;
}
