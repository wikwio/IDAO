 window.i8ln = {
                "en" : {
                        "identification" : "New identification",
                        "portin" : "Growth form",
                        "phylo"     : "Leaf arrangement",
                        "profelision"  : "Prefoliation",
                        "searc"     : "Search",
                        "listdes"     : "Species list" ,
                        "resultant"     : "Results" ,
                        "about"     : "About this version" ,
                        "help"     : "Help"   ,
                        "menu"     :"Menu",
                        "back"      :"Back",
                        "nextbut"  :"Next",
                        "cancel":"Cancel",
                        "commonnames":"Common names",
                        "familie":"Family names",
                        "nomspecies":"Species names",
                        "placehholderfamilie":"Search for Family names",
                        "placehholderspecies":"Search for Species names",
                        "placehholdercomun":"Search for Common names",
                        "resultpercentage":"Percentage",
                        "resulterr":"Errors",
                        "resultview":"View",
                        "species":"Species",
                        "at":"at",
                        "contrabutname":"Graphical view",
                        "graphview":"Search for species Graphical representation"
                },
                "fr" :{
                        "identification" : "Nouvelle identification",
                        "portin" : "Port",
                        "phylo"     : "Phyllotaxie",
                        "profelision"  : "Préfoliaison",
                        "searc"     : "Recherche",
                        "listdes"     : "Liste des espèces" ,
                        "resultant"     : "Résultats" ,
                        "about"     : "A propos de cette version" ,
                        "help"     : "Aide" ,
                        "menu":"Menu",
                        "back" :"Précédent",
                        "nextbut" :"Prochain",
                        "cancel":"annuler",
                        "commonnames":"Noms vernaculaires",
                        "familie":"Familles",
                        "nomspecies":"Espèces",
                        "placehholderfamilie":"recherche de famille",
                        "placehholderspecies":"recherche d'espèces",
                        "placehholdercomun":"recherche de noms vernaculaires",
                        "resultpercentage":"Pourcentage",
                        "resulterr":"Erreurs",
                        "resultview":"vue",
                        "species":"Espèces",
                        "at"  : "à",
                    "contrabutname":"Portrait robot",
                    "graphview":"Rechercher le portrait robot des espèces"

                    
                }
        }

       $(".languagecheck").click(function(){

                var that = $(this);
                var lan = that.attr('rel');
                if(that.hasClass('ui-btn-active'))
                    return false;

                $(".languagecheck").removeClass('ui-btn-active');
                that.addClass('ui-btn-active');

                if(lan=="en"){
                    $(".langfr").removeClass('ui-btn-active');
                    $(".langen").addClass('ui-btn-active');
                     $(".langfrcont").removeClass('ui-btn-active');
                    $(".langencont").addClass('ui-btn-active');

                }
                else if(lan=="fr"){
                    $(".langen").removeClass('ui-btn-active');
                    $(".langfr").addClass('ui-btn-active');
                     $(".langencont").removeClass('ui-btn-active');
                    $(".langfrcont").addClass('ui-btn-active');
                }

                $(".newidentification").html(window.i8ln[lan].identification);
                $(".porting").html(window.i8ln[lan].portin);
                $(".phyll").html(window.i8ln[lan].phylo);
                $(".prefo").html(window.i8ln[lan].profelision);
                $(".search").html(window.i8ln[lan].searc);
                $(".liste").html(window.i8ln[lan].listdes);
                $(".result").html(window.i8ln[lan].resultant);
                $(".propo").html(window.i8ln[lan].about);
                $(".help").html(window.i8ln[lan].help);
                $("#showRight").html(window.i8ln[lan].menu);
                $(".cancelbutton").html(window.i8ln[lan].cancel);
                $(".nextbutton").html(window.i8ln[lan].nextbut);
                $("#backbutton").html(window.i8ln[lan].back);
                $("#backbutton1").html(window.i8ln[lan].back);
                $("#backbutton2").html(window.i8ln[lan].back);
                $(".button1").html(window.i8ln[lan].commonnames);
                $(".button2").html(window.i8ln[lan].familie);
                $(".button3").html(window.i8ln[lan].nomspecies);
                $(".button4").html(window.i8ln[lan].contrabutname);
                $(".searchfam").attr("placeholder",window.i8ln[lan].placehholderfamilie);
                $(".searchspec").attr("placeholder",window.i8ln[lan].placehholderspecies);
                $(".searchcomun").attr("placeholder",window.i8ln[lan].placehholdercomun);
                $(".searchcontra").attr("placeholder",window.i8ln[lan].graphview);

                var listvalues = localStorage.getItem('percentage'); 
                var finalvalue = JSON.parse(listvalues);
                var number = finalvalue.count;
                var value = finalvalue.val;
                updateProcess(number,value);
       });
 