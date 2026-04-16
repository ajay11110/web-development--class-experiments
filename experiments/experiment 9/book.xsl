<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Book Information</title>
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #f4f7f6;
                        margin: 40px;
                    }
                    h2 {
                        color: #2c3e50;
                        text-align: center;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #fff;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    th, td {
                        padding: 15px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #3498db;
                        color: white;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                    .price {
                        font-weight: bold;
                        color: #27ae60;
                    }
                </style>
            </head>
            <body>
                <h2>Library Catalog - Experiment 9</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Publisher</th>
                        <th>Edition</th>
                        <th>Price</th>
                    </tr>
                    <xsl:for-each select="books/book">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="author"/></td>
                            <td><xsl:value-of select="isbn"/></td>
                            <td><xsl:value-of select="publisher"/></td>
                            <td><xsl:value-of select="edition"/></td>
                            <td class="price">$<xsl:value-of select="price"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
