import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import TodoContainer from "./containers/todoContainer";
import Form from "./components/form/Form";
import HomePage from "./pages/homePage";
import AccidentsPage from "./pages/accidentsPage";
import ComitteePage from "./pages/comitteePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <Switch>
      <Route exact path="/comittee" component={ComitteePage} />
      <Route exact path="/accidents" component={AccidentsPage} />
     <Route exact path="/todo" component={TodoContainer} />
    <Route exact path="/form" component={Form} />
      <Route path="/home" component={HomePage} />
        <Redirect from="*" to="/home" />
      </Switch>
      </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));