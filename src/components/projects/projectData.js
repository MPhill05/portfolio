import blkGoldArt from '../../images/blkgoldLogo.png';
import blkGoldSiteImg from '../../images/blkGoldSiteImg.png';
import phillstackArt from '../../images/psLogoBlack.png';
import phillstackSiteImg from '../../images/psSiteImg.png';
import bmbxctrlArt from '../../images/bmbxCtrlLogo.png';
import bmbxctrlSiteImg from '../../images/bmbxCtrlSiteImg.png';
import shopjwArt from '../../images/shopJWLogo.png';
import shopjwSiteImg from '../../images/shopJWSiteImg.png';

export const myProjects = {
  projects: [
    {
      id: 4,
      projectName: 'Shop J&W',
      projectType: 'E-Commerce Website',
      img: shopjwArt,
      alt: 'Shop J&W',
      modalImg: shopjwSiteImg,
      techStack: 'Wordpress | Bigcommerce',
      challenge: 'Challenge: The client needed to upgrade their existing WordPress site that was broken due to plugins not being updated. The client was hosting their products with Bigcommerce and transfering their data to WordPress. After updating the client decided it would be best to migrate their frontend to Bigcommerce as well.',
      solution: 'Solution: We migrated their frontend over to Bigcommerce to a new theme and matched it as closely ',
      outcome: 'Outcome: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      viewCode: '',
      viewSite: 'https://shopjandw.com/'
    },
    {
      id: 3,
      projectName: 'Boombox Cartel',
      projectType: 'Angular Web App',
      img: bmbxctrlArt,
      alt: 'Boombox Cartel',
      modalImg: bmbxctrlSiteImg,
      techStack: 'Angular | Sass | Bootstrap | HTML | CSS',
      challenge: 'Challenge: The original site was broken and extremely dated, I was approached to help improve their web presence and give the artist a homebase to work from. We needed something that was new, creative, showcased the artists talents, and felt engaging to fans without going overboard. I needed to be able to show images and videos without costing the user too much, and use custom graphics with abnormal placement to achieve the vision the artists and his designer eventually landed on.',
      solution: 'Solution: A complete site redesign from the ground up working closely with the artist and his graphic designer. This is a page achieves the visions they set without being too taxing on the end user. Everything is made with custom icons and fonts, a custom sliding drawer in the bottom for socials and subscribe via email, and gives users what they need in regards to tour dates and the store.',
      outcome: 'Outcome: The website went from being completely stagnant, to having over 10,000 users immediately. I took their vision from from concept to full on web application and deployed the site using Angular, styled with Bootstrap and Sass.',
      viewCode: '',
      viewSite: 'http://boomboxcartel.com/'
    },
    {
      id: 2,
      projectName: 'Phillstack',
      projectType: 'React Web App',
      img: phillstackArt,
      alt: 'Phillstack',
      modalImg: phillstackSiteImg,
      techStack: 'ReactJS | Sass | Bootstrap | HTML | CSS CircleCi | AWS',
      challenge: 'Challenge: My brother and I were in need of a site to operate as a landing page for freelance clients and to showcase work that we\'ve previously worked on. This site needed to be simple and easy for nontechnical people to be able to see our work, what we\'re about and get in contact with us.',
      solution: 'Solution: A simple, straightforward design making it easy for anyone to find us and what we do. The page is straight forward and minimal.',
      outcome: 'Outcome: The site contains minimal design tricks and maximum userability and responsiveness. We employed CircleCi to consistently test the application, and built the site utilizing an agile methodology. The site contains a simple contact form and is deployed with amazon web services.',
      viewCode: 'https://github.com/Phillstack/phillstack-react',
      viewSite: 'https://phillstack.com/'
    },
    {
      id: 1,
      projectName: 'BlkGold',
      projectType: 'React Web App',
      img: blkGoldArt,
      alt: 'BlkGold',
      modalImg: blkGoldSiteImg,
      techStack: 'ReactJS | Sass | Bootstrap | HTML | CSS CircleCi | AWS ',
      challenge: `Challenge: Outside of coding I enjoy creating music for fun, and wanted a centralized location for fans to find my music. `,
      solution: 'Solution: Blkgoldmusic.com is a simple web application that allows users to quickly find my music, videos, and any related information to the project. It shows fans my most recent releases on the home page along with all applicable social media links, and a contact form to stay up to date with me via email. The responsive web app was built with Sass and Bootstrap for a smooth responsive design, complete with some simple React routing and modals to easily show applicable information.',
      outcome: 'Outcome: The site is a simple responsive React application with a clean and quick UI. Through designing, developing and deploying this modern, yet simple application, my overall followers increased by around 100 users across all social platforms and has given me a way to access fans of my music directly.',
      viewCode: 'https://github.com/MPhill05/BlkGold-Webapp',
      viewSite: 'https://blkgoldmusic.com/'
    }
  ]
};

export default myProjects;