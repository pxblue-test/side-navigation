// React Basics
import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';

// Material-UI Theming Elements
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// Material-UI Components
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// Material-UI Icons
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import FlagIcon from 'material-ui-icons/Flag';
import FolderIcon from 'material-ui-icons/Folder';
import InfoIcon from 'material-ui-icons/Info';
import LocalOfferIcon from 'material-ui-icons/LocalOffer';
import MenuIcon from 'material-ui-icons/Menu';
import MoveToInboxIcon from 'material-ui-icons/MoveToInbox';
import SendIcon from 'material-ui-icons/Send';
import SettingsIcon from 'material-ui-icons/Settings';
import SubdirectoryArrowRightIcon from 'material-ui-icons/SubdirectoryArrowRight';

import './style.css';


/*
The container for the entire app, including the common side-navigation panel and the main body panel.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false
    }
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  toggleNavMenu() {
    this.setState({ showUserMenu: !this.state.showUserMenu });
  }

  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme()}>
        <div>
          <AppBar position="fixed" style={{ backgroundColor: '#007bc1' }}>
            <Toolbar>
              <IconButton color="inherit" onClick={() => this.toggleDrawer()}><MenuIcon/></IconButton>
              <Typography type="title" color="inherit">Selected Page Name</Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer()} PaperProps={{width: '1600px'}}>
            <div className={"flexVert"} style={{ height: '100%', width: '360px' }}> 
              <div className="flexVertBottom" style={{height: "180px", color: 'white', background: '#007bc1', padding: '16px' }}>
                  <Circle/>
                  <div style={{ cursor: "pointer", width: '100%' }} onClick={() => this.toggleNavMenu()}>
                    <Typography variant="subheading" color="inherit" style={{lineHeight:'1rem'}}>User Name</Typography>
                    <div className={'flexHor'}>
                      <Typography variant="subheading" color="inherit" style={{lineHeight:'1rem'}}>username@domain.com</Typography>
                      <div style={{flex: '1 1 0px'}}/>
                      <ExpandMoreIcon style={this.state.showUserMenu ? {transform: 'rotate(180deg)'} : null}/>
                    </div>
                  </div>
              </div>

              {this.state.showUserMenu ?
                <List subheader={<ListSubheader>User Account</ListSubheader>}>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText inset primary="User Profile" />
                  </ListItem>
                  <ListItem button component={Link} to='/logout' onClick={() => this.toggleDrawer()}>
                    <ListItemIcon><SubdirectoryArrowRightIcon /></ListItemIcon>
                    <ListItemText inset primary="Log Out" />
                  </ListItem>
                </List>
                :
                <List subheader={<ListSubheader>Monitor</ListSubheader>}>
                  <Divider />
                  <ListItem button component={Link} to='/alerts' onClick={() => this.toggleDrawer()}>
                    <ListItemIcon><MoveToInboxIcon /></ListItemIcon>
                    <ListItemText inset primary="Alerts" />
                  </ListItem>
                  <ListItem button component={Link} to='/schedule' onClick={() => this.toggleDrawer()}>
                    <ListItemIcon><SendIcon /></ListItemIcon>
                    <ListItemText inset primary="Schedule" />
                  </ListItem>
                  <ListItem button component={Link} to='/products' onClick={() => this.toggleDrawer()}>
                    <ListItemIcon><FolderIcon /></ListItemIcon>
                    <ListItemText inset primary="Products" />
                  </ListItem>
                  <ListItem button component={Link} to='/eventlog' onClick={() => this.toggleDrawer()}>
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText inset primary="Event Log" />
                  </ListItem>
                  <ListItem button component={Link} to='/settings' onClick={() => this.toggleDrawer()}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText inset primary="Settings" />
                  </ListItem>
                </List>}
              <div style={{ flex: '1 1 0px' }} />

              <Divider />
              <List style={{flex: '0 0 auto' }} subheader={<ListSubheader>About<span style={{ position: 'absolute', right: '0px', paddingRight: '16px' }}>Software Version v1.0.3</span></ListSubheader>}>
                <Divider />
                <ListItem button>
                  <ListItemIcon><FlagIcon /></ListItemIcon>
                  <ListItemText inset primary="User Guide" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><LocalOfferIcon /></ListItemIcon>
                  <ListItemText inset primary="License Agreement" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;


/* 
Some helper object/classes. These can be moved to separate files when they grow in complexity.
*/

const Circle = () => (
  <div style={{
    padding: 10,
    marginBottom: 10,
    display: "inline-block",
    backgroundColor: '#ffffff',
    borderRadius: "50%",
    width: 64,
    height: 64
  }}>
  </div>
);


/* 
Define each of the individual pages. When these have real content, they should be moved to their own file and then included with the rest of the import statements.
*/
const Alerts = () => (
  <div>
    <h1>Welcome to the Alert page!</h1>
  </div>
);

const Schedule = () => (
  <div>
    <h1>Welcome to the Schedule page!</h1>
  </div>
);

const Products = () => (
  <div>
    <h1>Welcome to the Products page!</h1>
  </div>
);

const EventLog = () => (
  <div>
    <h1>Welcome to the Event Log page!</h1>
  </div>
);

const Settings = () => (
  <div>
    <h1>Welcome to the Settings page!</h1>
  </div>
);

const Logout = () => (
  <div>
    <h1>You've successfully logged out!</h1>
  </div>
);

const Home = () => (
  <div>
    <h1>Welcome to the App!</h1>
  </div>
);


/*
The main page body, which contains the route definitions
*/
const Main = () => (
  <main style={{paddingTop:60}}>
    <Switch>
      <Route exact path='/alerts' component={Alerts}/>
      <Route exact path='/schedule' component={Schedule}/>
      <Route exact path='/logout' component={Logout}/>
      <Route exact path='/products' component={Products}/>
      <Route exact path='/eventlog' component={EventLog}/>
      <Route exact path='/settings' component={Settings}/>
      <Route exact path='/logout' component={Logout}/>
      <Route path='*' component={Home}/>
    </Switch>
  </main>
);