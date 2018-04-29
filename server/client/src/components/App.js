import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Hearder = () => <h2> Hearder </h2>;
const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;
const Landing = () => <h2> Landing </h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Hearder />
          <Route exact path="/" component={Landing} />
          <Route exact path="/Surveys" component={Dashboard} />
          <Route path="/Surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
