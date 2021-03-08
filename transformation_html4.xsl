<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Информация за производител</h1>
                <table border="3" align="center" >
                    <tr>
                        <th>Име</th>
                        <th>Град</th>
                        <th>Държава</th>
                        <th>Тип</th>
                    </tr>
                    <tr>
                        <tr>
                            <xsl:for-each select="game_catalog/game">
                                <tr>
                                    <td><xsl:value-of select="developer/name"/></td>
                                <td><xsl:value-of select="developer/headquarters/city"/></td>
                                <td><xsl:value-of select="developer/headquarters/country"/></td>
                                <td><xsl:value-of select="developer/headquarters/type"/></td>
                                </tr>
                            </xsl:for-each>
                        </tr>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>