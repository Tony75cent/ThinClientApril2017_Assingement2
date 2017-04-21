<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : fixtures.xsl
    Created on : May 2, 2016, 5:00 PM
    Author     : anthonyquinn
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!--  <xsl:output method="html"/>-->
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="Fixtures">
        <table width="75%" border="2">
            <tr bgcolor="silver">
                <th align='left'>match</th>
                <th align='left'>location</th>
                <th align='left' >date</th>
                <!--th align='left' >result</th-->

            </tr>
        
            <xsl:for-each select="fixtures">
                <xsl:sort select="date" order="ascending" data-type="text"/>
                <tr> 
                    <td>
                        <xsl:value-of select="match"/>
                    </td>
                    <td>
                        <xsl:value-of select="location"/>
                    </td>
                    <td>
                        <xsl:value-of select="date"/>
                    </td>
                    <!--td>
                        <xsl:value-of select="result"/>
                    </td-->
                </tr>    
            </xsl:for-each>
        </table>
    </xsl:template>

</xsl:stylesheet>
