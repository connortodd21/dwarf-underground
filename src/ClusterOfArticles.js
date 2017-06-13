import React, { Component } from 'react'
import './ClusterOfArticles.css'
import AroundRealm from './AroundRealm'
import SingleOrcs from './SingleOrcs'
import Mountain from './Mountain'
import WeirdTrick from './WeirdTrick'
import Surprise from './Surprise'

class Cluster extends Component {
    render() {
        return (
           <div className="small-12 columns other-articles">
            <AroundRealm />
            <SingleOrcs />
            <Mountain />
            <WeirdTrick />
            <Surprise />
          </div>
        )
    }
}

export default Cluster