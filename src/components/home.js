import React, { Component } from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import Content from '@/components/content';
import Footer from '@/components/footer';

class Hello extends Component {
    render() {
        return (
          <div class="antiques-wrapper">
            <Navbar />
            <HeroSection />
            <Content />
            <Footer />
          </div>
        );
    }
}

export default Hello;