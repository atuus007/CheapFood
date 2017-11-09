<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %><head>
	<!--<link href="<c:url value="/resources/css/CFcss.css"/>" rel="stylesheet" type="text/css" charset="utf-8"/>
--><link href=".//resources//css//CFcss.css" rel="stylesheet" type="text/css" charset="utf-8"/>

    <script>
        var images = ["resources/images/food1.jpg","resources/images/food2.jpg","resources/images/food3.jpg","resources/images/food4.jpg","resources/images/food5.jpg","resources/images/CheapFoodsLogo.png"];
        var i = 0;
        var renew = setInterval(function(){

            document.getElementById("bannerImage").src = images[i];
            i++;
            if (i>=images.length){
                i=0;
            }

        },7000);
    </script>
    
<meta charset="utf-8">
    <title>Cheap Foods</title>
</head>

<body onload="myFunction()" style="margin:0; background-image: url(resources/images/hatter.jpg);">

    <script>
        var myVar;
        function myFunction() {
            myVar = setTimeout(showPage, 1200);
        }
        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("container").style.display = "block";
            document.getElementById("container2").style.display = "block";
        }
    </script>


<div class="loader" id="loader"></div>
    <div class="container" id="container" style="display:none;">
        <center>
            <table class="headertable">
                <tr>
                    <td>
                      <a href="">
                           <img src="resources/images/CheapFoodsLogo.png" style="width:50px;margin-right:195px;padding-top: 10px">
                       </a>
                    </td>
                    <td>
                        <p class="cim">Welcome to Cheap Foods!</p>
                    </td>
                    <td>
                        <a href="">
                            <img src="resources/images/CheapFoodsLogo.png" style="width:50px;margin-left:195px;padding-top: 10px">
                        </a>
                       </td>
                   </tr>
               </table>
           </center>

           <center>
              <hr width="900px">
               <div class="menu">
                   <table style="text-align: center;height: 40px">
                       <tr>
                           <td class="menutd">
                               <a href="index.jsp" class="headerlink">Főoldal</a>
                           </td>
                           <td class="menutd">
                               <a href="keszitok.jsp" class="headerlink">Készítők</a>
                           </td>
                           <td class="menutd">
                               <a href="foods.jsp" class="headerlink">Ételek</a>
                           </td>
                       </tr>
                   </table>
               </div>
           </center>
           <hr width="900px">
       </div>

       <center>
           <div class="container" id="container2">
               <div class="fooldal-leiras">
                   <table style="text-align: center;">
                       <tr>
                           <td>
                               <p>Üdvözöllek a Cheap Foods-on! Mivel ez az alkalmazás főleg kollégistáknak készült, segítségével megtalálhatod a pénztárcádnak megfelelő ételek receptjeit. Nem kell mást tenned, csak az Ételek menüre kattintani és ott kiválasztani mennyi összeget szánsz az étel elkészítésére.</p>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <img id="bannerImage" src="resources/images/CheapFoodsLogo.png" width="400px" height="300px">
                           </td>
                       </tr>
                   </table>
               </div>
           </div>
       </center>
   </body>
   <footer>
       <p class="footer-text">
           <script>document.write(new Date().getFullYear())</script>
           © Cheap Foods
       </p>
   </footer>
   </html>