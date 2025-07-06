import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logos from "@assets/img/logo/logos.svg";
import social_data from "@/data/social-data";

const Footer = ({
  style_2 = false,
  style_3 = false,
  primary_style = false,
}) => {
  return (
    <footer>
      <div
        className={`tp-footer-area ${
          primary_style
            ? "tp-footer-style-2 tp-footer-style-primary tp-footer-style-6"
            : ""
        } ${
          style_2
            ? "tp-footer-style-2"
            : style_3
            ? "tp-footer-style-2 tp-footer-style-3"
            : ""
        }`}
        data-bg-color={`${style_2 ? "footer-bg-white" : "footer-bg-grey"}`}
      >
        <div className="tp-footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="tp-footer-widget footer-col-1 md:mb-20">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Image src={logos} alt="logo" height={55} width={150} />
                      </Link>
                    </div>
                    <div className="tp-footer-social d-xl-flex d-sm-block">
                      {social_data.map((s) => (
                        <div className="tp-footer-social-item d-flex  align-items-center ">
                          {s.svg}
                          <a href={s.link} key={s.id} target="_blank">
                            <span>{s.desc}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-3 col-sm-12 ">
                <div className="tp-footer-widget footer-col-2">
                  <div className="tp-footer-widget-links d-flex">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/shop">Products</Link>
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12 mt-20">
                <div className="tp-footer-contact-content footer-col-4 ">
                  <p>Any queries related to products</p>
                  <div className="tp-footer-contact-content-form d-flex">
                    <input type="text" placeholder="Type your query...." />
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-bottom">
          <div className="tp-footer-bottom-wrapper">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="tp-footer-bottom-info">
                  <span>Terms & Conditions</span>
                  <span>Privacy Policy</span>
                  <span>Accessibility</span>
                  <span>Legal</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tp-footer-copyright text-xl-end text-lg-end text-md-end text-sm-start">
                  <span>
                    Designed with love © RareStonz 2025. All rights reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
