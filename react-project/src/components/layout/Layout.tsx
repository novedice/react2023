import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './layout.css';
// type Props = {
//   location: {
//     path: string;
//   };
// };

class Layout extends React.Component {
  state: {
    activeMain: string;
    activeAbout: string;
  };
  location: Location;

  // static propTypes = {
  //   // match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   // history: PropTypes.object.isRequired,
  // };

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: { location: Location }) {
    super(props);
    this.location = props.location;
    this.state = { activeMain: 'active', activeAbout: '' };
    this.activeMainHandle = this.activeMainHandle.bind(this);
    this.activeAboutHandle = this.activeAboutHandle.bind(this);
  }

  activeMainHandle() {
    this.setState({ activeMain: 'active', activeAbout: '' });
    console.log(this.state);
    console.log(this.location?.href);

    // console.log(this.location.pathname);
  }
  activeAboutHandle() {
    this.setState({ activeMain: '', activeAbout: 'active' });
    console.log(this.location?.href);
  }

  componentDidMount(): void {
    console.log(this.location?.href);
  }

  render() {
    // const { location } = this.props;
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
