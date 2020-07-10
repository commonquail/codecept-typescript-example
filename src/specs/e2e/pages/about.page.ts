"use strict";

const { I } = inject();

const about = {
  aboutSection: "main #about-info",
  pageHeader: "//main/h1",
  pageHeaderText: "About",
  title: "About - Simple app",
  url: "/",
};

export type AboutPage = typeof about;

module.exports = about;
