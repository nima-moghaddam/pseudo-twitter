import React from 'react'
import Layout from "./layout/Layout";
import Page404 from './../pages/Page404';
import Home from './../pages/home/Home';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import TweetsByHashTag from './../pages/tweetsByHashTag/TweetsByHashTag';
import TweetsByUser from './../pages/tweetsByUser/TweetsByUser';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path={'/'} render={() => {
                    return <Layout>
                        <Switch>
                            <Route path={'/'} exact component={Home} />
                            <Route path={'/hashtags/:hashtag'} component={TweetsByHashTag} />
                            <Route path={'/users/:user'} component={TweetsByUser} />
                            <Route component={Page404} />
                       </Switch>
                    </Layout>
                }}/>
            </BrowserRouter>
        </div>
    )
}

export default App