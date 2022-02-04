import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import TrendingPage from "./pages/trendingPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvDetailPage from "./pages/tvDetailsPage";
import TvPage from './pages/tvPage';
import FavoriteTvShowPage from "./pages/favoriteTvShowPage"; // NEW
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader"


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
    <AuthProvider>
      <SiteHeader />
      <AuthHeader />     {/* New Header  */}
    <MoviesContextProvider>
            {" "}
      <Switch>
     <Route exact path="/trending" component={TrendingPage} />
      <Route exact path="/tv/favoritetv" component={FavoriteTvShowPage} />
      <Route exact path="/discovertv" component={TvPage} />
      <Route path="/tv/:id" component={TvDetailPage} />
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route exact path="/login" component={LoginPage} /> 
        <Route exact path="/SignUP" component={SignUpPage} /> 
    <Route exact path="/upcoming" component={UpcomingMoviesPage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={FavoriteMoviesPage} />
        <Redirect from="*" to="/login" />
      </Switch>
      </MoviesContextProvider>
      </AuthProvider>
      </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));