import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import Map from './Map';
import Gallery from './Gallery';
import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

const Content = () => (
<main>
<Switch>
<Route exact path="/" component={Map} />
<Route path="/gallery" component={Gallery} />
<Route path="/counter" component={Counter} />
</Switch>
</main>
);

const Menu = () => (
<header>
<nav>
<ul>
<li><Link to="/">Карта</Link></li>
<li><Link to="/gallery">Галерея</Link></li>
<li><Link to="/counter">Отзывы</Link></li>
</ul>
</nav>
</header>
);

class App extends C {
  constructor() {
    super();
    this.state = { Day: 3 };
  }
  render() {
    return (
      <div><Menu /><Content />
      <Counter stars={this.state.Day} />
        <DatePicker
          onChange={(n = null, date) => {
            const Day = Number( moment(date).format('DD') );
            this.setState({ Day });
          	}
          }
          floatingLabelText="Choose date!"
        />
      </div>);
  }
}
r(
<BrowserRouter><MuiThemeProvider><App /></MuiThemeProvider></BrowserRouter>,
document.querySelector('.cont'),
);