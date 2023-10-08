# Weather Information Web Page

## Objectives
- Utilize an API according to its documentation.
- Dynamically manipulate the DOM to integrate content into an HTML page.
- Interact with the web page's styling using JavaScript.

## Project Overview
This project involves creating a web page that allows users to retrieve weather information for a municipality of their choice through a form. The project is divided into two versions: a basic version (V1) and an advanced version (V2), each offering varying features.

## Basic Version (V1)
In the basic version, users can use a form to enter a postal code and select a municipality to retrieve the following weather information:
- Minimum temperature
- Maximum temperature
- Probability of precipitation
- Hours of sunshine

The web page will be responsive and comply with the HTML and CSS validators from W3C. Ideally, it should meet the accessibility requirements of the WCAG AA 2.0 standard.

## Advanced Version (V2)
The advanced version introduces new features in a separate form:
- Users can select the number of days for weather forecasts (1 to 7 days).
- Users can choose additional information to display via checkboxes:
  - Decimal latitude of the municipality
  - Decimal longitude of the municipality
  - Cumulative rainfall for the day in millimeters
  - Average wind speed at 10 meters in km/h
  - Wind direction in degrees (0 to 360°)

The results of the search criteria will be displayed in cards (a custom `WeatherCard` class should be created for this purpose).

## Project Execution Details
- Technical Stack: JavaScript, HTML, CSS
- Development Tool: Visual Studio Code
- Version Control: Git and GitHub (public remote repository)

## APIs Used
- Administrative division by municipality API: [https://geo.api.gouv.fr/decoupage-administratif/communes](https://geo.api.gouv.fr/decoupage-administratif/communes)
- Weather API by MétéoConcept: [https://api.meteo-concept.com/](https://api.meteo-concept.com/)

## Getting Started
1. Clone this repository to your local machine.
2. Test the web page and its features.

## Contributors
- Madelaine Baptiste
- Lisa Margo
- Enzo Le Coq
- Leni Sorel
