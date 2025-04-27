"use client"; // Obligatoire pour Next.js (App Router)

import { useState } from "react";

import Link from "next/link";
import Searche from "../forms/searche";






export default function Aside(){

  const [isOpen, setIsOpen] = useState(false);
  return (

            <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
          {/* <!-- Sidebar user panel --> */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>

              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          {/* <!-- search form --> */}
        <Searche/>
          {/* <!-- /.search form --> */}
          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
              </ul>
            </li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Log</span> <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li className=""><a href="/logs/userLogs"><i className="fa fa-circle-o"></i> List log</a></li>
                <li><a href="/logs/journals"><i className="fa fa-circle-o"></i>Journal Service</a></li>
                <li><a href="/logs/corbeille"><i className="fa fa-circle-o"></i>Corbeille</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Stock</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li ><a href="/Stock/Produits"><i className="fa fa-circle-o"></i> Produits</a></li>
                <li><a href="/Stock/categories_produits"><i className="fa fa-circle-o"></i>Categories Produits</a></li>
                <li><a href="/Stock/mouvements_stock"><i className="fa fa-circle-o"></i>Mouvements Stock</a></li>

                <li><a href="/Stock/entrepots"><i className="fa fa-circle-o"></i>Entrepots</a></li>
                <li><a href="/Stock/rangements"><i className="fa fa-circle-o"></i>Rangements</a></li>
                <li><a href="/Stock/rayons"><i className="fa fa-circle-o"></i>Rayons</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Administration</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li ><a href="/administration/permission"><i className="fa fa-circle-o"></i> Permission</a></li>
                <li><a href="/administration/ressource"><i className="fa fa-circle-o"></i>Ressource</a></li>
                <li><a href="/administration/role"><i className="fa fa-circle-o"></i>Admin Group</a></li>

                <li><a href="/administration/users"><i className="fa fa-circle-o"></i>Users</a></li>
             
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Commandes</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="/commandes/fournisseurs"><i className="fa fa-circle-o"></i> Fournisseurs</a></li>
                <li><a href="/commandes/clients"><i className="fa fa-circle-o"></i> Clients</a></li>
                <li><a href="/commandes/commandes"><i className="fa fa-circle-o"></i>  Commandes</a></li>
                <li><a href="/commandes/details_commandes"><i className="fa fa-circle-o"></i>  Details Commandes</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Notification</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Notification</a></li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>utilisateurs</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="users"><i className="fa fa-circle-o"></i> Utilisateur</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Roles</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i>  Permission</a></li>
              </ul>
            </li>
  
            <li className="header">LABELS</li>
            <li><a href="#"><i className="fa fa-circle-o text-danger"></i> Important</a></li>
            <li><a href="#"><i className="fa fa-circle-o text-warning"></i> Warning</a></li>
            <li><a href="#"><i className="fa fa-circle-o text-info"></i> Information</a></li>
          </ul>
        </section>
        {/* <!-- /.sidebar --> */}
      </aside>

  )
}