/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function loadXMLDoc(filename)
{
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false);
    xhttp.send("");
    return xhttp.responseXML;
}

function LoadFixtures(order) {
    xml = loadXMLDoc("fixtures.xml");
    if (order == "desc") {
        xsl = loadXMLDoc("fixtures.xsl");
    } else {
        xsl = loadXMLDoc("fixtures_1.xsl");

    }
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById("matchlist").innerHTML = "";
    document.getElementById("matchlist").appendChild(resultDocument);
}



/**google.load("feeds", "1"); **/
// window.onclick="initalize()";

function createResultsPredictor() {


    var matchFixtures = {
        "teams": [
            {"Team 1": "Brazil", "result": "0", "Team 2": "Ireland","result": "0"},
            {"Team 1": "Ireland","result": "0", "Team 2": "England","result": "0"},
            {"Team 1": "Italy","result": "0", "Team 2": "Ireland","result": "0"},
            {"Team 1": "Italy","result": "0", "Team 2": "Ireland","result": "0"},
            {"Team 1": "Italy","result": "0", "Team 2": "Ireland","result": "0"}


        ]
    }
    var table = '<table>';
    table += '<thead><tr><th>Team 1</th><th>Result</th><th>Team 2</th><th>Result</th></tr></thead>';


    $(table).addClass('table table-striped');
    $('table').attr('id', 'myTable');


}

 /** $('#search').click(function() { **/
 /**
     function getMatchFixturesData() {

                    alert("submit handler has fired");
                    $.ajax({
                        type: 'GET',
                        url: 'matchFixtures.json',
                        data: $('#cityDetails').serialize(),

                        success: function(data){ 
                            $.each(data, function( index, value ) {
                               var row = $("<tr><td>" + value.city + "</td><td>" + value.city + "</td><td>" + value.cStatus + "</td></tr>");
                               $("#myData").append(row);
                            });
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            alert('error: ' + textStatus + ': ' + errorThrown);
                        }
                    });
                    return false;//suppress natural form submission
                }); 
**/
function initialize2() {
    //  document.getElementById("feed").innerHTML="  ";
    var feed = new google.feeds.Feed("http://www.rte.ie/news/rss/news-headlines.xml");

    feed.load(function (result) {
        if (!result.error) {
            var container = document.getElementById("feed");
            var span = document.createElement("span");
            span.appendChild(document.createTextNode("RTE news headlines"));
            container.appendChild(span);
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                // var span = document.createElement("span");
                var div = document.createElement("div");
                //  span.appendChild(document.createTextNode("RTE news headlines"));
                div.appendChild(document.createTextNode(entry.title + " "));
                // container.appendChild(span);
                container.appendChild(div);
            }
        }
    });
}

window.myWidgetParam = {
    id: 13,
    cityid: 2964574,
    appid: '34b81063056317188429f8bc5c4e347a',
    units: 'metric',
    containerid: 'openweathermap-widget',
};
(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
})();


  function CreateResultsPredictor(rows) {
  var arr = ["Brazil","Ireland",];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}


function createTableFixtures(){
    
    var data = [
  ["Flash", 22722],
  ["Ignite", 5126],
  ["Heal", 4666],
  ["Smite", 3970],
  ["Teleport", 3892],
  ["Exhaust", 3118],
  ["Mark", 2495],
  ["Ghost", 571],
  ["Barrier", 459],
  ["Clarity", 239],
  ["Cleanse", 132],
  ["Clairvoyance", 10]
];

var tr;
for (var i = 0; i < data.length; i++) {
  tr = $('<tr/>');
  tr.append("<td>" + data[i][0] + "</td>");
  tr.append("<td contentedtiable = true >" + data[i][1] + "</td>");
  $('table').append(tr);
}
    
    
    
    
    
}