import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import Catagories from './Catagories'
import SideBarTitle from './SideBarTitle'
import BlogNewsletter from './BlogNewsletter'

function BlogContent() {
  return (


      <section className="standard-blog-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb01.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
                  <div className="blog-post-meta">
                    <ul>
                      <li className="tags"><i className="flaticon-bookmark-1" />
                        <a href="/#">Siberian Husky , </a>
                        <a href="/#">Breed</a>
                      </li>
                      <li><i className="far fa-user" /><a href="/#">Admin</a></li>
                      <li><i className="far fa-bell" /> Mar 10, 2021</li>
                    </ul>
                  </div>
                  <h2 className="title"><Link to="/blog-details">Participa en la primera versión de SalvaPET</Link></h2>
                  <p>De momento el sistema se encuentra en una fase BETA en la que todos los que deseen pueden participar, CORRE!! A los 3 primeros que se unan a usar el sistema y recomendarlo se les otorgara una licencia PREMIUM de por vida.</p>
                </div>
              </div>
          
            </div>
            <div className="col-lg-4 col-md-8">
              <aside className="blog-sidebar">
                <div className="widget">
                  <h4 className="sidebar-title">Recent Post</h4>
                    <SideBarTitle/>
                </div>
                <BlogNewsletter/>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BlogContent;
