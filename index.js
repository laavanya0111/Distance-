(function () {
    'use strict';
    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        const ans = document.getElementById('answer');
        if (distance) {
            const conversion = (distance * 1.609344).toFixed(3);
            //alert(conversion);
            ans.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`
        }
        else {
            ans.innerHTML = `<h2>Please Provide a number!!</h2>`
        }
    });
})();