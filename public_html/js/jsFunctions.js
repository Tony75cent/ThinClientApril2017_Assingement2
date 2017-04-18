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



