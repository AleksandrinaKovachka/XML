<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>

    <xsl:template match="/">
        <xsl:for-each select="/game_catalog/game">

            Име:  <xsl:value-of select="name"/>
            Бележка:  <xsl:value-of select="note"/>
            Тип на играта:  <xsl:value-of select="type"/>

        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>