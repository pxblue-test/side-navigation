import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import App from './App';
import Drawer from 'material-ui/Drawer';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import ListItem from '@material-ui/core/ListItem';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
 ReactDOM.unmountComponentAtNode(div);
});

it('defaults to homepage', () => {
    const wrapper = mount(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      );
      expect(wrapper.find('#HOME')).toHaveLength(1);
});

it('renders homepage for bad routes', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find('#HOME')).toHaveLength(1);
});

it('renders correct route', () => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/logout' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find('#LOGOUT')).toHaveLength(1);
      
      wrapper = mount(
        <MemoryRouter initialEntries={[ '/settings' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find('#SETTINGS')).toHaveLength(1);

      wrapper = mount(
        <MemoryRouter initialEntries={[ '/eventlog' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find('#EVENTLOG')).toHaveLength(1);

      wrapper = mount(
        <MemoryRouter initialEntries={[ '/products' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find('#PRODUCTS')).toHaveLength(1);
});

it('defaults to drawer closed', () => {
 const app = shallow(<App />);
 const drawer = app.find(Drawer);
 expect(drawer.props().open).toBeFalsy();
});

it('opens and closes the drawer', () => {
    const app = shallow(<App />);
    app.instance().toggleDrawer();
    let drawer = app.find(Drawer);
    expect(drawer.props().open).toBeTruthy();
    app.instance().toggleDrawer();
    drawer = app.find(Drawer);
    expect(drawer.props().open).toBeFalsy();
});