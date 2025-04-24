import './style.css'

export default function Documentation(){

  return (
    <>
            <div  className="content-header">
          <h1>
            AdminLTE Documentation
            <small>Current version 2.0</small>
          </h1>
          <ol  className="breadcrumb">
            <li><a href="#"><i  className="fa fa-dashboard"></i> Home</a></li>
            <li  className="active">Documentation</li>
          </ol>
        </div>

        {/* <!-- Main content --> */}
        <div  className="content body">

          <div  className="callout callout-warning">
            <h4>Warning!</h4>
            This documentation is under development. Some information may change as the progress of creating the documentation continues.
          </div>
          <section id='introduction'>
            <h2  className='page-header'><span>Introduction</span></h2>
            <p  className='lead'>
              <b>AdminLTE</b> is a popular open source WebApp template for admin dashboards and control panels.
              It is a responsive HTML template that is based on the CSS framework Bootstrap 3.
              It utilizes all of the Bootstrap components in its design and re-styles many
              commonly used plugins to create a consistent design that can be used as a user
              interface for backend applications. AdminLTE is based on a modular design, which
              allows it to be easily customized and built upon. This documentation will guide you through
              installing the template and exploring the various components that are bundled with the template.
            </p>
          </section>
          {/* <!-- /#introduction --> */}

          {/* <!-- ============================================================= --> */}

          <section id='download'>
            <h2  className='page-header'><span>Download</span></h2>
            <p  className='lead'>
              AdminLTE can be downloaded in two different versions, each appealing to different
              skill levels and use case.
            </p>
            <div  className='row'>
              <div  className='col-sm-6'>
                <div  className='box box-primary'>
                  <div  className='box-header with-border'>
                    <h3  className='box-title'>Ready</h3>
                    <span  className='label label-primary pull-right'><i  className='fa fa-html5'></i></span>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className='box-body'>
                    <p>Compiled and ready to use in production. Download this version
                      if you don't want to customize AdminLTE's LESS files.</p>
                    <a href='http://almsaeedstudio.com/download/AdminLTE-dist'  className='btn btn-primary'><i  className='fa fa-download'></i> Download</a>
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              {/* <!-- /.col --> */}
              <div  className='col-sm-6'>
                <div  className='box box-danger'>
                  <div  className='box-header with-border'>
                    <h3  className='box-title'>Source Code</h3>
                    <span  className='label label-danger pull-right'><i  className='fa fa-database'></i></span>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className='box-body'>
                    <p>All files including the compiled CSS. Download this version
                      if you plan on customizing the template. <b>Requires a LESS compiler.</b></p>
                    <a href='http://almsaeedstudio.com/download/AdminLTE'  className='btn btn-danger'><i  className='fa fa-download'></i> Download</a>
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
            <pre  className='hierarchy'><code  className="language-bash" data-lang="bash">File Hierarchy of the Source Code Package

AdminLTE/
├── dist/
│   ├── CSS/
│   ├── JS
│   ├── img
├── build/
│   ├── less/
│   │   ├── AdminLTE's Less files
│   └── Bootstrap-less/ (Only for reference. No modifications have been made)
│       ├── mixins/
│       ├── variables.less
│       ├── mixins.less
└── plugins/
    ├── All the customized plugins CSS and JS files</code></pre>
          </section>

          {/* <!-- ============================================================= --> */}

          <section id="dependencies">
            <h2  className="page-header"><span>Dependencies</span></h2>
            <p  className="lead">AdminLTE depends on two main frameworks.
              The downloadable package contains both of these libraries, so you don't have to manually download them.</p>
            <ul  className="lead">
              <li><a href="http://getbootstrap.com" target="_blank">Bootstrap 3</a></li>
              <li><a href="http://jquery.com/" target="_blank">jQuery 1.11+</a></li>
              <li><a href="#plugins">All other plugins are listed below</a></li>
            </ul>
          </section>

          {/* <!-- ============================================================= --> */}

          <section id='advice'>
            <h2  className='page-header'><span>A Word of Advice</span></h2>
            <p  className='lead'>
              Before you go to see your new awesome theme, here are few tips on how to familiarize yourself with it:
            </p>

            <ul>
              <li><b>AdminLTE is based on <a href="http://getbootstrap.com/" target="_blank">Bootstrap 3</a>.</b> If you are unfamiliar with Bootstrap, visit their website and read through the documentation. All of Bootstrap components have been modified to fit the style of AdminLTE and provide a consistent look throughout the template. This way, we guarantee you will get the best of AdminLTE.</li>
              <li><b>Go through the pages that are bundled with the theme.</b> Most of the template example pages contain quick tips on how to create or use a component which can be really helpful when you need to create something on the fly.</li>
              <li><b>Documentation.</b> We are trying our best to make your experience with AdminLTE be smooth. One way to achieve that is to provide documentation and support. If you think that something is missing from the documentation, please do not hesitate to create an issue to tell us about it. Also, if you would like to contribute, email the support team at <a href="mailto:support@almsaeedstudio.com">support@almsaeedstudio.com</a>.</li>
              <li><b>Built with <a href="http://lesscss.org/" target="_blank">LESS</a>.</b> This theme uses the LESS compiler to make it easier to customize and use. LESS is easy to learn if you know CSS or SASS. It is not necessary to learn LESS but it will benefit you a lot in the future.</li>
              <li><b>Hosted on <a href="https://github.com/almasaeed2010/AdminLTE/" target="_blank">GitHub</a>.</b> Visit our GitHub repository to view issues, make requests, or contribute to the project.</li>
            </ul>
            <p>
              <b>Note:</b> LESS files are better commented than the compiled CSS file.
            </p>
          </section>

          {/* <!-- ============================================================= --> */}

          <section id='layout'>
            <h2  className='page-header'><span>Layout</span></h2>
            <p  className='lead'>The layout consists of four major parts:</p>
            <ul>
              <li>Wrapper <code>.wrapper</code>. A div that wraps the whole site.</li>
              <li>Main Header <code>.main-header</code>. Contains the logo and navbar.</li>
              <li>Sidebar <code>.sidebar-wrapper</code>. Contains the user panel and sidebar menu.</li>
              <li>Content <code>.content-wrapper</code>. Contains the page header and content.</li>
            </ul>
            <div  className="callout callout-danger lead">
              <h4>Tip!</h4>
              <p>Use the blank example page located in <a href="../pages/examples/blank.html">pages/examples/blank.html</a> to build your own pages.</p>
            </div>
            <p>A full layout example for a quick start</p>
            {/* <pre  className='prettyprint'>
&LT;!DOCTYPE html>
&LT;html>
  &LT;head>
    &LT;meta charset="UTF-8">
    &LT;title>AdminLTE 2 | Dashboard&LT;/title>
    &LT;meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    &LT;!-- Bootstrap 3.3.2 -->
    &LT;link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    &LT;!-- Font Awesome Icons -->
    &LT;link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    &LT;!-- Ionicons -->
    &LT;link href="http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    &LT;!-- Theme style -->
    &LT;link href="dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    &LT;!-- AdminLTE Skins. Choose a skin from the css/skins 
         folder instead of downloading all of them to reduce the load. -->
    &LT;link href="dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />

    &LT;!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    &LT;!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    &LT;!--[if lt IE 9]>
        &LT;script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js">&LT;/script>
        &LT;script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js">&LT;/script>
    &LT;![endif]-->
  &LT;/head>
  &LT;body  className="skin-blue">
    &LT;!-- Site wrapper -->
    &LT;div  className="wrapper">
      
      &LT;header  className="main-header">
        &LT;a href="index2.html"  className="logo">&LT;b>Admin&LT;/b>LTE&LT;/a>
        &LT;!-- Header Navbar: style can be found in header.less -->
        &LT;nav  className="navbar navbar-static-top" role="navigation">
          &LT;!-- Sidebar toggle button-->
          &LT;a href="#"  className="sidebar-toggle" data-toggle="offcanvas" role="button">
            &LT;span  className="sr-only">Toggle navigation&LT;/span>
            &LT;span  className="icon-bar">&LT;/span>
            &LT;span  className="icon-bar">&LT;/span>
            &LT;span  className="icon-bar">&LT;/span>
          &LT;/a>
          &LT;div  className="navbar-custom-menu">
            &LT;ul  className="nav navbar-nav">
              &LT;!-- Messages: style can be found in dropdown.less-->
              &LT;li  className="dropdown messages-menu">
                &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                  &LT;i  className="fa fa-envelope-o">&LT;/i>
                  &LT;span  className="label label-success">4&LT;/span>
                &LT;/a>
                &LT;ul  className="dropdown-menu">
                  &LT;li  className="header">You have 4 messages&LT;/li>
                  &LT;li>
                    &LT;!-- inner menu: contains the actual data -->
                    &LT;ul  className="menu">
                      &LT;li>&LT;!-- start message -->
                        &LT;a href="#">
                          &LT;div  className="pull-left">
                            &LT;img src="dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image"/>
                          &LT;/div>
                          &LT;h4>
                            Support Team
                            &LT;small>&LT;i  className="fa fa-clock-o">&LT;/i> 5 mins&LT;/small>
                          &LT;/h4>
                          &LT;p>Why not buy a new awesome theme?&LT;/p>
                        &LT;/a>
                      &LT;/li>&LT;!-- end message -->
                    &LT;/ul>
                  &LT;/li>
                  &LT;li  className="footer">&LT;a href="#">See All Messages&LT;/a>&LT;/li>
                &LT;/ul>
              &LT;/li>
              &LT;!-- Notifications: style can be found in dropdown.less -->
              &LT;li  className="dropdown notifications-menu">
                &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                  &LT;i  className="fa fa-bell-o">&LT;/i>
                  &LT;span  className="label label-warning">10&LT;/span>
                &LT;/a>
                &LT;ul  className="dropdown-menu">
                  &LT;li  className="header">You have 10 notifications&LT;/li>
                  &LT;li>
                    &LT;!-- inner menu: contains the actual data -->
                    &LT;ul  className="menu">
                      &LT;li>
                        &LT;a href="#">
                          &LT;i  className="fa fa-users text-aqua">&LT;/i> 5 new members joined today
                        &LT;/a>
                      &LT;/li>
                    &LT;/ul>
                  &LT;/li>
                  &LT;li  className="footer">&LT;a href="#">View all&LT;/a>&LT;/li>
                &LT;/ul>
              &LT;/li>
              &LT;!-- Tasks: style can be found in dropdown.less -->
              &LT;li  className="dropdown tasks-menu">
                &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                  &LT;i  className="fa fa-flag-o">&LT;/i>
                  &LT;span  className="label label-danger">9&LT;/span>
                &LT;/a>
                &LT;ul  className="dropdown-menu">
                  &LT;li  className="header">You have 9 tasks&LT;/li>
                  &LT;li>
                    &LT;!-- inner menu: contains the actual data -->
                    &LT;ul  className="menu">
                      &LT;li>&LT;!-- Task item -->
                        &LT;a href="#">
                          &LT;h3>
                            Design some buttons
                            &LT;small  className="pull-right">20%&LT;/small>
                          &LT;/h3>
                          &LT;div  className="progress xs">
                            &LT;div  className="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              &LT;span  className="sr-only">20% Complete&LT;/span>
                            &LT;/div>
                          &LT;/div>
                        &LT;/a>
                      &LT;/li>&LT;!-- end task item -->
                    &LT;/ul>
                  &LT;/li>
                  &LT;li  className="footer">
                    &LT;a href="#">View all tasks&LT;/a>
                  &LT;/li>
                &LT;/ul>
              &LT;/li>
              &LT;!-- User Account: style can be found in dropdown.less -->
              &LT;li  className="dropdown user user-menu">
                &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                  &LT;img src="dist/img/user2-160x160.jpg"  className="user-image" alt="User Image"/>
                  &LT;span  className="hidden-xs">Alexander Pierce&LT;/span>
                &LT;/a>
                &LT;ul  className="dropdown-menu">
                  &LT;!-- User image -->
                  &LT;li  className="user-header">
                    &LT;img src="dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image" />
                    &LT;p>
                      Alexander Pierce - Web Developer
                      &LT;small>Member since Nov. 2012&LT;/small>
                    &LT;/p>
                  &LT;/li>
                  &LT;!-- Menu Body -->
                  &LT;li  className="user-body">
                    &LT;div  className="col-xs-4 text-center">
                      &LT;a href="#">Followers&LT;/a>
                    &LT;/div>
                    &LT;div  className="col-xs-4 text-center">
                      &LT;a href="#">Sales&LT;/a>
                    &LT;/div>
                    &LT;div  className="col-xs-4 text-center">
                      &LT;a href="#">Friends&LT;/a>
                    &LT;/div>
                  &LT;/li>
                  &LT;!-- Menu Footer-->
                  &LT;li  className="user-footer">
                    &LT;div  className="pull-left">
                      &LT;a href="#"  className="btn btn-default btn-flat">Profile&LT;/a>
                    &LT;/div>
                    &LT;div  className="pull-right">
                      &LT;a href="#"  className="btn btn-default btn-flat">Sign out&LT;/a>
                    &LT;/div>
                  &LT;/li>
                &LT;/ul>
              &LT;/li>
            &LT;/ul>
          &LT;/div>
        &LT;/nav>
      &LT;/header>

      &LT;!-- =============================================== -->

      &LT;!-- Left side column. contains the sidebar -->
      &LT;aside  className="main-sidebar">
        &LT;!-- sidebar: style can be found in sidebar.less -->
        &LT;section  className="sidebar">
          &LT;!-- Sidebar user panel -->
          &LT;div  className="user-panel">
            &LT;div  className="pull-left image">
              &LT;img src="dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image" />
            &LT;/div>
            &LT;div  className="pull-left info">
              &LT;p>Alexander Pierce&LT;/p>

              &LT;a href="#">&LT;i  className="fa fa-circle text-success">&LT;/i> Online&LT;/a>
            &LT;/div>
          &LT;/div>
          &LT;!-- search form -->
          &LT;form action="#" method="get"  className="sidebar-form">
            &LT;div  className="input-group">
              &LT;input type="text" name="q"  className="form-control" placeholder="Search..."/>
              &LT;span  className="input-group-btn">
                &LT;button type='submit' name='seach' id='search-btn'  className="btn btn-flat">&LT;i  className="fa fa-search">&LT;/i>&LT;/button>
              &LT;/span>
            &LT;/div>
          &LT;/form>
          &LT;!-- /.search form -->
          &LT;!-- sidebar menu: : style can be found in sidebar.less -->
          &LT;ul  className="sidebar-menu">
            &LT;li  className="header">MAIN NAVIGATION&LT;/li>
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-dashboard">&LT;/i> &LT;span>Dashboard&LT;/span> &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="index.html">&LT;i  className="fa fa-circle-o">&LT;/i> Dashboard v1&LT;/a>&LT;/li>
                &LT;li>&LT;a href="index2.html">&LT;i  className="fa fa-circle-o">&LT;/i> Dashboard v2&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-files-o">&LT;/i>
                &LT;span>Layout Options&LT;/span>
                &LT;span  className="label label-primary pull-right">4&LT;/span>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="../layout/top-nav.html">&LT;i  className="fa fa-circle-o">&LT;/i> Top Navigation&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../layout/boxed.html">&LT;i  className="fa fa-circle-o">&LT;/i> Boxed&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../layout/fixed.html">&LT;i  className="fa fa-circle-o">&LT;/i> Fixed&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../layout/collapsed-sidebar.html">&LT;i  className="fa fa-circle-o">&LT;/i> Collapsed Sidebar&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li>
              &LT;a href="../widgets.html">
                &LT;i  className="fa fa-th">&LT;/i> &LT;span>Widgets&LT;/span> &LT;small  className="label pull-right bg-green">Hot&LT;/small>
              &LT;/a>
            &LT;/li>            
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-pie-chart">&LT;/i>
                &LT;span>Charts&LT;/span>
                &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="../charts/morris.html">&LT;i  className="fa fa-circle-o">&LT;/i> Morris&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../charts/flot.html">&LT;i  className="fa fa-circle-o">&LT;/i> Flot&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../charts/inline.html">&LT;i  className="fa fa-circle-o">&LT;/i> Inline charts&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>            
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-laptop">&LT;/i>
                &LT;span>UI Elements&LT;/span>
                &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="../UI/general.html">&LT;i  className="fa fa-circle-o">&LT;/i> General&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../UI/icons.html">&LT;i  className="fa fa-circle-o">&LT;/i> Icons&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../UI/buttons.html">&LT;i  className="fa fa-circle-o">&LT;/i> Buttons&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../UI/sliders.html">&LT;i  className="fa fa-circle-o">&LT;/i> Sliders&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../UI/timeline.html">&LT;i  className="fa fa-circle-o">&LT;/i> Timeline&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../UI/modals.html">&LT;i  className="fa fa-circle-o">&LT;/i> Modals&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-edit">&LT;/i> &LT;span>Forms&LT;/span>
                &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="../forms/general.html">&LT;i  className="fa fa-circle-o">&LT;/i> General Elements&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../forms/advanced.html">&LT;i  className="fa fa-circle-o">&LT;/i> Advanced Elements&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../forms/editors.html">&LT;i  className="fa fa-circle-o">&LT;/i> Editors&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-table">&LT;/i> &LT;span>Tables&LT;/span>
                &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="../tables/simple.html">&LT;i  className="fa fa-circle-o">&LT;/i> Simple tables&LT;/a>&LT;/li>
                &LT;li>&LT;a href="../tables/data.html">&LT;i  className="fa fa-circle-o">&LT;/i> Data tables&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li>
              &LT;a href="../calendar.html">
                &LT;i  className="fa fa-calendar">&LT;/i> &LT;span>Calendar&LT;/span>
                &LT;small  className="label pull-right bg-red">3&LT;/small>
              &LT;/a>
            &LT;/li>
            &LT;li>
              &LT;a href="../mailbox/mailbox.html">
                &LT;i  className="fa fa-envelope">&LT;/i> &LT;span>Mailbox&LT;/span>
                &LT;small  className="label pull-right bg-yellow">12&LT;/small>
              &LT;/a>
            &LT;/li>
            &LT;li  className="treeview active">
              &LT;a href="#">
                &LT;i  className="fa fa-folder">&LT;/i> &LT;span>Examples&LT;/span>
                &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="invoice.html">&LT;i  className="fa fa-circle-o">&LT;/i> Invoice&LT;/a>&LT;/li>
                &LT;li>&LT;a href="login.html">&LT;i  className="fa fa-circle-o">&LT;/i> Login&LT;/a>&LT;/li>
                &LT;li>&LT;a href="register.html">&LT;i  className="fa fa-circle-o">&LT;/i> Register&LT;/a>&LT;/li>
                &LT;li>&LT;a href="lockscreen.html">&LT;i  className="fa fa-circle-o">&LT;/i> Lockscreen&LT;/a>&LT;/li>
                &LT;li>&LT;a href="404.html">&LT;i  className="fa fa-circle-o">&LT;/i> 404 Error&LT;/a>&LT;/li>
                &LT;li>&LT;a href="500.html">&LT;i  className="fa fa-circle-o">&LT;/i> 500 Error&LT;/a>&LT;/li>
                &LT;li  className="active">&LT;a href="blank.html">&LT;i  className="fa fa-circle-o">&LT;/i> Blank Page&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li  className="treeview">
              &LT;a href="#">
                &LT;i  className="fa fa-share">&LT;/i> &LT;span>Multilevel&LT;/span>
                &LT;i  className="fa fa-angle-left pull-right">&LT;/i>
              &LT;/a>
              &LT;ul  className="treeview-menu">
                &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level One&LT;/a>&LT;/li>
                &LT;li>
                  &LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level One &LT;i  className="fa fa-angle-left pull-right">&LT;/i>&LT;/a>
                  &LT;ul  className="treeview-menu">
                    &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level Two&LT;/a>&LT;/li>
                    &LT;li>
                      &LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level Two &LT;i  className="fa fa-angle-left pull-right">&LT;/i>&LT;/a>
                      &LT;ul  className="treeview-menu">
                        &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level Three&LT;/a>&LT;/li>
                        &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level Three&LT;/a>&LT;/li>
                      &LT;/ul>
                    &LT;/li>
                  &LT;/ul>
                &LT;/li>
                &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o">&LT;/i> Level One&LT;/a>&LT;/li>
              &LT;/ul>
            &LT;/li>
            &LT;li>&LT;a href="documentation/index.html">&LT;i  className="fa fa-book">&LT;/i> Documentation&LT;/a>&LT;/li>
            &LT;li  className="header">LABELS&LT;/li>
            &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o text-danger">&LT;/i> Important&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o text-warning">&LT;/i> Warning&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">&LT;i  className="fa fa-circle-o text-info">&LT;/i> Information&LT;/a>&LT;/li>
          &LT;/ul>
        &LT;/section>
        &LT;!-- /.sidebar -->
      &LT;/aside>

      &LT;!-- =============================================== -->

      &LT;!-- Right side column. Contains the navbar and content of the page -->
      &LT;div  className="content-wrapper">
        &LT;!-- Content Header (Page header) -->
        &LT;section  className="content-header">
          &LT;h1>
            Blank page
            &LT;small>it all starts here&LT;/small>
          &LT;/h1>
          &LT;ol  className="breadcrumb">
            &LT;li>&LT;a href="#">&LT;i  className="fa fa-dashboard">&LT;/i> Home&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">Examples&LT;/a>&LT;/li>
            &LT;li  className="active">Blank page&LT;/li>
          &LT;/ol>
        &LT;/section>

        &LT;!-- Main content -->
        &LT;section  className="content">

          &LT;!-- Default box -->
          &LT;div  className="box">
            &LT;div  className="box-header with-border">
              &LT;h3  className="box-title">Title&LT;/h3>
              &LT;div  className="box-tools pull-right">
                &LT;button  className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">&LT;i  className="fa fa-minus">&LT;/i>&LT;/button>
                &LT;button  className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">&LT;i  className="fa fa-times">&LT;/i>&LT;/button>
              &LT;/div>
            &LT;/div>
            &LT;div  className="box-body">
              Start creating your amazing application!
            &LT;/div>&LT;!-- /.box-body -->
            &LT;div  className="box-footer">
              Footer
            &LT;/div>&LT;!-- /.box-footer-->
          &LT;/div>&LT;!-- /.box -->

        &LT;/section>&LT;!-- /.content -->
      &LT;/div>&LT;!-- /.content-wrapper -->

      &LT;footer  className="main-footer">
        &LT;div  className="pull-right hidden-xs">
          &LT;b>Version&LT;/b> 2.0
        &LT;/div>
        &LT;strong>Copyright &copy; 2014-2015 &LT;a href="http://almsaeedstudio.com">Almsaeed Studio&LT;/a>.&LT;/strong> All rights reserved.
      &LT;/footer>
    &LT;/div>&LT;!-- ./wrapper -->

    &LT;!-- jQuery 2.1.3 -->
    &LT;script src="plugins/jQuery/jQuery-2.1.3.min.js">&LT;/script>
    &LT;!-- Bootstrap 3.3.2 JS -->
    &LT;script src="bootstrap/js/bootstrap.min.js" type="text/javascript">&LT;/script>
    &LT;!-- SlimScroll -->
    &LT;script src="plugins/slimScroll/jquery.slimScroll.min.js" type="text/javascript">&LT;/script>
    &LT;!-- FastClick -->
    &LT;script src='plugins/fastclick/fastclick.min.js'>&LT;/script>
    &LT;!-- AdminLTE App -->
    &LT;script src="dist/js/app.min.js" type="text/javascript">&LT;/script>
    &LT;!-- AdminLTE for demo purposes -->
    &LT;script src="dist/js/demo.js" type="text/javascript">&LT;/script>
  &LT;/body>
&LT;/html></pre> */}

            <h3>Layout Options</h3>
            <p  className="lead">AdminLTE 2.0 provides a set of options to apply to your main layout. Each on of these classes can be added
              to the body tag to get the desired goal.</p>
            <ul>
              <li><b>Fixed:</b> use the class <code>.fixed</code> to get a fixed header and sidebar.</li>
              <li><b>Collapsed Sidebar:</b> use the class <code>.collapsed-sidebar</code> to have a collapsed sidebar upon loading.</li>
              <li><b>Boxed Layout:</b> use the class <code>.layout-boxed</code> to get a boxed layout that stretches only to 1024px.</li>
              <li><b>Top Navigation</b> use the class <code>.layout-top-nav</code> to remove the sidebar and have your links at the top navbar.</li>
            </ul>
            <p><b>Note:</b> you cannot use both layout-boxed and fixed at the same time. Anything else can be mixed together.</p>

            <h3>Skins</h3>
            <p  className="lead">Skins can be found in the dist/css/skins folder.
              Choose and the skin file that you want then add the appropriate
              class to the body tag to change the template's appearance. Here is the list of available skins:</p>
            <ul>
              <li><code>skin-blue</code></li>
              <li><code>skin-yellow</code></li>
              <li><code>skin-purple</code></li>
              <li><code>skin-green</code></li>
              <li><code>skin-red</code></li>
              <li><code>skin-black</code></li>
            </ul>
          </section>

          {/* <!-- ============================================================= --> */}

          <section id='components' data-spy="scroll" data-target="#scrollspy-components">
            <h2  className='page-header'><span>Components</span></h2>
            <div  className='callout callout-info lead'>
              <h4>Reminder!</h4>
              <p>
                AdminLTE uses all of Bootstrap 3 components. It's a good start to review
                the <a href="http://getbootstrap.com">Bootstrap documentation</a> to get an idea of the various components
                that this documentation <b>does not</b> cover.
              </p>
            </div>
            <div  className='callout callout-danger lead'>
              <h4>Tip!</h4>
              <p>
                If you go through the example pages and would like to copy a component, right-click on
                the component and choose "inspect element" to get to the HTML quicker than scanning
                the HTML page.
              </p>
            </div>
            <h3 id='component-main-header'>Main Header</h3>
            <p  className='lead'>The main header contains the logo and navbar. Construction of the
              navbar differs slightly from Bootstrap because it has components that Bootstrap doesn't provide.
              The navbar can be constructed in two way. This an example for the normal navbar and next we will provide an example for
              the top nav layout.</p>
            <div  className="box box-solid">
              <div  className="box-body" style={{position: "relative"}}>
                <span  className="eg">Main Header Example</span>
                <header  className="main-header" style={{position: "relative"}}>
                  {/* <!-- Logo --> */}
                  <a href="index2.html"  className="logo"><b>Admin</b>LTE</a>
                  {/* <!-- Header Navbar: style can be found in header.less --> */}
                  <nav  className="navbar" role="navigation" style={{border: "0"}}>
                    {/* <!-- Sidebar toggle button--> */}
                    <a href="#"  className="sidebar-toggle" role="button">
                      <span  className="sr-only">Toggle navigation</span>
                    </a>
                    {/* <!-- Navbar Right Menu --> */}
                    <div  className="navbar-custom-menu">
                      <ul  className="nav navbar-nav">
                        {/* <!-- Messages: style can be found in dropdown.less--> */}
                        <li  className="dropdown messages-menu">
                          <a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                            <i  className="fa fa-envelope-o"></i>
                            <span  className="label label-success">4</span>
                          </a>
                          <ul  className="dropdown-menu">
                            <li  className="header">You have 4 messages</li>
                            <li>
                              {/* <!-- inner menu: contains the actual data --> */}
                              <ul  className="menu">
                                <li>
                                  {/* <!-- start message --> */}
                                  <a href="#">
                                    <div  className="pull-left">
                                      <img src="../dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image"/>
                                    </div>
                                    <h4>
                                      Support Team
                                      <small><i  className="fa fa-clock-o"></i> 5 mins</small>
                                    </h4>
                                    <p>Why not buy a new awesome theme?</p>
                                  </a>
                                </li>
                                {/* <!-- end message --> */}
                              </ul>
                            </li>
                            <li  className="footer"><a href="#">See All Messages</a></li>
                          </ul>
                        </li>
                        {/* <!-- Notifications: style can be found in dropdown.less --> */}
                        <li  className="dropdown notifications-menu">
                          <a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                            <i  className="fa fa-bell-o"></i>
                            <span  className="label label-warning">10</span>
                          </a>
                          <ul  className="dropdown-menu">
                            <li  className="header">You have 10 notifications</li>
                            <li>
                              {/* <!-- inner menu: contains the actual data --> */}
                              <ul  className="menu">
                                <li>
                                  <a href="#">
                                    <i  className="fa fa-users text-aqua"></i> 5 new members joined today
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li  className="footer"><a href="#">View all</a></li>
                          </ul>
                        </li>
                        {/* <!-- Tasks: style can be found in dropdown.less --> */}
                        <li  className="dropdown tasks-menu">
                          <a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                            <i  className="fa fa-flag-o"></i>
                            <span  className="label label-danger">9</span>
                          </a>
                          <ul  className="dropdown-menu">
                            <li  className="header">You have 9 tasks</li>
                            <li>
                              {/* <!-- inner menu: contains the actual data --> */}
                              <ul  className="menu">
                                <li>
                                  {/* <!-- Task item --> */}
                                  <a href="#">
                                    <h3>
                                      Design some buttons
                                      <small  className="pull-right">20%</small>
                                    </h3>
                                    <div  className="progress xs">
                                      {/* <div  className="progress-bar progress-bar-aqua" style={{width: "20%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                        <span  className="sr-only">20% Complete  </span>
                                      </div> */}
                                    </div>
                                  </a>
                                </li>
                                {/* <!-- end task item --> */}
                              </ul>
                            </li>
                            <li  className="footer">
                              <a href="#">View all tasks</a>
                            </li>
                          </ul>
                        </li>
                        {/* <!-- User Account: style can be found in dropdown.less --> */}
                        <li  className="dropdown user user-menu">
                          <a href="#"  className="dropdown-toggle" data-toggle="dropdown">
                            <img src="../dist/img/user2-160x160.jpg"  className="user-image" alt="User Image"/>
                            <span  className="hidden-xs">Alexander Pierce</span>
                          </a>
                          <ul  className="dropdown-menu">
                            {/* <!-- User image --> */}
                            <li  className="user-header">
                              <img src="../dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image" />
                              <p>
                                Alexander Pierce - Web Developer
                                <small>Member since Nov. 2012</small>
                              </p>
                            </li>
                            {/* <!-- Menu Body --> */}
                            <li  className="user-body">
                              <div  className="col-xs-4 text-center">
                                <a href="#">Followers</a>
                              </div>
                              <div  className="col-xs-4 text-center">
                                <a href="#">Sales</a>
                              </div>
                              <div  className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                              </div>
                            </li>
                            {/* <!-- Menu Footer--> */}
                            <li  className="user-footer">
                              <div  className="pull-left">
                                <a href="#"  className="btn btn-default btn-flat">Profile</a>
                              </div>
                              <div  className="pull-right">
                                <a href="#"  className="btn btn-default btn-flat">Sign out</a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
            <pre  className='prettyprint'>

{/* 
&LT;header  className="main-header">
  &LT;a href="../../index2.html"  className="logo">
    &LT;!-- LOGO -->
    AdminLTE
  &LT;/a>
  &LT;!-- Header Navbar: style can be found in header.less -->
  &LT;nav  className="navbar navbar-static-top" role="navigation">
    &LT;!-- Navbar Right Menu -->
    &LT;div  className="navbar-custom-menu">
      &LT;ul  className="nav navbar-nav">
        &LT;!-- Messages: style can be found in dropdown.less-->
        &LT;li  className="dropdown messages-menu">
          &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
            &LT;i  className="fa fa-envelope-o">&LT;/i>
            &LT;span  className="label label-success">4&LT;/span>
          &LT;/a>
          &LT;ul  className="dropdown-menu">
            &LT;li  className="header">You have 4 messages&LT;/li>
            &LT;li>
              &LT;!-- inner menu: contains the actual data -->
              &LT;ul  className="menu">
                &LT;li>&LT;!-- start message -->
                  &LT;a href="#">
                    &LT;div  className="pull-left">
                      &LT;img src="dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image"/>
                    &LT;/div>
                    &LT;h4>
                      Sender Name
                      &LT;small>&LT;i  className="fa fa-clock-o">&LT;/i> 5 mins&LT;/small>
                    &LT;/h4>
                    &LT;p>Message Excerpt&LT;/p>
                  &LT;/a>
                &LT;/li>&LT;!-- end message -->
                ...
              &LT;/ul>
            &LT;/li>
            &LT;li  className="footer">&LT;a href="#">See All Messages&LT;/a>&LT;/li>
          &LT;/ul>
        &LT;/li>
        &LT;!-- Notifications: style can be found in dropdown.less -->
        &LT;li  className="dropdown notifications-menu">
          &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
            &LT;i  className="fa fa-bell-o">&LT;/i>
            &LT;span  className="label label-warning">10&LT;/span>
          &LT;/a>
          &LT;ul  className="dropdown-menu">
            &LT;li  className="header">You have 10 notifications&LT;/li>
            &LT;li>
              &LT;!-- inner menu: contains the actual data -->
              &LT;ul  className="menu">
                &LT;li>
                  &LT;a href="#">
                    &LT;i  className="ion ion-ios-people info">&LT;/i> Notification title
                  &LT;/a>
                &LT;/li>
                ...
              &LT;/ul>
            &LT;/li>
            &LT;li  className="footer">&LT;a href="#">View all&LT;/a>&LT;/li>
          &LT;/ul>
        &LT;/li>
        &LT;!-- Tasks: style can be found in dropdown.less -->
        &LT;li  className="dropdown tasks-menu">
          &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
            &LT;i  className="fa fa-flag-o">&LT;/i>
            &LT;span  className="label label-danger">9&LT;/span>
          &LT;/a>
          &LT;ul  className="dropdown-menu">
            &LT;li  className="header">You have 9 tasks&LT;/li>
            &LT;li>
              &LT;!-- inner menu: contains the actual data -->
              &LT;ul  className="menu">
                &LT;li>&LT;!-- Task item -->
                  &LT;a href="#">
                    &LT;h3>
                      Design some buttons
                      &LT;small  className="pull-right">20%&LT;/small>
                    &LT;/h3>
                    &LT;div  className="progress xs">
                      &LT;div  className="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                        &LT;span  className="sr-only">20% Complete&LT;/span>
                      &LT;/div>
                    &LT;/div>
                  &LT;/a>
                &LT;/li>&LT;!-- end task item -->
                ...
              &LT;/ul>
            &LT;/li>
            &LT;li  className="footer">
              &LT;a href="#">View all tasks&LT;/a>
            &LT;/li>
          &LT;/ul>
        &LT;/li>
        &LT;!-- User Account: style can be found in dropdown.less -->
        &LT;li  className="dropdown user user-menu">
          &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">
            &LT;img src="dist/img/user2-160x160.jpg"  className="user-image" alt="User Image"/>
            &LT;span  className="hidden-xs">Alexander Pierce&LT;/span>
          &LT;/a>
          &LT;ul  className="dropdown-menu">
            &LT;!-- User image -->
            &LT;li  className="user-header">
              &LT;img src="dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image" />
              &LT;p>
                Alexander Pierce - Web Developer
                &LT;small>Member since Nov. 2012&LT;/small>
              &LT;/p>
            &LT;/li>
            &LT;!-- Menu Body -->
            &LT;li  className="user-body">
              &LT;div  className="col-xs-4 text-center">
                &LT;a href="#">Followers&LT;/a>
              &LT;/div>
              &LT;div  className="col-xs-4 text-center">
                &LT;a href="#">Sales&LT;/a>
              &LT;/div>
              &LT;div  className="col-xs-4 text-center">
                &LT;a href="#">Friends&LT;/a>
              &LT;/div>
            &LT;/li>
            &LT;!-- Menu Footer-->
            &LT;li  className="user-footer">
              &LT;div  className="pull-left">
                &LT;a href="#"  className="btn btn-default btn-flat">Profile&LT;/a>
              &LT;/div>
              &LT;div  className="pull-right">
                &LT;a href="#"  className="btn btn-default btn-flat">Sign out&LT;/a>
              &LT;/div>
            &LT;/li>
          &LT;/ul>
        &LT;/li>
      &LT;/ul>
    &LT;/div>
  &LT;/nav>
&LT;/header> */}
</pre>
            <h4>Top Nav Layout. Main Header Example.</h4>
            <div  className="callout callout-info lead">
              <h4>Reminder!</h4>
              <p>To use this main header instead of the regular one, you must add the <code>layout-top-nav</code> class to the body tag.</p>
            </div>
            <div  className="box box-solid">
              <div  className="box-body layout-top-nav">
                <span  className="eg">Top Nav Example</span>
                <header  className="main-header">               
                  <nav  className="navbar navbar-static-top">
                    <div  className="container-fluid">
                      <div  className="navbar-header">
                        <a href="../../index2.html"  className="navbar-brand"><b>Admin</b>LTE</a>
                        <button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                          <i  className="fa fa-bars"></i>
                        </button>
                      </div>

                      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                      <div  className="collapse navbar-collapse" id="navbar-collapse">
                        <ul  className="nav navbar-nav">
                          <li  className="active"><a href="#">Link <span  className="sr-only">(current)</span></a></li>
                          <li><a href="#">Link</a></li>
                          <li  className="dropdown">
                            <a href="#"  className="dropdown-toggle" data-toggle="dropdown">Dropdown <span  className="caret"></span></a>
                            <ul  className="dropdown-menu" role="menu">
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li  className="divider"></li>
                              <li><a href="#">Separated link</a></li>
                              <li  className="divider"></li>
                              <li><a href="#">One more separated link</a></li>
                            </ul>
                          </li>
                        </ul>
                        <form  className="navbar-form navbar-left" role="search">
                          <div  className="form-group">
                            <input type="text"  className="form-control" id="navbar-search-input" placeholder="Search"/>
                          </div>
                        </form>
                        <ul  className="nav navbar-nav navbar-right">
                          <li><a href="#">Link</a></li>
                          <li  className="dropdown">
                            <a href="#"  className="dropdown-toggle" data-toggle="dropdown">Dropdown <span  className="caret"></span></a>
                            <ul  className="dropdown-menu" role="menu">
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li  className="divider"></li>
                              <li><a href="#">Separated link</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- /.navbar-collapse --> */}
                    </div>
                    {/* <!-- /.container-fluid --> */}
                  </nav>
                </header>
              </div>
            </div>
            <pre  className='prettyprint'>
{/*               
&LT;header  className="main-header">               
  &LT;nav  className="navbar navbar-static-top">
    &LT;div  className="container-fluid">
    &LT;div  className="navbar-header">
      &LT;a href="../../index2.html"  className="navbar-brand">&LT;b>Admin&LT;/b>LTE&LT;/a>
      &LT;button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
        &LT;i  className="fa fa-bars">&LT;/i>
      &LT;/button>
    &LT;/div>

    &LT;!-- Collect the nav links, forms, and other content for toggling -->
    &LT;div  className="collapse navbar-collapse" id="navbar-collapse">
      &LT;ul  className="nav navbar-nav">
        &LT;li  className="active">&LT;a href="#">Link &LT;span  className="sr-only">(current)&LT;/span>&LT;/a>&LT;/li>
        &LT;li>&LT;a href="#">Link&LT;/a>&LT;/li>
        &LT;li  className="dropdown">
          &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">Dropdown &LT;span  className="caret">&LT;/span>&LT;/a>
          &LT;ul  className="dropdown-menu" role="menu">
            &LT;li>&LT;a href="#">Action&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">Another action&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">Something else here&LT;/a>&LT;/li>
            &LT;li  className="divider">&LT;/li>
            &LT;li>&LT;a href="#">Separated link&LT;/a>&LT;/li>
            &LT;li  className="divider">&LT;/li>
            &LT;li>&LT;a href="#">One more separated link&LT;/a>&LT;/li>
          &LT;/ul>
        &LT;/li>
      &LT;/ul>
      &LT;form  className="navbar-form navbar-left" role="search">
        &LT;div  className="form-group">
          &LT;input type="text"  className="form-control" id="navbar-search-input" placeholder="Search">
        &LT;/div>
      &LT;/form>
      &LT;ul  className="nav navbar-nav navbar-right">
        &LT;li>&LT;a href="#">Link&LT;/a>&LT;/li>
        &LT;li  className="dropdown">
          &LT;a href="#"  className="dropdown-toggle" data-toggle="dropdown">Dropdown &LT;span  className="caret">&LT;/span>&LT;/a>
          &LT;ul  className="dropdown-menu" role="menu">
            &LT;li>&LT;a href="#">Action&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">Another action&LT;/a>&LT;/li>
            &LT;li>&LT;a href="#">Something else here&LT;/a>&LT;/li>
            &LT;li  className="divider">&LT;/li>
            &LT;li>&LT;a href="#">Separated link&LT;/a>&LT;/li>
          &LT;/ul>
        &LT;/li>
      &LT;/ul>
    &LT;/div>&LT;!-- /.navbar-collapse -->
    &LT;/div>&LT;!-- /.container-fluid -->
  &LT;/nav>
&LT;/header> */}
            </pre>

            {/* <!-- ----------------------------------------------------------- --> */}

            <h3 id='component-sidebar'>Sidebar</h3>
            <p  className="lead">
              The sidebar used in this page to the left provides an example of what your sidebar should like.
              Construction of a sidebar:
            </p>
            <pre  className="prettyprint">
{/*               
&LT;div  className="main-sidebar">
  &LT;!-- Inner sidebar -->
  &LT;div  className="sidebar">
    &LT;!-- user panel (Optional) -->
    &LT;div  className="user-panel">
      &LT;div  className="pull-left image">
        &LT;img src="dist/img/user2-160x160.jpg"  className="img-circle" alt="User Image" />
      &LT;/div>
      &LT;div  className="pull-left info">
        &LT;p>User Name&LT;/p>

        &LT;a href="#">&LT;i  className="fa fa-circle text-success">&LT;/i> Online&LT;/a>
      &LT;/div>
    &LT;/div>&LT;!-- /.user-panel -->

    &LT;!-- Search Form (Optional) -->
    &LT;form action="#" method="get"  className="sidebar-form">
      &LT;div  className="input-group">
        &LT;input type="text" name="q"  className="form-control" placeholder="Search..."/>
        &LT;span  className="input-group-btn">
          &LT;button type='submit' name='search' id='search-btn'  className="btn btn-flat">&LT;i  className="fa fa-search">&LT;/i>&LT;/button>
        &LT;/span>
      &LT;/div>
    &LT;/form>&LT;!-- /.sidebar-form -->

    &LT;!-- Sidebar Menu -->
    &LT;ul  className="sidebar-menu">
      &LT;li  className="active">&LT;a href="#">Link&LT;/a>&LT;/li>
      &LT;li>&LT;a href="#">Another Link&LT;/a>&LT;/li>
      &LT;li  className="treeview">
        &LT;a href="#">Second Level&LT;/a>
        &LT;ul  className="treeview-menu">
          &LT;li>&LT;a href="#">Link in level 2&LT;/a>&LT;/li>
          &LT;li>&LT;a href="#">Link in level 2&LT;/a>&LT;/li>
        &LT;/ul>
      &LT;/li>
    &LT;/ul>&LT;!-- /.sidebar-menu -->

  &LT;/div>&LT;!-- /.sidebar -->
&LT;/div>&LT;!-- /.main-sidebar --> */}


            </pre>

            {/* <!-- ----------------------------------------------------------- --> */}

            <h3 id='component-box'>Box</h3>
            <p  className="lead">The box component is the most widely used component through out this template. You can
              use it for anything from displaying charts to just blocks of text. It comes in many different
              styles that we will explore below.</p>
            <h4>Default Box Markup</h4>
            <div  className="box">
              <div  className="box-header with-border">
                <h3  className="box-title">Default Box Example</h3>
                <div  className="box-tools pull-right">
                  {/* <!-- Buttons, labels, and many other things can be placed here! --> */}
                  {/* <!-- Here is a label for example --> */}
                  <span  className="label label-primary">Label</span>
                </div>
                {/* <!-- /.box-tools --> */}
              </div>
              {/* <!-- /.box-header --> */}
              <div  className="box-body">
                The body of the box
              </div>
              {/* <!-- /.box-body --> */}
              <div  className="box-footer">
                The footer of the box
              </div>
              {/* <!-- box-footer --> */}
            </div>
            {/* <!-- /.box --> */}
            <pre  className="prettyprint">
{/*               
&LT;div  className="box">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Default Box Example&LT;/h3>
    &LT;div  className="box-tools pull-right">
      &LT;!-- Buttons, labels, and many other things can be placed here! -->
      &LT;!-- Here is a label for example -->
      &LT;span  className="label label-primary">Label&LT;/span>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
  &LT;div  className="box-footer">
    The footer of the box
  &LT;/div>&LT;!-- box-footer -->
&LT;/div>&LT;!-- /.box --> */}

</pre>
            <h4>Box Variants</h4>
            <p  className="lead">You can change the style of the box by adding any of the contextual classes.</p>
            <div  className="row">
              <div  className="col-md-4">
                <div  className="box">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Default Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-primary">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Primary Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-info">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Info Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="clearfix"></div>
              <div  className="col-md-4">
                <div  className="box box-warning">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Warning Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-success">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Success Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-danger">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Danger Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
            <pre  className="prettyprint">

{/* &LT;div  className="box box-default">...&LT;/div>
&LT;div  className="box box-primary">...&LT;/div>
&LT;div  className="box box-info">...&LT;/div>
&LT;div  className="box box-warning">...&LT;/div>
&LT;div  className="box box-success">...&LT;/div>
&LT;div  className="box box-danger">...&LT;/div> */}
</pre>

            <h4>Solid Box</h4>
            <p  className="lead">Solid Boxes are alternative ways to display boxes.
              They can be created by simply adding the box-solid class to the box component.
              You may also use contextual classes with you solid boxes.</p>
            <div  className="row">
              <div  className="col-md-4">
                <div  className="box box-solid box-default">
                  <div  className="box-header">
                    <h3  className="box-title">Default Solid Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-solid box-primary">
                  <div  className="box-header">
                    <h3  className="box-title">Primary Solid Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-solid box-info">
                  <div  className="box-header">
                    <h3  className="box-title">Info Solid Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="clearfix"></div>
              <div  className="col-md-4">
                <div  className="box box-solid box-warning">
                  <div  className="box-header">
                    <h3  className="box-title">Warning Solid Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-solid box-success">
                  <div  className="box-header">
                    <h3  className="box-title">Success Solid Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
              <div  className="col-md-4">
                <div  className="box box-solid box-danger">
                  <div  className="box-header">
                    <h3  className="box-title">Danger Solid Box Example</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
            <pre  className="prettyprint">
{/*               
&LT;div  className="box box-solid">...&LT;/div>
&LT;div  className="box box-solid box-primary">...&LT;/div>
&LT;div  className="box box-solid box-info">...&LT;/div>
&LT;div  className="box box-solid box-warning">...&LT;/div>
&LT;div  className="box box-solid box-success">...&LT;/div>
&LT;div  className="box box-solid box-danger">...&LT;/div> */}

</pre>
            <h4>Box Tools</h4>
            <p  className="lead">Boxes can contain tools to deploy a specific event or provide simple info. The following examples makes use
              of multiple AdminLTE components within the header of the box.</p>
            <p>AdminLTE data-widget attribute provides boxes with the ability to collapse or be removed. The buttons
            are placed in the box-tools which is placed in the box-header.</p>
            <pre  className="prettyprint">

{/* &LT;-- This will cause the box to be removed when clicked -->
&LT;button  className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">&LT;i  className="fa fa-times">&LT;/i>&LT;/button>
&LT;-- This will cause the box to collapse when clicked -->
&LT;button  className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">&LT;i  className="fa fa-minus">&LT;/i>&LT;/button> */}
</pre>
            <div  className="row">
              <div  className="col-md-4">
                <div  className="box box-default">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Collapsable</h3>
                    <div  className="box-tools pull-right">
                      <button  className="btn btn-box-tool" data-widget="collapse"><i  className="fa fa-minus"></i></button>
                    </div>
                    {/* <!-- /.box-tools --> */}
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
                <pre  className="prettyprint">

{/* &LT;div  className="box box-default">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Collapsable&LT;/h3>
    &LT;div  className="box-tools pull-right">
      &LT;button  className="btn btn-box-tool" data-widget="collapse">&LT;i  className="fa fa-minus">&LT;/i>&LT;/button>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
&LT;/div>&LT;!-- /.box --> */}
</pre>
              </div>
              <div  className="col-md-4">
                <div  className="box box-default">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Removable</h3>
                    <div  className="box-tools pull-right">
                      <button  className="btn btn-box-tool" data-widget="remove"><i  className="fa fa-times"></i></button>
                    </div>
                    {/* <!-- /.box-tools --> */}
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
                <pre  className="prettyprint">
{/*                   
&LT;div  className="box box-default">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Removable&LT;/h3>
    &LT;div  className="box-tools pull-right">
      &LT;button  className="btn btn-box-tool" data-widget="remove">&LT;i  className="fa fa-times">&LT;/i>&LT;/button>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
&LT;/div>&LT;!-- /.box --> */}

</pre>
              </div>
              <div  className="col-md-4">
                <div  className="box box-default collapsed-box">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Expandable</h3>
                    <div  className="box-tools pull-right">
                      <button  className="btn btn-box-tool" data-widget="collapse"><i  className="fa fa-plus"></i></button>
                    </div>
                    {/* <!-- /.box-tools --> */}
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
                <pre  className="prettyprint">
{/*                   
&LT;div  className="box box-default">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Expandable&LT;/h3>
    &LT;div  className="box-tools pull-right">
      &LT;button  className="btn btn-box-tool" data-widget="collapse">&LT;i  className="fa fa-plus">&LT;/i>&LT;/button>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
&LT;/div>&LT;!-- /.box --> */}

</pre>
              </div>
            </div>
            {/* <!-- /.row --> */}
            <p>We can also add labels, badges, pagination, tooltips, inputs and many more in the box tools.  A few examples:</p>
            <div  className="row">
              <div  className="col-md-4">
                <div  className="box box-default">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Labels</h3>
                    <div  className="box-tools pull-right">
                      <span  className="label label-default">Some Label</span>
                    </div>
                    {/* <!-- /.box-tools --> */}
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
                <pre  className="prettyprint">

{/* &LT;div  className="box box-default">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Labels&LT;/h3>
    &LT;div  className="box-tools pull-right">
      &LT;span  className="label label-default">8 New Messages&LT;/span>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
&LT;/div>&LT;!-- /.box --> */}
</pre>
              </div>
              <div  className="col-md-4">
                <div  className="box box-default">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Input</h3>
                    <div  className="box-tools pull-right">
                      <div  className="has-feedback">
                        <input type="text"  className="form-control input-sm" placeholder="Search..."/>
                        <span  className="glyphicon glyphicon-search form-control-feedback text-muted"></span>
                      </div>
                    </div>
                    {/* <!-- /.box-tools --> */}
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
                <pre  className="prettyprint">

{/* &LT;div  className="box box-default">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Input&LT;/h3>
    &LT;div  className="box-tools pull-right">
      &LT;div  className="has-feedback">
        &LT;input type="text"  className="form-control input-sm" placeholder="Search..."/>
        &LT;span  className="glyphicon glyphicon-search form-control-feedback">&LT;/span>
      &LT;/div>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
&LT;/div>&LT;!-- /.box --> */}

</pre>
              </div>
              <div  className="col-md-4">
                <div  className="box box-default">
                  <div  className="box-header with-border">
                    <h3  className="box-title">Tootips on buttons</h3>
                    <div  className="box-tools pull-right">                      
                      <button  className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i  className="fa fa-minus"></i></button>
                      <button  className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i  className="fa fa-times"></i></button>
                    </div>
                    {/* <!-- /.box-tools --> */}
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div  className="box-body">
                    The body of the box
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /.box --> */}
                <pre  className="prettyprint">
{/*                   
&LT;div  className="box box-default">
  &LT;div  className="box-header with-border">
    &LT;h3  className="box-title">Tooltips on buttons&LT;/h3>
    &LT;div  className="box-tools pull-right">      
      &LT;button  className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">&LT;i  className="fa fa-minus">&LT;/i>&LT;/button>
      &LT;button  className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">&LT;i  className="fa fa-times">&LT;/i>&LT;/button>
    &LT;/div>&LT;!-- /.box-tools -->
  &LT;/div>&LT;!-- /.box-header -->
  &LT;div  className="box-body">
    The body of the box
  &LT;/div>&LT;!-- /.box-body -->
&LT;/div>&LT;!-- /.box --> */}

