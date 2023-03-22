import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ActiveState, LayoutProps } from '../../types';
import './layout.css';

class Layout extends React.Component<LayoutProps> {
  state: ActiveState;

  constructor(props: LayoutProps) {
    super(props);
    this.state = props.state;
    this.activeMainHandle = this.activeMainHandle.bind(this);
    this.activeAboutHandle = this.activeAboutHandle.bind(this);
    this.activeFormHandle = this.activeFormHandle.bind(this);
  }

  activeMainHandle() {
    this.setState({ activeMain: 'active', activeAbout: '', activeForm: '' });
  }

  activeAboutHandle() {
    this.setState({ activeMain: '', activeAbout: 'active', activeForm: '' });
  }

  activeFormHandle() {
    this.setState({ activeMain: '', activeAbout: '', activeForm: 'active' });
  }

  componentDidMount(): void {}

  render() {
    return (
      <>
        <header className="header-wrap">
          <Link
            to="/"
            className={`unlink ${this.state.activeMain}`}
            onClick={this.activeMainHandle}
          >
            main
          </Link>
          <Link
            to="/about"
            className={`unlink ${this.state.activeAbout}`}
            onClick={this.activeAboutHandle}
          >
            about us
          </Link>
          <Link
            to="/form"
            className={`unlink ${this.state.activeForm}`}
            onClick={this.activeFormHandle}
          >
            form
          </Link>
          {/* <div>{location}</div> */}
        </header>
        <Outlet />
        <footer className="footer-wrap">2023</footer>
      </>
    );
  }
}

export default Layout;
