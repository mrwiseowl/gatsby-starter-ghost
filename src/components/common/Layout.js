import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                   var NewComponent = React.createClass({
  render: function() {
    return (

      <header className="globalNav overlayActive dropdownActive">
        <div className="container-lg">
          <ul className="navRoot">
            <li className="navSection logo">
              <a className="rootLink item-home colorize" href="/">
                <h1><svg height={25} width={62}>
                    <title>Stripe</title>
                    <path d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z">
                    </path></svg></h1></a>
            </li>
            <li className="navSection primary">
              <a className="rootLink item-products hasDropdown colorize active" data-dropdown="products">Products</a> <a className="rootLink item-developers hasDropdown colorize" data-dropdown="developers">Developers</a> <a className="rootLink item-company hasDropdown colorize" data-dropdown="company">Company</a> <a className="rootLink item-pricing colorize" data-analytics-action="pricing" data-analytics-source="global_nav" href="https://stripe.com/pricing">Pricing</a>
            </li>
            <li className="navSection secondary">
              <a className="rootLink item-support colorize" data-analytics-action="support" data-analytics-source="global_nav" href="https://support.stripe.com">Support</a> <a className="rootLink item-dashboard colorize" data-adroll-segment="submit_two" data-analytics-action="sign_in" data-analytics-source="global_nav" href="https://dashboard.stripe.com/login">Sign in</a>
            </li>
            <li className="navSection mobile">
              <a className="rootLink item-mobileMenu colorize">
                <h2>Menu</h2></a>
              <div className="popup">
                <div className="popupContainer">
                  <a className="popupCloseButton">Close</a>
                  <div className="mobileProducts">
                    <h4>Products</h4>
                    <div className="mobileProductsList">
                      <ul>
                        <li>
                          <a className="linkContainer item-payments" data-analytics-action="payments" data-analytics-source="mobile_nav" href="https://stripe.com/payments"><svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z" fill="#87BBFD" />
                              <path className="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z" fill="#555ABF" />
                              <path d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z" fill="#FFF" /></svg>Payments</a>
                        </li>
                        <li>
                          <a className="linkContainer item-subscriptions" data-analytics-action="subscriptions" data-analytics-source="mobile_nav" href="https://stripe.com/subscriptions"><svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" fill="#74E4A2" />
                              <path d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z" fill="#FFF" />
                              <path className="hover-fillDark" d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z" fill="#159570" /></svg>Subscriptions</a>
                        </li>
                        <li>
                          <a className="linkContainer item-connect" data-analytics-action="connect" data-analytics-source="mobile_nav" href="https://stripe.com/connect"><svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z" fill="#68D4F8" />
                              <path d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z" fill="#FFF" />
                              <path className="hover-fillDark" d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z" fill="#217AB7" /></svg>Connect</a>
                        </li>
                        <li>
                          <a className="linkContainer item-sigma" data-analytics-action="sigma" data-analytics-source="mobile_nav" href="https://stripe.com/sigma"><svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z" fill="#beb0f4" />
                              <path className="hover-fillDark" d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z" fill="#7356b6" />
                              <path d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z" fill="#FFF" /></svg>Sigma <span className="new-badge">New</span></a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a className="linkContainer item-atlas" data-analytics-action="atlas" data-analytics-source="mobile_nav" href="https://stripe.com/atlas"><svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" fill="#FCD669" />
                              <path className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z" fill="#CE7C3A" />
                              <path d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z" fill="#FFF" /></svg>Atlas</a>
                        </li>
                        <li>
                          <a className="linkContainer item-radar" data-analytics-action="radar" data-analytics-source="mobile_nav" href="https://stripe.com/radar"><svg viewBox="0 0 48 48">
                              <path className="hover-fillLight" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z" fill="#F6A4EB" />
                              <path d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z" fill="#FFF" />
                              <path className="hover-fillDark" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z" fill="#9251AC" /></svg>Radar</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobileSecondaryNav">
                    <ul>
                      <li>
                        <a className="item-pricing" data-analytics-action="pricing" data-analytics-source="mobile_nav" href="https://stripe.com/pricing">Pricing</a>
                      </li>
                      <li>
                        <a className="item-workswith" data-analytics-action="works-with" data-analytics-source="mobile_nav" href="https://stripe.com/works-with">Works with Stripe</a>
                      </li>
                      <li>
                        <a className="item-gallery" data-analytics-action="customers" data-analytics-source="mobile_nav" href="https://stripe.com/customers">Customers</a>
                      </li>
                      <li>
                        <a className="item-documentation" data-analytics-action="documentation" data-analytics-source="mobile_nav" href="https://stripe.com/docs">Documentation</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="item-about" data-analytics-action="about" data-analytics-source="mobile_nav" href="https://stripe.com/about">About Stripe</a>
                      </li>
                      <li>
                        <a className="item-jobs" data-analytics-action="jobs" data-analytics-source="mobile_nav" href="https://stripe.com/jobs">Jobs</a>
                      </li>
                      <li>
                        <a className="item-blog" data-analytics-action="blog" data-analytics-source="mobile_nav" href="https://stripe.com/blog">Blog</a>
                      </li>
                    </ul>
                  </div><a className="mobileSignIn" data-adroll-segment="submit_two" data-analytics-action="sign_in" data-analytics-source="mobile_nav" href="https://dashboard.stripe.com/login">Sign in</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="dropdownRoot">
          <div className="dropdownBackground" style={{transform: 'translateX(540px) scaleX(1.22632) scaleY(1.3575)'}}>
            <div className="alternateBackground" style={{transform: 'translateY(201.105px)'}} />
          </div>
          <div className="dropdownArrow" style={{transform: 'translateX(773px) rotate(45deg)'}} />
          <div className="dropdownContainer" style={{transform: 'translateX(540px)', width: '466px', height: '543px'}}>
            <div className="dropdownSection active" data-dropdown="products">
              <div className="dropdownContent" style={{width: '466px', height: '543px'}}>
                <div className="linkGroup">
                  <ul className="productsGroupPrimary">
                    <li>
                      <a className="linkContainer item-payments" data-analytics-action="payments" data-analytics-source="nav_dropdown" href="https://stripe.com/payments"><svg viewBox="0 0 48 48">
                          <path className="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z" fill="#87BBFD" />
                          <path className="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z" fill="#555ABF" />
                          <path d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z" fill="#FFF" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">Payments</h3>
                          <p className="linkSub">A complete commerce toolkit, built
                            for&nbsp;developers.</p>
                        </div></a>
                    </li>
                    <li>
                      <a className="linkContainer item-subscriptions" data-analytics-action="subscriptions" data-analytics-source="nav_dropdown" href="https://stripe.com/subscriptions"><svg viewBox="0 0 48 48">
                          <path className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" fill="#74E4A2" />
                          <path d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z" fill="#FFF" />
                          <path className="hover-fillDark" d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z" fill="#159570" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">Subscriptions</h3>
                          <p className="linkSub">The smart engine for
                            recurring&nbsp;payments.</p>
                        </div></a>
                    </li>
                    <li>
                      <a className="linkContainer item-connect" data-analytics-action="connect" data-analytics-source="nav_dropdown" href="https://stripe.com/connect"><svg viewBox="0 0 48 48">
                          <path className="hover-fillLight" d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z" fill="#68D4F8" />
                          <path d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z" fill="#FFF" />
                          <path className="hover-fillDark" d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z" fill="#217AB7" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">Connect</h3>
                          <p className="linkSub">Everything platforms need to get
                            sellers&nbsp;paid.</p>
                        </div></a>
                    </li>
                  </ul>
                </div>
                <div className="linkGroup">
                  <ul className="productsGroupSecondary">
                    <li>
                      <a className="linkContainer item-sigma" data-analytics-action="sigma" data-analytics-source="nav_dropdown" href="https://stripe.com/sigma"><svg viewBox="0 0 48 48">
                          <path className="hover-fillLight" d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z" fill="#beb0f4" />
                          <path className="hover-fillDark" d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z" fill="#7356b6" />
                          <path d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z" fill="#FFF" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">Sigma <span className="new-badge">New</span></h3>
                          <p className="linkSub">Your business data at
                            your&nbsp;fingertips.</p>
                        </div></a>
                    </li>
                    <li>
                      <a className="linkContainer item-atlas" data-analytics-action="atlas" data-analytics-source="nav_dropdown" href="https://stripe.com/atlas"><svg viewBox="0 0 48 48">
                          <path className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" fill="#FCD669" />
                          <path className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z" fill="#CE7C3A" />
                          <path d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z" fill="#FFF" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">Atlas</h3>
                          <p className="linkSub">The best way to start an
                            internet&nbsp;business.</p>
                        </div></a>
                    </li>
                    <li>
                      <a className="linkContainer item-radar" data-analytics-action="radar" data-analytics-source="nav_dropdown" href="https://stripe.com/radar"><svg viewBox="0 0 48 48">
                          <path className="hover-fillLight" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z" fill="#F6A4EB" />
                          <path d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z" fill="#FFF" />
                          <path className="hover-fillDark" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z" fill="#9251AC" /></svg>
                        <div className="productLinkContent">
                          <h3 className="linkTitle">Radar</h3>
                          <p className="linkSub">Modern tools to help
                            beat&nbsp;fraud.</p>
                        </div></a>
                    </li>
                  </ul>
                </div>
                <ul className="linkGroup linkList prodsubGroup">
                  <li>
                    <a className="linkContainer item-workswith" data-analytics-action="works-with" data-analytics-source="nav_dropdown" href="https://stripe.com/works-with">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-fillLight" d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.018 1.018 0 0 1-.86 0l-6.473-2.992a1.03 1.03 0 0 1-.594-.908V4.51c.006-.2.07-.39.18-.55L8.5 7.338l7.32-3.38c.108.16.172.35.178.55v7.984z" fill="#87BBFD" />
                          <path className="hover-fillDark" d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.026 1.026 0 0 1-.43.095V7.34l7.32-3.38c.11.16.173.35.18.55v7.984z" fill="#6772E5" />
                          <path className="hover-fillLight" d="M8.5 5C6.567 5 5 4.228 5 3.275v-1.15h.098c.36.768 1.742 1.34 3.402 1.34 1.66.002 3.043-.572 3.402-1.34H12v1.15C12 4.228 10.433 5 8.5 5z" fill="#87BBFD" /></svg>Works with Stripe</h3></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdownSection right" data-dropdown="developers">
              <div className="dropdownContent" style={{width: '368px', height: '443px'}}>
                <div className="linkGroup documentationGroup">
                  <a className="linkContainer withIcon item-documentation" data-analytics-action="documentation" data-analytics-source="nav_dropdown" href="https://stripe.com/docs">
                    <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                        <path className="hover-fillLight" d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z" fill="#87BBFD" />
                        <path className="hover-fillDark" d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z" fill="#6772E5" /></svg>Documentation</h3><span className="linkSub">Start integrating Stripe’s products
                      and&nbsp;tools.</span></a>
                  <div className="documentationArticles">
                    <ul>
                      <li>
                        <h4>Get started</h4>
                      </li>
                      <li>
                        <a data-analytics-action="docs_elements" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/elements">Elements</a>
                      </li>
                      <li>
                        <a data-analytics-action="docs_checkout_tutorial" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/checkout/tutorial">Checkout</a>
                      </li>
                      <li>
                        <a data-analytics-action="docs_mobile" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/mobile">Mobile apps</a>
                      </li>
                      <li>
                        <a data-analytics-action="docs_libraries" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/libraries">Libraries</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h4>Popular topics</h4>
                      </li>
                      <li>
                        <a data-analytics-action="docs_apple_pay" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/apple-pay">Apple Pay</a>
                      </li>
                      <li>
                        <a data-analytics-action="docs_testing" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/testing">Testing</a>
                      </li>
                      <li>
                        <a data-analytics-action="docs_launch_checklist" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/checklist">Launch checklist</a>
                      </li>
                      <li>
                        <a data-analytics-action="docs_plugins" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/libraries#third-party-plugins">Plug-ins</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="linkGroup linkList developersGroup">
                  <li>
                    <a className="linkContainer item-apiReference" data-analytics-action="api_reference" data-analytics-source="nav_dropdown" href="https://stripe.com/docs/api">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-strokeDark" d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>Full API
                        Reference</h3></a>
                  </li>
                  <li>
                    <a className="linkContainer item-apiStatus" data-analytics-action="api_status" data-analytics-source="nav_dropdown" href="https://status.stripe.com">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-strokeDark" d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9" fill="none" stroke="#6772e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>API
                        Status</h3></a>
                  </li>
                  <li>
                    <a className="linkContainer item-openSource" data-analytics-action="open_source" data-analytics-source="nav_dropdown" href="https://stripe.com/open-source">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zM6.987 6.078a.684.684 0 0 0-.968-.968L3.116 8.012a.684.684 0 0 0 0 .967l2.9 2.9a.684.684 0 0 0 .97-.967l-2.42-2.418 2.42-2.42zm6.996 1.95L11.08 5.123a.684.684 0 0 0-.966.968l2.418 2.42-2.418 2.417a.684.684 0 0 0 .967.967l2.904-2.902a.684.684 0 0 0 0-.966z" fill="#6772E5" /></svg>Open Source</h3></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdownSection right" data-dropdown="company">
              <div className="dropdownContent" style={{width: '428px', height: '346px'}}>
                <ul className="linkGroup linkList companyGroup">
                  <li>
                    <a className="linkContainer item-about" data-analytics-action="about" data-analytics-source="nav_dropdown" href="https://stripe.com/about">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z" fill="#6772E5" /></svg>About Stripe</h3></a>
                  </li>
                  <li>
                    <a className="linkContainer item-customers" data-analytics-action="customers" data-analytics-source="nav_dropdown" href="https://stripe.com/customers">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-fillLight" d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#87BBFD" />
                          <path className="hover-fillDark" d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" fill="#6772E5" />
                          <path className="hover-fillLight" d="M11 12h2v4h-2v-4z" fill="#87BBFD">
                          </path></svg>Customers</h3></a>
                  </li>
                  <li>
                    <a className="linkContainer item-jobs" data-analytics-action="jobs" data-analytics-source="nav_dropdown" href="https://stripe.com/jobs">
                      <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                          <path className="hover-fillDark" d="M1.5 4h14c.828 0 1.5.67 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4z" fill="#6772E5" />
                          <path className="hover-fillLight" d="M13 15V4h2v11h-2zM2 4h2v11H2V4z" fill="#87BBFD" />
                          <path className="hover-fillDark" d="M11.5 3.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h4A2.5 2.5 0 0 1 13 3.5V4h-1.5v-.5z" fill="#6772E5" /></svg>Jobs</h3></a>
                  </li>
                </ul>
                <div className="linkGroup blogGroup">
                  <a className="linkContainer withIcon item-blog" data-analytics-action="blog" data-analytics-source="nav_dropdown" href="https://stripe.com/blog">
                    <h3 className="linkTitle linkIcon"><svg height={17} width={17}>
                        <path className="hover-fillLight" d="M1 4h4.5v11H1.75A1.75 1.75 0 0 1 0 13.25V5a1 1 0 0 1 1-1z" fill="#87BBFD" />
                        <path className="hover-fillDark" d="M14 15H2v-.025a2.243 2.243 0 0 0 2-2.225V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3zm1-11H6v3h9V4z" fill="#6772E5" /></svg>From the blog</h3></a>
                  <ul className="blogPosts">
                    <li>
                      <a href="/blog/operating-kubernetes"><span className="title new">Learning to operate Kubernetes reliably</span>
                        <span className="new-badge">New</span></a>
                    </li>
                    <li>
                      <a href="/blog/query-connected-accounts-with-stripe-sigma"><span className="title new">Better Stripe Connect support in Sigma</span>
                        <span className="new-badge">New</span></a>
                    </li>
                    <li>
                      <a href="/blog/express-for-business"><span className="title">Stripe
                          Connect now supports Express accounts for businesses</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2021 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
