<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Игра</h1>
                <table border="3" align="center" >
                    <tr>
                        <th>Име</th>
                        <th>Бележка</th>
                        <th>Тип</th>
                    </tr>
                    <xsl:for-each select="game_catalog/game">
                        <tr>
                            <td><xsl:call-template name="name"/></td>
                            <td><xsl:call-template name="game_note"/></td>
                            <td><xsl:call-template name="game_type"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="name">
        <xsl:value-of select="name/."/>
    </xsl:template>

    <xsl:template name="game_note">
        <xsl:value-of select="note/."/>
    </xsl:template>

    <xsl:template name="game_type">
        <xsl:value-of select="type/."/>
    </xsl:template>

</xsl:stylesheet>

