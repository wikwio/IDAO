    var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
                showRight = document.getElementById( 'showRight' ),             
                body = document.body;

                showRight.onclick = function() {

                if($('#cbp-spmenu-s2' ).hasClass('cbp-spmenu-open')){
                    localStorage.setItem('menuClick', 1);
                    $('#showRight').css( "margin-right", "0px" );
                }else{
                    localStorage.setItem('menuClick', 0);
                    $('#showRight').css( "margin-right", "200px" );
                    }
                classie.toggle( this, 'active' );
                classie.toggle( menuRight, 'cbp-spmenu-open' );
                disableOther( 'showRight' );
            };
            
            if(localStorage.menuClick === undefined ||  localStorage.menuClick == 0){
                localStorage.setItem('menuClick', 1);
                $( "#showRight" ).trigger( "click" );
               
            }
            
            function disableOther( button ) {
                
                if( button !== 'showRight' ) {
                    classie.toggle( showRight, 'disabled' );
                }               
            }

        