</pre>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
          </section>

          {/* <!-- ============================================================= --> */}

          <section id='plugins'>
            <h2  className='page-header'><span>Plugins</span></h2>
            <p  className="lead">AdminLTE makes use of the following plugins. For documentation, updates or license information, please visit the provided links.</p>
            <div  className='row'>
              <div  className='col-sm-3'>
                <ul  className="list-unstyled">
                  <li><h4>Charts</h4></li>
                  <li><a href='http://chartjs.org/' target="_blank">ChartJS</a></li>
                  <li><a href='http://www.flotcharts.org/' target="_blank">Flot</a></li>
                  <li><a href='http://morrisjs.github.io/morris.js/' target="_blank">Morris.js</a></li>
                  <li><a href='http://omnipotent.net/jquery.sparkline/' target="_blank">Sparkline</a></li>
                </ul>
              </div>
              {/* <!-- /.col --> */}
              <div  className='col-sm-3'>
                <ul  className="list-unstyled">
                  <li><h4>Form Elements</h4></li>
                  <li><a href='https://github.com/seiyria/bootstrap-slider'>Bootstrap Slider</a></li>
                  <li><a href='http://ionden.com/a/plugins/ion.rangeSlider/en.html' target="_blank">Ion Slider</a></li>
                  <li><a href='http://bootstrap-datepicker.readthedocs.org/' target="_blank">Date Picker</a></li>
                  <li><a href='http://www.improvely.com/' target="_blank">Date Range Picker</a></li>
                  <li><a href='http://mjolnic.github.io/bootstrap-colorpicker/' target="_blank">Color Picker</a></li>
                  <li><a href='https://github.com/jdewit/bootstrap-timepicker' target="_blank">Time Picker</a></li>
                  <li><a href='http://git.io/arlzeA' target="_blank">iCheck</a></li>
                  <li><a href='http://github.com/RobinHerbots/jquery.inputmask' target="_blank">Input Mask</a></li>
                </ul>
              </div>
              {/* <!-- /.col --> */}
              <div  className='col-sm-3'>
                <ul  className="list-unstyled">
                  <li><h4>Editors</h4></li>
                  <li><a href='https://github.com/Waxolunist/bootstrap3-wysihtml5-bower' target="_blank">Bootstrap WYSIHTML5</a></li>
                  <li><a href='http://ckeditor.com' target="_blank">CK Editor</a></li>
                </ul>
              </div>
              {/* <!-- /. col --> */}
              <div  className='col-sm-3'>
                <ul  className="list-unstyled">
                  <li><h4>Other</h4></li>
                  <li><a href='https://datatables.net/examples/styling/bootstrap.html' target="_blank">Data Tables</a></li>
                  <li><a href='http://arshaw.com/fullcalendar/' target="_blank">Full Calendar</a></li>
                  <li><a href='http://jqueryui.com' target="_blank">jQuery UI</a></li>
                  <li><a href='http://anthonyterrien.com/knob/' target="_blank">jQuery Knob</a></li>
                  <li><a href='http://jvectormap.com/' target="_blank">jVector Map</a></li>
                  <li><a href='http://rocha.la' target="_blank">Slim Scroll</a></li>
                  <li><a href='http://github.hubspot.com/pace/docs/welcome/' target="_blank">Pace</a></li>
                </ul>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
          </section>

          {/* <!-- ============================================================= --> */}

          <section id='browsers'>
            <h2  className='page-header'><span>Browser Support</span></h2>
            <p  className="lead">AdminLTE supports the following browsers:</p>
            <ul>
              <li>IE9+</li>
              <li>FireFox (latest)</li>
              <li>Safari (latest)</li>
              <li>Chrome (latest)</li>
              <li>Opera (latest)</li>
            </ul>
            <p><b>Note:</b> IE9 does not support transitions or animations. The template will function properly but it won't use animations/transitions on IE9.</p>
          </section>

