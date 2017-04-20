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

    function initialize2() {
      //  document.getElementById("feed").innerHTML="  ";
      var feed = new google.feeds.Feed("http://www.rte.ie/news/rss/news-headlines.xml");
      
      feed.load(function(result) {
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
            div.appendChild(document.createTextNode(entry.title+" "));
            // container.appendChild(span);
            container.appendChild(div);
          }
        }
      });
    }

    
  

