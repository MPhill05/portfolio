import blkGoldArt from '../../images/blkgoldLogo.png';
import phillstackArt from '../../images/psLogoBlack.png';
import bmbxctrlArt from '../../images/bmbxCtrlLogo.png';
import shopjwArt from '../../images/shopJWLogo.png';

import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaJs,
  FaBootstrap
} from 'react-icons/fa'

export const myProjects = {
  projects: [
    {
      id: 4,
      projectName: 'BlkGold',
      projectType: 'React Website',
      img: blkGoldArt,
      alt: 'BlkGold',
      modalImg: blkGoldArt,
      techStack: FaReact,
      challenge: 'Problem: I needed a website for music projects',
      solution: 'Solution: React',
      outcome: 'Outcome: React',
      viewCode: 'https://github.com/MPhill05/BlkGold-Webapp',
      viewSite: 'https://blkgoldmusic.com/'
    },
    {
      id: 3,
      projectName: 'Phillstack',
      projectType: 'React Website',
      img: phillstackArt,
      alt: 'Phillstack',
      modalImg: phillstackArt,
      techStack: '',
      challenge: 'Problem: ',
      solution: 'Solution: ',
      outcome: 'Outcome: ',
      viewCode: 'https://github.com/Phillstack/phillstack-react',
      viewSite: 'https://phillstack.com/'
    },
    {
      id: 2,
      projectName: 'Boombox Cartel',
      projectType: 'Angular Website',
      img: bmbxctrlArt,
      alt: 'Boombox Cartel',
      modalImg: bmbxctrlArt,
      techStack: '',
      challenge: 'Problem: ',
      solution: 'Solution: ',
      outcome: 'Outcome: ',
      viewCode: '',
      viewSite: 'http://boomboxcartel.com/'
    },
    {
      id: 1,
      projectName: 'Shop J&W',
      projectType: 'E-Commerce Website',
      img: shopjwArt,
      alt: 'Shop J&W',
      modalImg: shopjwArt,
      techStack: '',
      challenge: 'Problem: ',
      solution: 'Solution: ',
      outcome: 'Outcome: ',
      viewCode: '',
      viewSite: 'https://shopjandw.com/'
    }
  ]
};

export default myProjects;