{/* /          <!-- ============================================================= --> */}

          <section id='upgrade'>
            <h2  className='page-header'><span>Upgrade Guide</span></h2>
            <p  className="lead">To upgrade from version 1.x to the lateset version, follow this guide.</p>
            <h3>New Files</h3>
            <p>Make sure you update all CSS and JS files that are related to AdminLTE. Otherwise, the layout will not
            function properly. Most important files are AdminLTE.css, skins CSS files, and app.js.</p>
            <h3>Layout Changes</h3>
            {/* <ol>
              <li>The .wrapper div must be placed immediately after the body tag rather than after the header</li>
              <li>Change the .header div to .main-header <code>&LT;div  className="main-header"></code></li>
              <li>Change the .right-side class to .content-wrapper <code>&LT;div  className="content-wrapper"></code></li>
              <li>Change the .left-side class to .main-sidebar <code>&LT;div  className="main-sidebar"></code></li>
              <li>In the navbar, change .navbar-right to .navbar-custom-menu <code>&LT;div  className="navbar-custom-menu"></code></li>
            </ol> */}
            <h3>Navbar Custom Dropdown Menus</h3>
            <ol>
              <li>The icons in the notification menu do not need bg-* classes. They should be replaced with contextual text color class such as text-aqua or text-red.</li>
            </ol>
            <h3>Login, Registration and Lockscreen Pages</h3>
            <p>There are major changes to the HTML markup and style to these pages. The best way is to copy the page's code and customize it.</p>
            <p>And you should be set to go!</p>
            <h3>Mailbox</h3>
            <p>Mailbox got an upgrade to include three different views. The views are inbox, read mail, and compose new email. To use these views,
            you should use the provided HTML files in the pages/mailbox folder.</p>
            <p><b  className="text-red">Note:</b> the old mailbox layout has been deprecated in favor of the new one and will be removed by the next release.</p>
          </section>

          {/* <!-- ============================================================= --> */}

          <section id='faq'>
            <h2  className='page-header'><span>FAQ</span></h2>
            <h3>Can AdminLTE be used with Wordpress?</h3>
            <p  className="lead">AdminLTE is an HTML template that can be used for any purpose. However, it is not made to be easily installed on Wordpress. It will require some effort and enough knowledge of the Wordpress script to do so.</p>

            <h3>Is there an integration guide for PHP frameworks such as Yii or Symphony?</h3>
            <p  className='lead'>Short answer, no. However, there are forks and tutorials around the web that
              provide info on how to integrate with many different frameworks. There are even versions of
              AdminLTE that are integrated with jQuery ajax, AngularJS and/or MVC5 ASP .NET.
            </p>

            <h3>How do I get notified of new AdminLTE versions?</h3>
            <p  className='lead'>The best option is to subscribe to our mailing list using the
              <a href="http://almsaeedstudio.com/#subscribe">subscription form on Almsaeed Studio</a>.
              If that's not appealing to you, you may watch the <a href="https://github.com/almasaeed2010/AdminLTE">repository on Github</a>
              or visit <a href="http://almsaeedstudio.com">Almsaeed Studio</a> every now and then for updates and announcements.</p>
          </section>

          {/* <!-- ============================================================= --> */}

          <section id="license">
            <h1  className="page-header"><span>License</span></h1>
            <h3>AdminLTE</h3>
            <p  className="lead">AdminLTE is an open source project that is licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.
              This allows you to do pretty much anything you want with it except selling it without any major modifications.
              Attribution is not required (though very much appreciated).</p>
            <h3>AdminLTE Premium Collection (Coming Soon)</h3>
            <p  className="lead">AdminLTE's premium collection provides a set of non-open source components, plugins and widgets. To use
              the premium collection, you must buy a license that fits your use case. The following is the set of available licenses:</p>
            <p><b>Single Application License</b></p>
            <ul>
              <li>Your use of the item is restricted to a single installation.</li>
              <li>You may use the item in work which you are creating for your own purposes or for your client.</li>
              <li>You must not incorporate the item in a work which is created for redistribution or resale by you or your client.</li>
              <li>The item may not be redistributed or resold.</li>
              <li>If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.</li>
              <li>If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).</li>
            </ul>
            <p><b>Multiple Applications License</b></p>
            <ul>
              <li>Your use of the item may extend to multiple installations.</li>
              <li>You may use the item in work which you are creating for your own purposes or for your clients.</li>
              <li>You must not incorporate the item in a work which is created for redistribution or resale by you or your clients.</li>
              <li>The item may not be redistributed or resold.</li>
              <li>If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.</li>
              <li>If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).</li>
            </ul>

            <p><b>Extended License</b></p>
            <p>This license must be purchased if you intend to license, sublicense, redistribute, or resell the final product.</p>
            <ul>
              <li>Your use of the item may extend to multiple installations.</li>
              <li>You may use the item in work which you are creating for your own purposes or for your clients.w </li>
              <li>You may license, sublicense, redistribute, or resell the item in the following circumstances:</li>
                <ul>
                  <li>The item is incorporated into a larger work you have created; or</li>
                  <li>If you modify the item and resell the end product. </li>
                  <li>If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis. </li>
                  <li>If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).</li>
                </ul>
            </ul>
            <p>For further question about which license you should get, please email us at <a href="mailto:support@almsaeedstudio.com">support@almsaeedstudio.com</a>.</p>
          </section>
        </div>
        {/* <!-- /.content --> */}
   
    </>
  )
}


