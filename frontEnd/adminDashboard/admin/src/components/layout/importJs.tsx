import Script from 'next/script';

export default function ImportScript(){

  return (
    <>
      <Script  src=" /plugins/jQuery/jQuery-2.1.3.min.js" /> 
    {/* <!-- jQuery UI 1.11.2 -- /> */}
    <Script  src="http://code.jquery.com/ui/1.11.2/jquery-ui.min.js" type="text/javascript" /> 
    {/* <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -- /> */}
    <Script  />
      {/* $.widget.bridge('uibutton', $.ui.button); */}
     
    {/* <!-- Bootstrap 3.3.2 JS -- /> */}
    <Script  src="/js/bootstrap.min.js" type="text/javascript" />     
    {/* <!-- Morris.js charts -- /> */}
    <Script  src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js" /> 
    <Script  src=" /plugins/morris/morris.min.js" type="text/javascript" /> 
    {/* <!-- Sparkline -- /> */}
    <Script  src=" /plugins/sparkline/jquery.sparkline.min.js" type="text/javascript" /> 
    {/* <!-- jvectormap -- /> */}
    <Script  src=" /plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" type="text/javascript" /> 
    <Script  src="/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" type="text/javascript" /> 
    {/* <!-- jQuery Knob Chart -- /> */}
    <Script  src=" /plugins/knob/jquery.knob.js" type="text/javascript" /> 
    {/* <!-- daterangepicker -- /> */}
    <Script  src=" /plugins/daterangepicker/daterangepicker.js" type="text/javascript" /> 
    {/* <!-- datepicker -- /> */}
    <Script  src=" /plugins/datepicker/bootstrap-datepicker.js" type="text/javascript" /> 
    {/* <!-- Bootstrap WYSIHTML5 -- /> */}
    <Script  src=" /plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript" /> 
    {/* <!-- iCheck -- /> */}
 
    {/* <!-- Slimscroll -- /> */}
    <Script  src=" /plugins/slimScroll/jquery.slimscroll.min.js" type="text/javascript" /> 
    {/* <!-- FastClick -- /> */}
    <Script  src=' /plugins/fastclick/fastclick.min.js' /> 
    {/* <!-- AdminLTE App -- /> */}
    <Script  src=" /dist/js/app.min.js" type="text/javascript" /> 

    {/* <!-- AdminLTE dashboard demo (This is only for demo purposes) -- /> */}
    <Script  src=" /dist/js/pages/dashboard.js" type="text/javascript" /> 

    {/* <!-- AdminLTE for demo purposes -- /> */}
    <Script  src=" /dist/js/demo.js" type="text/javascript" /> 

    </>
  )
}