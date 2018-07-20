import React from "react";
// import {Link} from 'react-router';
import {BrowserRouter,HashRouter,Route,Link } from 'react-router-dom';
import { Layout, Menu, Icon,Breadcrumb,Button } from 'antd';
import Home from "./components/Home";
import Demo from "./components/Demo";
import RouterUrl from "./router/RouterUrl";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const ButtonGroup = Button.Group;
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'hello Mr Right',
            lastName:'Mr',
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    
    render (){
        return(
            // <div >
            //     <ul>
            //         <li><Link to={RouterUrl.home}>About</Link></li>
            //         <li><Link to={RouterUrl.demo}>Demo</Link></li>
            //     </ul>
            //     <div className="content">
            //         <Route exact path={RouterUrl.home} component={Home}></Route>
            //         <Route exact path={RouterUrl.demo} component={Demo}></Route>
            //     </div>
            // </div>
            <Layout style={{height:'100%'}}>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                >
                    <div className="logo" ><Icon type="alipay" /></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span><Link to={RouterUrl.home}>About</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span><Link to={RouterUrl.demo}>Demo</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <ButtonGroup>
                            <Button  icon="question-circle-o" />
                            <Button  icon="bell" />
                        </ButtonGroup>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route exact path={RouterUrl.home} component={Home}></Route>
                        <Route exact path={RouterUrl.demo} component={Demo}></Route>
                    </Content>
                </Layout>
          </Layout>
        )
    }
}
export default App;