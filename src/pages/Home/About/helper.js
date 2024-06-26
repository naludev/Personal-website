import React from 'react'
import Text from 'common/components/Text'
import Title from 'common/components/Title'
import NeonTitle from 'common/components/NeonTitle'
import VerticalTimeline from './VeticalTimeline'

const timelineItems = [{
  title: 'Nov 2022 - March 2024',
  cardTitle: 'Ssr lvl3 Software Developer',
  cardSubtitle: 'Broken Rubik',
  cardDetailedText: `
  Oborne Health Supplies \n\n Maintenance of a web platform focused on the sale of pharmaceutical 
  and homeopathic products. Utilized technologies such as Backbone, 
  SuiteScript, NetSuite, among others. This platform functions as an e-commerce solution, 
  seamlessly integrating patients and physicians, facilitating effective communication channels. 
  \n Headless Commerce & CMS \n\n Lead and carry out the development 
  of a web e-commerce platform integrated with Medusa, interacting and consuming data from 
  the Netsuite backend. React was used as the core
`
},
{
  title: 'Ago 2022 - Nov 2022',
  cardTitle: 'Ssr Mobile Developer',
  cardSubtitle: 'Globant',
  cardDetailedText: `Alsea España \r\n Mobile application for the Restaurant Member Club, with a primary emphasis on unified brand 
management and promotion visibility. Leveraged React Native and Redux Toolkit technologies for implementation.
  `
},
{
  title: 'Dec 2021 - Ago 2022',
  cardTitle: 'Jr Adv Web UI Developer',
  cardSubtitle: 'Globant',
  cardDetailedText: `160 Driving Academy: Led the development of a web platform for truck drivers' job searches, increasing
  process efficiency by 40%. The application, built with React Js, features job posting, user profile
  management, and advanced mapping capabilities. Integrated Celero for seamless payment processing,
  significantly enhancing user navigation and job categorization.
    `
},
{
  title: 'Sep 2021 - Dec 2021',
  cardTitle: 'Web UI Developer | Mobile Developer',
  cardSubtitle: 'Independent Developer',
  cardDetailedText: `Empowered Brain. Emotion Charades & Face2Face: I was responsible for the maintenance of web
    applications and augmented reality web games tailored for children with specific learning needs, such as
    those on the autism spectrum, using technologies like Google Glass, React Js, and Android.
    Within the web platform, various educators could register, effectively manage their students, and oversee
    their performance evaluations. Additionally, the platform enabled the registration of players who could
    engage in diverse games on Google Glass. These games were executed through an Android mobile
    application on the Google Glass platform, and were categorized based on varying levels of difficulty.
      `
},
{
  title: 'Jun 2021 - Sep 2021',
  cardTitle: 'Mobile Developer',
  cardSubtitle: 'Independent Developer',
  cardDetailedText: `Santander, Mobile Banking App: Banking mobile application utilizing React Native and Typescript. The
    application featured comprehensive functionalities including user and session registration and management,
    diverse service and invoice payment methods, as well as seamless integration with a secure payment
    gateway.`
},
{
  title: 'Feb 2021 - Jun 2021',
  cardTitle: 'Jr Web UI Developer',
  cardSubtitle: 'Shaman Development Studio',
  cardDetailedText: `Aladi: Platform development in React JS for the Latin American Integration Association. Platform where
    different importers and exporters from Latin America met to meet in different video conference rooms. These
    meetings were organized on said platform, it also had user management, companies, different user roles and
    products they offered.`
},
{
  title: 'Ag 2020 - Feb 2021',
  cardTitle: 'Internship contract as Software Developer',
  cardSubtitle: 'DIXTRA',
  cardDetailedText: `Lista la app: Web platform using Vue.js to streamline restaurant menu management and facilitate online
    ordering.
    Tu Shopper: Designed and developed Tu Shopper, a React Native mobile application focused on efficient
    product management and seamless purchases through an in-store barcode scanner, complete with integrated
    payment capabilities.
    Nippy for Delivery: Mobile app using React Native that provides advantages and avenues for independent
    workers, including food delivery Riders and other similar roles.
    Landing Page: Constructed a dynamic web page employing React Js, Next JS, and SASS for styling, while
    utilizing the CMS Strappi for content management. Successfully deployed the page through Heroku. This
    platform served as a pivotal tool for company presentation, product showcasing, and featured a blog section
    hosting various technology-related articles, meticulously categorized for easy access.
    UES GO: Developed a mobile application using React Native and Mobx to facilitate order delivery processes.
    The application enabled real-time tracking of orders via maps and offered integrated payment solutions.`
}
]

export const renderTimeline = () => (
  <VerticalTimeline items={timelineItems} />
)

export const renderDescription = () => (
  <>
    <Title text="ABOUT ME" type="h6" color="secondary" />
    <NeonTitle text="experience" type="h1" color="secondary" />
    <Text
      type="subtitle1"
      text="Supercharge your success with powerful software solutions!
            Experience proven expertise and drive with me. Together, we'll
            conquer the software industry, surpassing boundaries and achieving
            unprecedented success. Let's unlock your business's true potential!"
      color="white"
    />
  </>
)
