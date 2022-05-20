import React, {Fragment} from 'react';
import Switcher from "./components/Switcher";
import {
       BrowserRouter as Router,
       Routes,
       Route,
     } from "react-router-dom";

/*
* @ Component Imported
* */
import CredentialPage from "./pages/credential";
import GraphicDesignPage from "./pages/graphicdesign";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404Error";
import ContactPage from "./pages/contact";
import ServicePage from "./pages/service";
import HomeBlog from "./pages/home/HomeBlog";
import HomeDefault from "./pages/home/HomeDefault";
import BlogDetailsPage from "./pages/blog/BlogDetails";
import HomeFiveColumn from './pages/home/HomeFiveColumn';
import HomeFourColumn from "./pages/home/HomeFourColumn";
import BlogThreeColumnPage from "./pages/blog/ThreeColumn";
import HomeThreeColumn from "./pages/home/HomeThreeColumn";
import PortfolioDetailsPage from "./pages/portfolio/details";
import HomePersonalPortfolio from "./pages/home/HomePersonalPortfolio";
import HomeFreelancerPortfolio from "./pages/home/HomeFreelancerPortfolio";
import PortfolioGridTwoColumnPage from "./pages/portfolio/grid/two-column";
import BlogTwoColumnLeftSidebarPage from "./pages/blog/TwoColumnLeftSidebar";
import PortfolioGridFourColumnPage from "./pages/portfolio/grid/four-column";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
import BlogTwoColumnRightSidebarPage from "./pages/blog/TwoColumnRightSidebar";
import PortfolioMasonryTwoColumnPage from "./pages/portfolio/masonry/two-column";
import PortfolioMasonryFourColumnPage from "./pages/portfolio/masonry/four-column";
import PortfolioMasonryThreeColumnPage from "./pages/portfolio/masonry/three-column";
import PortfolioGridFourColumnFullWidthPage from "./pages/portfolio/grid/four-column-fullwidth";
import PortfolioGridFiveColumnFullWidthPage from "./pages/portfolio/grid/five-column-fullwidth";
import PortfolioGridThreeColumnFullWidthPage from "./pages/portfolio/grid/three-column-fullwidth";
import PortfolioMasonryFourColumnFullWidthPage from "./pages/portfolio/masonry/four-column-fullwidth";
import PortfolioMasonryFiveColumnFullWidthPage from "./pages/portfolio/masonry/five-column-fullwidth";
import PortfolioMasonryThreeColumnFullWidthPage from "./pages/portfolio/masonry/three-column-fullwidth";

const App = () => {
    return (
        <Fragment>
            <Switcher/>
            <Router>
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`}
                           element={<ContactPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/credential"}`}
                           element={<CredentialPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/graphicdesign"}`}
                           element={<GraphicDesignPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`}
                           element={<ServicePage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog/:slug"}`}
                           element={<BlogDetailsPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-two-column-left-sidebar"}`}
                           element={<BlogTwoColumnLeftSidebarPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-two-column-right-sidebar"}`}
                           element={<BlogTwoColumnRightSidebarPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog"}`}
                           element={<BlogThreeColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           element={<PortfolioDetailsPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-five-column-fullwidth"}`}
                           element={<PortfolioMasonryFiveColumnFullWidthPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column-fullwidth"}`}
                           element={<PortfolioMasonryFourColumnFullWidthPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-three-column-fullwidth"}`}
                           element={<PortfolioMasonryThreeColumnFullWidthPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column"}`}
                           element={<PortfolioMasonryFourColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-three-column"}`}
                           element={<PortfolioMasonryThreeColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-two-column"}`}
                           element={<PortfolioMasonryTwoColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-five-column-fullwidth"}`}
                           element={<PortfolioGridFiveColumnFullWidthPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-four-column-fullwidth"}`}
                           element={<PortfolioGridFourColumnFullWidthPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-three-column-fullwidth"}`}
                           element={<PortfolioGridThreeColumnFullWidthPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-four-column"}`}
                           element={<PortfolioGridFourColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-three-column"}`}
                           element={<PortfolioGridThreeColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-two-column"}`}
                           element={<PortfolioGridTwoColumnPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                           element={<AboutPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-freelancer-portfolio"}`}
                           element={<HomeFreelancerPortfolio/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-personal-portfolio"}`}
                           element={<HomePersonalPortfolio/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-blog"}`}
                           element={<HomeBlog/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-five-column"}`}
                           element={<HomeFiveColumn/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-four-column"}`}
                           element={<HomeFourColumn/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-three-column"}`}
                           element={<HomeThreeColumn/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-default"}`}
                           element={<HomeDefault/>}/>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`}
                           element={<HomeDefault/>}
                    />
                    <Route element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </Fragment>
    );
};

export default App;