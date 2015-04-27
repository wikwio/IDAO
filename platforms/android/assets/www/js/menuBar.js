    var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
                showRight = document.getElementById( 'showRight' ),             
                body = document.body;

        

                showRight.onclick = function() {

                if($('#cbp-spmenu-s2' ).hasClass('cbp-spmenu-open')){
                    localStorage.setItem('menuClick', 1);
                    $('#showRight').css( "margin-right", "0px" );
                    //$('#showRight').html('Afficher Menu');
                }else{
                    localStorage.setItem('menuClick', 0);
                    $('#showRight').css( "margin-right", "200px" );
                    //$('#showRight').html('Masquer Menu');
                    }
                classie.toggle( this, 'active' );
                classie.toggle( menuRight, 'cbp-spmenu-open' );
                disableOther( 'showRight' );
            };
            
            if(localStorage.menuClick === undefined ||  localStorage.menuClick == 0){
                localStorage.setItem('menuClick', 1);
                $( "#showRight" ).trigger( "click" );
               
            }
            
            //$( "#showRight" ).trigger( "click" );
            
            function disableOther( button ) {
                
                if( button !== 'showRight' ) {
                    classie.toggle( showRight, 'disabled' );
                }               
            }



           /*showRight.onclick = function() {

                if($('#cbp-spmenu-s2' ).hasClass('cbp-spmenu-close')){
                    localStorage.setItem('menuClick', 1);
                    $('#showRight').css( "margin-left", "0px" );
                    //$('#showRight').html('Afficher Menu');
                }else{
                    localStorage.setItem('menuClick', 0);
                    $('#showRight').css( "margin-left", "200px" );
                    //$('#showRight').html('Masquer Menu');
                    }
                classie.toggle( this, 'active' );
                classie.toggle( menuRight, 'cbp-spmenu-close' );
                disableOther( 'showRight' );
            };
            
            if(localStorage.menuClick === undefined ||  localStorage.menuClick == 0){
                localStorage.setItem('menuClick', 1);
                $( "#showRight" ).trigger( "click" );
               
            }
            
            //$( "#showRight" ).trigger( "click" );
            
            function disableOther( button ) {
                
                if( button !== 'showRight' ) {
                    classie.toggle( showRight, 'disabled' );
                }               
            }*/