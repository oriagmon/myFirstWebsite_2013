function myFunction() {
    var d = new Date();
    var x = document.getElementById("demo");
    x.innerHTML = d.toUTCString();
}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 2);
var dateString = tomorrow.getFullYear() + "-" + (parseInt(tomorrow.getMonth()) + 1) + "-" + tomorrow.getDate();

var url = 'https://api.forecast.io/forecast/a4ee1105b2839b21411c4434e2773876/31,35,'+dateString+'T12:00:00-0400?units=si';
$.ajax({
    type: 'GET',
    url: url,
    crossDomain: true,
    async: false,
    jsonpCallback: 'jsonpCallback',
    dataType: 'jsonp',
    contentType: 'application/json',
    success: function (data) {
        //alert('data');
        var winter = "http://www.israup.net/images/4f8f2b55a66d313a46ebe4ca19bfad1a.jpg";
        var summer = "http://www.israup.net/images/168ab65a2c4b7e53eea8f844cf41b19d.jpg";
        var temp = data.daily.data[0].apparentTemperatureMax;
        var mylabel = document.getElementById("divtemp");
        mylabel.innerText = Math.round(temp) + "°C";



        //mylabel.style.color="red";
        if (temp > 28)
            mylabel.style.color = "red";
        else
            mylabel.style.color = "blue";
        //alert(temp);
        $("#img").attr("src", temp > 28 ? summer : winter);


    },
    error: function (data) {
        alert('data');
    },
});
