import Checkbox from "@/components/UI/input/inputChackbox";



export default function Login(){
  return (
    <>
       <body  className="login-page">
    <div  className="login-box">
      <div  className="login-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      {/* <!-- /.login-logo --> */}
      <div  className="login-box-body">
        <p  className="login-box-msg">Sign in to start your session</p>
        <form action="../../index2.html" method="post">
          <div  className="form-group has-feedback">

            <input type="text"  className="form-control" placeholder="Email"/>
            <span  className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div  className="form-group has-feedback">
            <input type="password"  className="form-control" placeholder="Password"/>
            <span  className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div  className="row">
            <div  className="col-xs-8">    
              <div  className="checkbox icheck">
                <Checkbox/>
              </div>                        
            </div>
            {/* <!-- /.col --> */}
            <div  className="col-xs-4">
              <button type="submit"  className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
            {/* <!-- /.col --> */}
          </div>
        </form>

        <div  className="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#"  className="btn btn-block btn-social btn-facebook btn-flat"><i  className="fa fa-facebook"></i> Sign in using Facebook</a>
          <a href="#"  className="btn btn-block btn-social btn-google-plus btn-flat"><i  className="fa fa-google-plus"></i> Sign in using Google+</a>
        </div>
        {/* <!-- /.social-auth-links --> */}

        <a href="#">I forgot my password</a><br/>
        <a href="register.html"  className="text-center">Register a new membership</a>

      </div>
      {/* <!-- /.login-box-body --> */}
    </div>
    {/* <!-- /.login-box --> */}

    {/* <!-- jQuery 2.1.3 --> */}
    <script src="../../plugins/jQuery/jQuery-2.1.3.min.js"></script>
    {/* <!-- Bootstrap 3.3.2 JS --> */}
    <script src="../../bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    {/* <!-- iCheck --> */}
    <script src="../../plugins/iCheck/icheck.min.js" type="text/javascript"></script>
   
  </body>

    </>
  )
}

 