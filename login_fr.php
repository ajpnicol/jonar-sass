<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="description" content="Revolutionize the way you manage your business with our revolutionary  cloud-based ERP system. Our aim is to create beautiful software with serious functionality.">
        <meta name="author" content="Jonar">
        <meta name="keywords" content="">  
        <meta name="robots" content="NOODP">      

        <link rel="shortcut icon" href="images/favicon.png">

        <title>Jonar</title>
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" type="text/css" href="css/app.css" />

        <!-- Custom styles for this template -->
        <link rel="stylesheet" type="text/css" href="css/jquery.fullPage.css" />
        <link rel="stylesheet" type="text/css" href="css/index.css"/>

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->  
        		<script src="js/jquery.min.js"></script>
		<script src="js/jquery-ui.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
	    <script src="js/index.min.js"></script>        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js?ver=1.4.2"></script>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
         
          ga('create', 'UA-25499576-1', 'auto');
          ga('send', 'pageview');
        </script>  

        <script type="text/javascript">
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-25499576-1']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script> 
        <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&status=0";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>   
        <!--
            if(location.search != ""){
                curLang = location.search.substr(1);
            }
            else curLang = 'en';
        //-->
    </head>
<body class="login">
    <div id="fb-root"></div>
            <nav class="navbar navbar-fixed-top navbar-blue">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index_fr.html"><img src="images/jonarlogo2.png"/></a>
            </div>
    

          <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse " id="menu">             
              <ul class="nav nav-fr navbar-nav navbar-right">
                <li data-menuanchor="about"><a href="about_fr.html">&Agrave; propos</a></li>
                <li><a href="why-erp-sucks_fr.html">Les PGI pourris</a></li>
                <li><a href="reinventing-erp_fr.html">Réinventer les PGI</a></li>
                <li><a href="partners_fr.html">Partenaires</a></li>
                <li><a href="newsroom_fr.html">Nouvelles</a></li>
                <li><a href="contact_fr.html">Contact</a></li>
                <li><a href="signUp_fr.html" id="trynow"><button class="btn btn-primary">Participez!</button></a></li>
                <li><a id="login" href="login_fr.php">Connecter</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container -->
        </nav>                        
    <div class="container">
        <main id="main-area" class="section">        
            <form method="post" action="http://support.jonar.com/support/default.asp?" name="formWithPerson" id="formWithPerson" class="form-signin" role="form">
                <input type="hidden" name="pre" value="preLogon" />
                <input type="hidden" name="dest" value="" />
            	<h3 class="text-center form-signin-heading">S’il vous plaît, connectez-vous</h3>
            	<input type="email" class="form-control" placeholder="Adresse e-mail " maxlength="50" required="" autofocus="" autocapitalize="off" autocorrect="off"/>
            	<input type="password" class="form-control" placeholder="Mot de passe" maxlength="50" required=""/>
                
                <button class="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
                
                <div class="checkbox">
                    <label for="remember-me" title="Checking this box will keep you logged on even after you close your browser.  When you come back to FogBugz, you will already be logged on.">
                    <input type="checkbox"/> Se souvenir de moi
                    </label>
                </div>
                <div>                
                    <a href="http://support.jonar.com/support/default.asp?pg=pgForgotPassword">Mot De Passe Oublié</a>
                </div>
                <div class="requestContainer">
                    <a href="#" id="requestButton" data-toggle="modal" data-target="#requestModal" >Request Login Information</a>
                </div>
            </form>

            <?php include_once('bin/login_request.php'); ?>
            <div class="modal fade in" id="requestModal" tableindex="-1" role="dialog" aria-labelledby="requestModal" aria-hidden="true">
              <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-header">
                        <button type="button" class="close pull-right" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">Request login information</h4>
                    </div>
                    <div class="modal-body">
                        <form name="requestForm" class="form-horizontal" id="requestForm" action="./bin/login_request.php" method="post" enctype="text/plain">
                            <div class="form-group">
                                <label for="name" class="col-sm-3 control-label">Nom</label>
                                <div class="col-sm-8">
                                  <input type="text" class="form-control" id="name" name="name" placeholder="Nom">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email" class="col-sm-3 control-label">E-mail</label>
                                <div class="col-sm-8">
                                  <input type="email" class="form-control" id="email" name="email" placeholder="E-mail">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="company" class="col-sm-3 control-label">Compagnie</label>
                                <div class="col-sm-8">
                                  <input type="text" class="form-control" id="company" name="company" placeholder="Compagnie">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" id="send">Send</button>
                    </div>
                </div>
              </div>
            </div>
            
        </main> <!-- /section -->
        <div class="footer">
            <footer>
                <span class="glyphicon glyphicon-globe"></span>
                <a href="login.php">Canada - English</a>&nbsp;|&nbsp;<a disabled class="disabled">Canada - Fran&ccedil;ais</a>            
                <p>© 2015 Jonar Systems Inc.</p>
            </footer>
        </div>
    </div>

<!-- JS FILES -->
<!-- This following line is needed only in case of using other easing effect rather than "linear", "swing" or "easeInQuart". You can also add the full jQuery UI instead of this file if you prefer -->
<script src="js/jquery.easings.min.js"></script>

<!-- This following line needed in the case of using the plugin option `scrollOverflow:true` -->
<script type="text/javascript" src="js/jquery.slimscroll.min.js"></script>

<script type="text/javascript" src="js/jquery.fullPage.min.js"></script>
		<script type="text/javascript">
	        $(document).ready(function() {
	          function initialization(){
	            $('#fullpage').fullpage({ 
	            	scrollingSpeed: 1000,
		            resize: false,
		            fixedElements: '#navigation',
		            touchSensitivity: 15,
		            verticalCentered: false,
		            responsive: 480,

		            afterRender: function(){
						document.addEventListener("pointermove",handleMove,false);
						function handleMove(evt) {
						    if(evt.pointerType == "mouse") {
						        $(document).off('pointerdown');
						        $(document).off('pointermove');
						    }
						    document.removeEventListener("pointermove",handleMove,false);
						}
	        		},

	        		afterResize: function(){
						document.addEventListener("pointermove",handleMove,false);
						function handleMove(evt) {
						    if(evt.pointerType == "mouse") {
						        setTimeout(function(){
						            $(document).off('pointerdown');
						            $(document).off('pointermove');
						        }, 1);
						    }
						    document.removeEventListener("pointermove",handleMove,false);
						}
	        		}
	                
	            });
			  }

	            initialization();
	            $('#moveSectionUp').click(function(e){
	                e.preventDefault();
	                $.fn.fullpage.moveSectionUp();
	            });

	            $('#moveSectionDown').click(function(e){
	                e.preventDefault();
	                $.fn.fullpage.moveSectionDown();
	            });
	            
	            $('#moveTo').click(function(e){
	                e.preventDefault();	
	            $.fn.fullpage.moveTo(1);
	            });

	        });
	    </script> 	   
 <script src="/js/jqBootstrapValidation.min.js"></script> 
</body>
</html>