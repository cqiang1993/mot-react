import React,{Component} from 'react';
import {Navbar,NavDropdown,NavItem,MenuItem,Nav,Button} from 'react-bootstrap';
import logo from '../resource/image/repute-logo-nav.png';
import '../css/index.css'
import * as bootstrapUtils from "react-bootstrap/es/utils/bootstrapUtils";
// bootstrapUtils.addStyle(Navbar,'default-style');



class NavMot extends Component{
    render(){
        return(
            <div>
                <style type="text/css">{`
                    .navbar-default {
                        background-color: #4575f0;
                        border-bottom: 2px solid #e7e7e7;
                        border-top: none;
                        height: 70px;
                    }
                    .navbar {
                        -moz-border-radius: 0;
                        -webkit-border-radius: 0;
                        border-radius: 0;
                        margin: 0;
                        border-left: none;
                        border-right: none;
                    }
                `}</style>
                <Navbar bsStyle="default-style">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand"><img src={logo} alt="ND QA YUN MONITOR ONLINE"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem>首页</NavItem>
                            <NavDropdown eventKey={3} title="组件详情" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>组件线上情况</MenuItem>
                                <MenuItem eventKey={3.2}>组件列表</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="组装产品" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>组装产品列表</MenuItem>
                                <MenuItem eventKey={3.2}>组装产品配置</MenuItem>
                                <MenuItem eventKey={3.3}>我的组装产品</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="独立产品" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>独立产品列表</MenuItem>
                                <MenuItem eventKey={3.2}>独立产品配置</MenuItem>
                            </NavDropdown>
                            <NavItem>Bug管理</NavItem>
                            <NavDropdown eventKey={3} title="运营数据" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>服务端项目数据统计</MenuItem>
                                <MenuItem eventKey={3.2}>客户端项目数据统计</MenuItem>
                            </NavDropdown>
                            <NavItem>需求提交</NavItem>
                            <NavItem>
                                <Button>登录</Button>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>

        );
    }
}
export default NavMot;