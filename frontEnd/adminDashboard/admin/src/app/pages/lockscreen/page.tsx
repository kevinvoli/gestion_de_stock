export default function LockScreen(){

  return (
    <>
      <body  className="lockscreen">
    {/* <!-- Automatic element /centering --> */}
    <div  className="lockscreen-wrapper">
      <div  className="lockscreen-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      {/* <!-- User name --> */}
      <div  className="lockscreen-name">John Doe</div>

      {/* <!-- START LOCK SCREEN ITEM --> */}
      <div  className="lockscreen-item">
        {/* <!-- lockscreen image --> */}
        <div  className="lockscreen-image">
          <img src="../../dist/img/user1-128x128.jpg" alt="user image"/>
        </div>
        {/* <!-- /.lockscreen-image --> */}

        {/* <!-- lockscreen credentials (contains the form) --> */}
        <form  className="lockscreen-credentials">
          <div  className="input-group">
            <input type="password"  className="form-control" placeholder="password" />
            <div  className="input-group-btn">
              <button  className="btn"><i  className="fa fa-arrow-right text-muted"></i></button>
            </div>
          </div>
        </form>
        {/* <!-- /.lockscreen credentials --> */}

      </div>
      {/* <!-- /.lockscreen-item --> */}
      <div  className="help-block text-center">
        Enter your password to retrieve your session
      </div>
      <div  className='text-center'>
        <a href="login.html">Or sign in as a different user</a>
      </div>
      <div  className='lockscreen-footer text-center'>
        Copyright &copy; 2014-2015 <b><a href="http://almsaeedstudio.com"  className='text-black'>Almsaeed Studio</a></b><br/>
        All rights reserved
      </div>
    </div>
    {/* <!-- /.center --> */}

    {/* <!-- jQuery 2.1.3 --> */}
    <script src="../../plugins/jQuery/jQuery-2.1.3.min.js"></script>
    {/* <!-- Bootstrap 3.3.2 JS --> */}
    <script src="../../bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
  </body>
    </>
  )
}



