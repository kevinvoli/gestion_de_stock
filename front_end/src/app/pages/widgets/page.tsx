




export default function Widgets(){

  return (
    <>
            <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <h1>
            Widgets
            <small>Preview page</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Widgets</li>
          </ol>
        </section>

        {/* <!-- Main content --> */}
        <section className="content">
          <h4 className="page-header">
            AdminLTE Small Boxes
            <small>Small boxes are used for viewing statistics. To create a small box use the class <code>.small-box</code> and mix & match using the <code>bg-*</code> classes.</small>
          </h4>
          {/* <!-- Small boxes (Stat box) --> */}
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-aqua">
                <div className="inner">
                  <h3>
                    150
                  </h3>
                  <p>
                    New Orders
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>
                    53<sup style={{fontSize: "20px"}}>%</sup>
                  </h3>
                  <p>
                    Bounce Rate
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>
                    44
                  </h3>
                  <p>
                    User Registrations
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>
                    65
                  </h3>
                  <p>
                    Unique Visitors
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- Small boxes (Stat box) --> */}
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-blue">
                <div className="inner">
                  <h3>
                    230
                  </h3>
                  <p>
                    Sales
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-ios-cart-outline"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-purple">
                <div className="inner">
                  <h3>
                    80<sup style={{fontSize: "20px"}}>%</sup>
                  </h3>
                  <p>
                    Conversion Rate
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-ios-briefcase-outline"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-teal">
                <div className="inner">
                  <h3>
                    14
                  </h3>
                  <p>
                    Notifications
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-ios-alarm-outline"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-maroon">
                <div className="inner">
                  <h3>
                    160
                  </h3>
                  <p>
                    Products
                  </p>
                </div>
                <div className="icon">
                  <i className="ion ion-ios-pricetag-outline"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- Widgets as boxes --> */}
          <h4 className="page-header">
            AdminLTE Boxes
            <small>We use the base class <code>.box</code> to create widgets simply.</small>
          </h4>
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Default box --> */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Default Box (button tooltip)</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
                <div className="box-footer">
                  <code>.box-footer</code>
                </div>
                {/* <!-- /.box-footer--> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Primary box --> */}
              <div className="box box-primary">
                <div className="box-header" data-toggle="tooltip" title="Header tooltip">
                  <h3 className="box-title">Primary Box (header tooltip)</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-primary btn-xs" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-primary btn-xs" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-primary</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
                <div className="box-footer">
                  <code>.box-footer</code>
                </div>
                {/* <!-- /.box-footer--> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Info box --> */}
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">Info Box</h3>
                  <div className="box-tools pull-right">
                    <div className="label bg-aqua">Label</div>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-info</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
                <div className="box-footer">
                  <code>.box-footer</code>
                </div>
                {/* <!-- /.box-footer--> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-4">
              {/* <!-- Danger box --> */}
              <div className="box box-danger">
                <div className="box-header">
                  <h3 className="box-title">Danger Box (Loading state)</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-danger btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-danger btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-danger</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
                {/* <!-- Loading (remove the following to stop the loading)--> */}
                <div className="overlay">
                  <i className="fa fa-refresh fa-spin"></i>
                </div>
                {/* <!-- end loading --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Success box --> */}
              <div className="box box-success">
                <div className="box-header">
                  <h3 className="box-title">Success Box (toggle buttons)</h3>
                  <div className="box-tools pull-right">
                    <div className="btn-group" data-toggle="btn-toggle">
                      <button type="button" className="btn btn-success btn-xs active" data-toggle="on">Left</button>
                      <button type="button" className="btn btn-success btn-xs" data-toggle="off">Right</button>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-success</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Warning box --> */}
              <div className="box box-warning">
                <div className="box-header">
                  <h3 className="box-title">Warning Box</h3>
                  <div className="box-tools pull-right">
                    <ul className="pagination pagination-sm inline">
                      <li><a href="#">&laquo;</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-warning</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <h4 className="page-header">
            AdminLTE Solid Boxes
            <small>We use the base class <code>.box</code> and <code>.box-solid</code> to create solid boxes that look like this.</small>
          </h4>
          {/* <!-- Solid boxes --> */}
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Default box --> */}
              <div className="box box-solid box-default">
                <div className="box-header">
                  <h3 className="box-title">Default Solid Box</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Primary box --> */}
              <div className="box box-solid box-primary">
                <div className="box-header">
                  <h3 className="box-title">Primary Solid Box</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-primary btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-primary btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.box-primary</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Info box --> */}
              <div className="box box-solid box-info">
                <div className="box-header">
                  <h3 className="box-title">Info Solid Box</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-info btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-info btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.box-info</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-4">
              {/* <!-- Danger box --> */}
              <div className="box box-solid box-danger">
                <div className="box-header">
                  <h3 className="box-title">Danger Solid Box</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-danger btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-danger btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.box-danger</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Success box --> */}
              <div className="box box-solid box-success">
                <div className="box-header">
                  <h3 className="box-title">Success Solid Box</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.box-success</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Warning box --> */}
              <div className="box box-solid box-warning">
                <div className="box-header">
                  <h3 className="box-title">Warning Solid Box</h3>
                  <div className="box-tools pull-right">
                    <button className="btn btn-warning btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-warning btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.box-warning</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <h4 className="page-header">
            AdminLTE Tiles
            <small>To create a tile we create a solid box and a <code>.bg-*</code> class ( * being the name of the color) to the box.</small>
          </h4>
          {/* <!-- Solid boxes --> */}
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Navy tile --> */}
              <div className="box box-solid bg-navy">
                <div className="box-header">
                  <h3 className="box-title">Navy Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-navy</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Primary tile --> */}
              <div className="box box-solid bg-light-blue">
                <div className="box-header">
                  <h3 className="box-title">Primary Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-light-blue</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Info box --> */}
              <div className="box box-solid bg-aqua">
                <div className="box-header">
                  <h3 className="box-title">Info Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-aqua</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

          <div className="row">
            <div className="col-md-4">
              {/* 
              <!-- Danger box --> */}
              <div className="box box-solid bg-red">
                <div className="box-header">
                  <h3 className="box-title">Danger Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-red</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Success box --> */}
              <div className="box box-solid bg-green">
                <div className="box-header">
                  <h3 className="box-title">Success Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-green</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Warning box --> */}
              <div className="box box-solid bg-yellow">
                <div className="box-header">
                  <h3 className="box-title">Warning Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-yellow</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Purple tile --> */}
              <div className="box box-solid bg-purple">
                <div className="box-header">
                  <h3 className="box-title">Purple Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-purple</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Blue tile --> */}
              <div className="box box-solid bg-blue">
                <div className="box-header">
                  <h3 className="box-title">Blue Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-blue</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}

            <div className="col-md-4">
              {/* <!-- Maroon tile --> */}
              <div className="box box-solid bg-maroon">
                <div className="box-header">
                  <h3 className="box-title">Maroon Tile</h3>
                </div>
                <div className="box-body">
                  Box class: <code>.box.box-solid.bg-maroon</code>
                  <p>
                    amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.
                    berliner weisse wort chiller adjunct hydrometer alcohol aau!
                    sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.
                  </p>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}

        </section>
        {/* <!-- /.content --> */}
      </div>
    </>
  )
}






