'use strict';
function updateTimer(){
    //detemination what time want to run on timer
    const future=Date.parse('nov 13, 2022 12:00:01');
    //taken the current time from the device
    const now=new Date();
    const diff=future-now;

    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor(diff/(1000*60*60));
    const mins=Math.floor(diff/(1000*60));
    const sec=Math.floor(diff/(1000));

    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = sec - mins * 60;

    document.getElementById("timer").innerHTML =
                                                `<div> ${d} <span>Days</span></div>
                                                <div> ${h} <span>Hours</span></div>
                                                <div>${m}  <span>Minutes</span></div>
                                                <div> ${s} <span>Seconds</span></div>`;
}
setInterval('updateTimer()',1000);