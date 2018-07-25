import React,{Component} from 'react';
import {Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class Nav extends Component{
    render(){
        return (
            <nav className="navbar navbar-default " role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#main-nav">
                            <span className="sr-only">Toggle Navigation</span>
                            <i className="fa fa-bars"/>
                        </button>
                        <a href="index.html" className="navbar-brand navbar-logo">
                            <img src="../yun2.0/images/logo/repute-logo-nav.png" alt="ND QA YUN MONITOR ONLINE"/>
                        </a>
                    </div>
                    {/* MAIN NAVIGATION */}
                    <div id="main-nav" className="navbar-collapse collapse navbar-mega-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown active"><a href="../index/index">首页</a></li>
                            <li className="dropdown ">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">组件详情</a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="../component/monitor">组件线上情况</a></li>
                                    <li><a href="../component/list">组件列表</a></li>
                                </ul>
                            </li>
                            <li className="dropdown ">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">组装产品</a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="../assemblyproject/list">组装产品列表</a></li>
                                    <li><a href="../assemblyproject/assemblyconfig">组装产品配置</a></li>
                                    <li><a href="../assemblyproject/myprobuglistcheck">我的产品统计</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">独立产品</a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="../independentproject/list">独立产品列表</a></li>
                                    <li><a href="../independentproject/independentconfig">独立产品配置</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="../pms/buglist">BUG管理</a></li>
                            <li className="dropdown ">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">运营数据</a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="../statistics/server_index">服务端项目数据统计</a></li>
                                    <li><a href="../statistics/client_index">客户端项目数据统计</a></li>
                                </ul>
                            </li>
                            <li className="dropdown "><a
                                href="http://pms.sdp.nd/index.php?m=bug&f=browse&productID=3799">需求提交</a></li>
                            <li id="listLoginBtn">
                                <button className="special-menu-item" onClick="login()">登录</button>
                            </li>
                            <li id="listLoginImg" style={{paddingTop: 10, paddingLeft: 10}} className="dropdown">
                                <img src id="avator" style={{borderRadius: 500, heigth: 50, width: 50}}/>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#" onClick="logout()">退出登陆</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* END MAIN NAVIGATION */}
                </div>
            </nav>
        );
    }
}
export default Nav;