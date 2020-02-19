import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './userLocation';

const App = () => {
  
  const [latitude, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (latitude) {
    content = <SeasonDisplay lat={latitude}/>;
  } else {
    content = <Spinner message="Please accept location request" />
  }
  return <div className="border red">{content}</div>
}

// Class based component, before USE Hooks!!!

/* class App extends React.Component {
  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
} */

ReactDOM.render(<App />, document.querySelector('#root'));
