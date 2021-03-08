<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <game_catalog>
            <xsl:for-each select="game_catalog/game">
                <game>
                    <xsl:call-template name="game_name"/>
                    <note_type><xsl:call-template name="game_note"/></note_type>
                    <game_type><xsl:call-template name="type"/></game_type>
                    <still_playing><xsl:call-template name="still_playing"/></still_playing>
                </game>
            </xsl:for-each>
        </game_catalog>
    </xsl:template>

    <xsl:template name="game_name">
        <code>
            <xsl:value-of select="id"/>
        </code>
        <name>
            <xsl:value-of select="name"/>
        </name>
    </xsl:template>

    <xsl:template name="game_note">
        <xsl:value-of select="note"/>
    </xsl:template>

    <xsl:template name="type">
        <xsl:value-of select="type"/>
    </xsl:template>

    <xsl:template name="still_playing">  <xsl:value-of select="still_playing/@present"/>
        <xsl:value-of select="playing"/>
    </xsl:template>

</xsl:stylesheet>