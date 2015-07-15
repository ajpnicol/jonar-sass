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
        <link rel="stylesheet" type="text/css" href="css/app.css" />
        <META HTTP-EQUIV="Content-Type" content="text/html; charset=UTF-8"/>
        <!--[if lt IE 9]>
            <link rel="stylesheet" href="ie.css" type="text/css" media="screen" /> 
        <![endif]-->

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->  
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript">
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
        <script type="text/javascript">
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&status=0";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script> 
    </head> 

<body id="login" class="login">
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
              <a class="navbar-brand" href="index.html"><img src="images/jonarlogo2.png"/></a>
            </div>
    
          <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse " id="menu">             
              <ul class="nav navbar-nav navbar-right">
                <li data-menuanchor="about"><a href="about.html">Who we are</a></li>
                <li><a href="why-erp-sucks.html">Why ERP sucks</a></li>
                <li><a href="reinventing-erp.html">Reinventing ERP</a></li>
                <li><a href="partners.html">Partners</a></li>
                <li><a href="newsroom.html">Newsroom</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="signUp.html" id="trynow"><button class="btn btn-primary navbar-btn">Want in?</button></a></li>
                <li><a id="login" href="login.php">Login</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container -->
        </nav>



    
 
    <div class="container">
        <main id="main-area" class="section">
            <form method="post" action="http://support.jonar.com/support/default.asp?" class="form-signin" role="form" name="formWithPerson" id="formWithPerson">
                <input type="hidden" name="pre" value="preLogon" />
                <input type="hidden" name="dest" value="" />
                <div class="miniLogOn">
                    <h3 class="text-center form-signin-heading">Please sign in</h3>
                    <input type="email" name="sPerson" id="sPerson" value="" class="form-control" placeholder="email " maxlength="50" required="" autofocus="" autocapitalize="off" autocorrect="off"/>
                    <input type="password" class="form-control" id="sPassword" name="sPassword" size="20" placeholder="password" value="" maxlength="50" required=""/>
                    <button class="btn btn-lg btn-primary btn-block" type="submit" id="Button_OK">Sign in</button>
                    <div class="checkbox">
                        <label for="remember-me" title="Checking this box will keep you logged on even after you close your browser.  When you come back to FogBugz, you will already be logged on.">
                        <input type="checkbox" name="fRememberPassword" value="1" id="fRememberPassword"/> Remember Me
                        </label>
                    </div>
                    <div>
                        <a href="http://support.jonar.com/support/default.asp?pg=pgForgotPassword">Forgot Password</a>
                    </div>   
                    <div>
                        <a href="#" id="requestButton" data-toggle="modal" data-target="#requestModal" >Request Login Information</a>
                    </div>           
                  </div>
            </form> 
            <?php include_once('bin/send_form_email.php'); ?>
            <div id="requestContainer">
                <div class="modal fade in" id="requestModal" tableindex="-1" role="dialog" aria-labelledby="requestModal" aria-hidden="true">
                  <div class="modal-dialog"> 
                    <div class="modal-content"> 
                        <div class="modal-header">
                            <button type="button" class="close pull-right" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel">Request login information</h4>
                        </div>
                        <div class="modal-body" id="body">
                            <form name="requestForm" method="post" action="login.php" class="form-horizontal" id="requestForm" enctype="text/plain">
                                <div class="form-group">
                                    <label for="name" class="col-sm-3 control-label">Name</label>
                                    <div class="col-sm-8">
                                      <input type="text" class="form-control" id="name" name="name" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col-sm-3 control-label">Email</label>
                                    <div class="col-sm-8">
                                      <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="company" class="col-sm-3 control-label">Company</label>
                                    <div class="col-sm-8">
                                      <input type="text" class="form-control" id="company" name="company" placeholder="Company">
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
            </div>
        </main> <!-- /section -->   
            
        <div class="footer">
            <footer>
                <i class="glyphicon glyphicon-globe"></i>
                <a disabled class="disabled">Canada - English</a>&nbsp;|&nbsp;<a href="login_fr.php">Canada - Fran&ccedil;ais</a>
                <p>© 2015 Jonar Systems Inc.</p>
            </footer>
        </div>
    </div> <!-- /container  -->

    <script src="js/jqBootstrapValidation.min.js"></script> 
    <script src="js/request.min.js"></script>   
</body> 
</html>