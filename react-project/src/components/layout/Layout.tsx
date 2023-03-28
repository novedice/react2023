import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './layout.css';

type ActiveState = {
  activeMain: string;
  activeAbout: string;
};

type LayoutProps = {
  state: ActiveState;
  setState: React.Dispatch<React.SetStateAction<ActiveState>>;
};

class Layout extends React.Component<LayoutProps> {
  state: {
    activeMain: string;
    activeAbout: string;
  };

  constructor(props: LayoutProps) {
    super(props);
    this.state = props.state;
    this.activeMainHandle = this.activeMainHandle.bind(this);
    this.activeAboutHandle = this.activeAboutHandle.bind(this);
  }

  activeMainHandle() {
    this.setState({ activeMain: 'active', activeAbout: '' });
  }

  activeAboutHandle() {
    this.setState({ activeMain: '', activeAbout: 'active' });
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
          {/* <div>{location}</div> */}
        </header>
        <Outlet />
        <footer className="footer-wrap">2023</footer>
      </>
    );
  }
}

export default Layout;
