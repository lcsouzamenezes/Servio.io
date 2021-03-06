import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Nav from '../components/Nav';
import About from '../components/Home/About';
import Cases from '../components/Home/Cases';
import Contact from '../components/Home/Contact';
import Scrollbar from 'smooth-scrollbar';

export default class DesktopView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });

    //fixes need fo double click to scroll
    setTimeout(function () {
      scrollbar.scrollIntoView(document.querySelector('.header'), {
        alignToTop: true,
        offsetTop: 0
      });
    }, 3100);

    scrollbar.addListener(function () {

      let one = document.querySelector('#home-page > div.scroll-content > div.load-wrapper > div.about > div.wrapper > div.banner > #one');
      let two = document.querySelector('#home-page > div.scroll-content > div.load-wrapper > div.about > div.wrapper > div.banner > #two');
      let three = document.querySelector('#home-page > div.scroll-content > div.load-wrapper > div.about > div.wrapper > div.banner > #three');
      let scrollTarget = scrollbar.isVisible(two);

      function animate() {
        $('#one').css({
          'opacity': '1',
          'transition': 'opacity 0.8s ease-in'
        });
        $('#two').css({
          'opacity': '1',
          'transition': 'opacity 0.8s ease-in'
        });
        $('#three').css({
          'opacity': '1',
          'transition': 'opacity 0.8s ease-in'
        });
      }

      if (scrollTarget) {
        animate();
      }
    });
  }

  scrollTop() {
    var scrollbar = Scrollbar.init(document.querySelector('#home-page'), {
      'speed': '3',
      'overscrollEffect':'bounce',
      'damping':'.05'
    });
    scrollbar.scrollTo(0,0, 1000);
  }

  render() {
    return (
      <div id="home-page">
        <Header />
        <Nav />
        <div className="load-wrapper">
          <About />
          <Cases />
          <Contact />
        </div>
        <a id="scrollTop" onClick={() => this.scrollTop() }>
          <i className="fa fa-arrow-up" style={{fontSize:25}} aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}
