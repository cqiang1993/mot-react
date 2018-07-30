import React,{Component} from 'react';
import {Navbar,NavDropdown,NavItem,MenuItem,Nav,Button} from 'react-bootstrap';
import logo from '../resource/image/repute-logo-nav.png';
import '../css/nav.css'
import * as bootstrapUtils from "react-bootstrap/es/utils/bootstrapUtils";
bootstrapUtils.addStyle(Navbar,'default');

class NavMot extends Component{

    render(){
        const styleForButton = {
            "display":"block"
        };
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand"><img src={logo} alt="ND QA YUN MONITOR ONLINE"/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>首页</NavItem>
                        <NavDropdown eventKey={2} title="组件详情" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>组件线上情况</MenuItem>
                            <MenuItem eventKey={2.2}>组件列表</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="组装产品" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>组装产品列表</MenuItem>
                            <MenuItem eventKey={3.2}>组装产品配置</MenuItem>
                            <MenuItem eventKey={3.3}>我的组装产品</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="独立产品" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}>独立产品列表</MenuItem>
                            <MenuItem eventKey={4.2}>独立产品配置</MenuItem>
                        </NavDropdown>
                        <NavItem>Bug管理</NavItem>
                        <NavDropdown eventKey={5} title="运营数据" id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1}>服务端项目数据统计</MenuItem>
                            <MenuItem eventKey={5.2}>客户端项目数据统计</MenuItem>
                        </NavDropdown>
                        <NavItem>需求提交</NavItem>
                        <li style={styleForButton}>
                            <Button style={{textAlign: "center",
                                border: "2px solid #ffffff",
                                backgroundColor: "#4575f0",
                                width: "90px",
                                height: "35px",
                                borderRadius: "20px",
                                marginLeft: "15px",
                                marginTop: "15px",
                                color: "#ffffff"}}>登录</Button>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavMot;