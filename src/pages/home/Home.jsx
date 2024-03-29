import React from 'react'
import "./Home.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
export default function Home() {
   return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="chartsContainer">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months(Revenue)" className="chart"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
        </div>
    </div>
  )
}
