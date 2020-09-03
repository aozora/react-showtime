import React from 'react';
import ScrollableCardsList from '../../components/ScrollableCardsList';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/ScrollableCardsList',
  component: ScrollableCardsList,
  decorators: [Story => withProvider(Story)]
};

const media = {
  results: [
    {
      id: 577922,
      video: false,
      vote_count: 894,
      vote_average: 7.6,
      title: 'Tenet',
      release_date: '2020-08-22',
      original_language: 'en',
      original_title: 'Tenet',
      genre_ids: [28, 878, 53],
      backdrop_path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
      adult: false,
      overview:
        'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      poster_path: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
      popularity: 308.793,
      media_type: 'movie'
    },
    {
      id: 501979,
      video: false,
      vote_count: 79,
      vote_average: 6.5,
      title: 'Bill & Ted Face the Music',
      release_date: '2020-08-27',
      original_language: 'en',
      original_title: 'Bill & Ted Face the Music',
      genre_ids: [12, 35, 878],
      backdrop_path: '/oazPqs1z78LcIOFslbKtJLGlueo.jpg',
      adult: false,
      overview:
        'Yet to fulfill their rock and roll destiny, the now middle-aged best friends Bill and Ted set out on a new adventure when a visitor from the future warns them that only their song can save life as we know it. Along the way, they are helped by their daughters, a new batch of historical figures and a few music legends—to seek the song that will set their world right and bring harmony to the universe.',
      poster_path: '/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg',
      popularity: 448.574,
      media_type: 'movie'
    },
    {
      adult: false,
      backdrop_path: '/9XD5AdBBDXOzyRYm1BFh6izi8Yh.jpg',
      genre_ids: [18, 14],
      id: 658777,
      original_language: 'de',
      original_title: 'Freaks – Du bist eine von uns',
      overview:
        'After having a chance encounter with a mysterious character, Wendy, a young working class mother, discovers that she has super powers.',
      poster_path: '/6xzEwXNllYKxhRFCtWzRaYdA6gD.jpg',
      release_date: '2020-09-02',
      title: "Freaks – You're One of Us",
      video: false,
      vote_average: 3.9,
      vote_count: 4,
      popularity: 37.428,
      media_type: 'movie'
    },
    {
      original_name: 'Raised by Wolves',
      id: 85723,
      name: 'Raised by Wolves',
      vote_count: 4,
      vote_average: 4.3,
      first_air_date: '2020-09-03',
      poster_path: '/mTvSVKMn2Npf6zvYNbGMJnYLtvp.jpg',
      genre_ids: [18, 10765],
      original_language: 'en',
      backdrop_path: '/na2xUduK8HviOFT97TiFG2MkJmY.jpg',
      overview:
        'Two androids are tasked with raising human children on a mysterious virgin planet. As the burgeoning colony of humans threatens to be torn apart by religious differences, the androids learn that controlling the beliefs of humans is a treacherous and difficult task.',
      origin_country: ['US'],
      popularity: 57.596,
      media_type: 'tv'
    },
    {
      id: 613504,
      video: false,
      vote_count: 33,
      vote_average: 7.5,
      title: 'After We Collided',
      release_date: '2020-09-02',
      original_language: 'en',
      original_title: 'After We Collided',
      genre_ids: [18, 10749],
      backdrop_path: '/dZJJDmiwp0W1NE74SY5WV00v0Ec.jpg',
      adult: false,
      overview:
        'Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.',
      poster_path: '/ijcykNO87JLCgxUltTFqHwlK2yT.jpg',
      popularity: 255.188,
      media_type: 'movie'
    },
    {
      id: 284054,
      video: false,
      vote_count: 15828,
      vote_average: 7.4,
      title: 'Black Panther',
      release_date: '2018-02-13',
      original_language: 'en',
      original_title: 'Black Panther',
      genre_ids: [28, 12, 14, 878],
      backdrop_path: '/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg',
      adult: false,
      overview:
        "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      poster_path: '/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      popularity: 226.448,
      media_type: 'movie'
    },
    {
      id: 718444,
      video: false,
      vote_count: 126,
      vote_average: 6,
      title: 'Rogue',
      release_date: '2020-08-20',
      original_language: 'en',
      original_title: 'Rogue',
      genre_ids: [28],
      backdrop_path: '/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg',
      adult: false,
      overview:
        'Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.',
      poster_path: '/uOw5JD8IlD546feZ6oxbIjvN66P.jpg',
      popularity: 1279.144,
      media_type: 'movie'
    },
    {
      id: 724717,
      video: false,
      vote_count: 3,
      vote_average: 4.3,
      title: 'The 2nd',
      release_date: '2020-09-01',
      original_language: 'en',
      original_title: 'The 2nd',
      genre_ids: [],
      backdrop_path: '/AbtsLdz1gUj2H1HJJ3TRaBOl8Ta.jpg',
      adult: false,
      overview:
        'While picking his son up from college, Secret Service Agent Vic Davies finds himself in the middle of a high stakes terrorist operation and now must use his entire set of skills against the armed faction.',
      poster_path: '/o1WvNhoackad1QiAGRgjJCQ1Trj.jpg',
      popularity: 79.409,
      media_type: 'movie'
    },
    {
      id: 581392,
      video: false,
      vote_count: 278,
      vote_average: 7.4,
      title: 'Peninsula',
      release_date: '2020-07-15',
      original_language: 'ko',
      original_title: '반도',
      genre_ids: [28, 27, 53],
      backdrop_path: '/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg',
      adult: false,
      overview:
        'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.',
      poster_path: '/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg',
      popularity: 691.242,
      media_type: 'movie'
    },
    {
      adult: false,
      backdrop_path: '/tjcx6sA2dcUBEUpjwXne69njia3.jpg',
      genre_ids: [35, 10751],
      id: 425001,
      original_language: 'en',
      original_title: 'The War with Grandpa',
      overview:
        'Sixth-grader Peter is pretty much your average kid—he likes gaming, hanging with his friends and his beloved pair of Air Jordans. But when his recently widowed grandfather Ed  moves in with Peter’s family, the boy is forced to give up his most prized possession of all, his bedroom. Unwilling to let such an injustice stand, Peter devises a series of increasingly elaborate pranks to drive out the interloper, but Grandpa Ed won’t go without a fight.',
      poster_path: '/bf0iXmSvZdJitc3kCJQpba26RoO.jpg',
      release_date: '2020-01-31',
      title: 'The War with Grandpa',
      video: false,
      vote_average: 5.6,
      vote_count: 18,
      popularity: 55.489,
      media_type: 'movie'
    },
    {
      id: 438396,
      video: false,
      vote_count: 80,
      vote_average: 6.4,
      title: 'Unknown Origins',
      release_date: '2020-08-28',
      original_language: 'es',
      original_title: 'Orígenes secretos',
      genre_ids: [18, 53],
      backdrop_path: '/qGZe9qTuydxyJYQ60XDtEckzLR8.jpg',
      adult: false,
      overview:
        'In Madrid, Spain, a mysterious serial killer ruthlessly murders his victims by recreating the first appearance of several comic book superheroes. Cosme, a veteran police inspector who is about to retire, works on the case along with the tormented inspector David Valentín and his own son Jorge Elías, a nerdy young man who owns a comic book store.',
      poster_path: '/sMO1v5TUf8GOJHbJieDXsgWT2Ud.jpg',
      popularity: 208.852,
      media_type: 'movie'
    },
    {
      id: 539885,
      video: false,
      vote_count: 173,
      vote_average: 6.3,
      title: 'Ava',
      release_date: '2020-08-06',
      original_language: 'en',
      original_title: 'Ava',
      genre_ids: [28, 80, 18, 53],
      backdrop_path: '/ekkuqt9Q2ad1F7xq2ZONP0oq36P.jpg',
      adult: false,
      overview:
        'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
      poster_path: '/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg',
      popularity: 691.081,
      media_type: 'movie'
    },
    {
      original_name: 'Cobra Kai',
      id: 77169,
      name: 'Cobra Kai',
      vote_count: 483,
      vote_average: 8.1,
      first_air_date: '2018-05-02',
      poster_path: '/eTMMU2rKpZRbo9ERytyhwatwAjz.jpg',
      genre_ids: [18, 10759],
      original_language: 'en',
      backdrop_path: '/gL8myjGc2qrmqVosyGm5CWTir9A.jpg',
      overview:
        'This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.',
      origin_country: ['US'],
      popularity: 404.186,
      media_type: 'tv'
    },
    {
      id: 618354,
      video: false,
      vote_count: 124,
      vote_average: 7.5,
      title: 'Superman: Man of Tomorrow',
      release_date: '2020-08-23',
      original_language: 'en',
      original_title: 'Superman: Man of Tomorrow',
      genre_ids: [28, 16, 878],
      backdrop_path: '/bazlsLkNuhy3IuhviepqvlMm2hV.jpg',
      adult: false,
      overview:
        'It’s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent – working alongside reporter Lois Lane – secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there’s even greater trouble on the horizon.',
      poster_path: '/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg',
      popularity: 702.486,
      media_type: 'movie'
    },
    {
      original_name: 'Young Wallander',
      id: 91545,
      name: 'Young Wallander',
      vote_count: 1,
      vote_average: 10,
      first_air_date: '2020-09-03',
      poster_path: '/8UhkwuaDFDarOO1GffY6XX6ZilP.jpg',
      genre_ids: [80, 18, 9648],
      original_language: 'en',
      backdrop_path: '/m4mmx1gInl6qUVKIIuYQiz0NuA3.jpg',
      overview:
        'An incendiary hate crime stirs civil unrest, fast-tracking rookie cop Kurt Wallander to detective in this origin story for the popular character.',
      origin_country: [],
      popularity: 31.58,
      media_type: 'tv'
    },
    {
      id: 615466,
      video: false,
      vote_count: 37,
      vote_average: 6.7,
      title: 'All Together Now',
      release_date: '2020-08-28',
      original_language: 'en',
      original_title: 'All Together Now',
      genre_ids: [18],
      backdrop_path: '/vTvcrciX7FcGqek7kLRSTc2RfLw.jpg',
      adult: false,
      overview:
        "An optimistic, talented teen clings to a huge secret: she's homeless and living on a school bus. When tragedy strikes, can she learn to accept a helping hand?",
      poster_path: '/4QIpIHoYdlt9ekD6mSIxe0FylpR.jpg',
      popularity: 204.235,
      media_type: 'movie'
    },
    {
      id: 594328,
      video: false,
      vote_count: 16,
      vote_average: 6.8,
      title: 'Phineas and Ferb  The Movie Candace Against the Universe',
      release_date: '2020-08-28',
      original_language: 'en',
      original_title: 'Phineas and Ferb  The Movie Candace Against the Universe',
      genre_ids: [16, 35, 10402, 878, 10751, 10770],
      backdrop_path: '/lkeBhXGJFRlhI7cBWn8LQQAdZqK.jpg',
      adult: false,
      overview:
        'Phineas and Ferb travel across the galaxy to rescue their older sister Candace, who has been abducted by aliens and taken to a utopia in a far-off planet, free of her pesky little brothers.',
      poster_path: '/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg',
      popularity: 346.436,
      media_type: 'movie'
    },
    {
      id: 340102,
      video: false,
      vote_count: 96,
      vote_average: 6,
      title: 'The New Mutants',
      release_date: '2020-08-26',
      original_language: 'en',
      original_title: 'The New Mutants',
      genre_ids: [28, 12, 27, 878],
      backdrop_path: '/eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg',
      adult: false,
      overview:
        'Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.',
      poster_path: '/xZNw9xxtwbEf25NYoz52KdbXHPM.jpg',
      popularity: 165.692,
      media_type: 'movie'
    },
    {
      original_name: 'The Boys',
      id: 76479,
      name: 'The Boys',
      vote_count: 1035,
      vote_average: 8.3,
      first_air_date: '2019-07-25',
      poster_path: '/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
      genre_ids: [10759, 10765],
      original_language: 'en',
      backdrop_path: '/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg',
      overview:
        'A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.',
      origin_country: ['US'],
      popularity: 739.902,
      media_type: 'tv'
    },
    {
      backdrop_path: '/jAUh5FtRV7FPFdOZhYS5UQRNFiq.jpg',
      first_air_date: '2019-07-09',
      genre_ids: [10764],
      id: 90521,
      name: 'Love Island',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Love Island',
      overview:
        'American version of the British dating reality competition in which ten singles come to stay in a villa for a few weeks and have to couple up with one another. Over the course of those weeks, they face the public vote and might be eliminated from the show. Other islanders join and try to break up the couples.',
      poster_path: '/yH2EGTBmLUP6gKWLeYbVIKXuV67.jpg',
      vote_average: 7.9,
      vote_count: 13,
      popularity: 19.339,
      media_type: 'tv'
    }
  ]
};

export const Default = () => <ScrollableCardsList media={media.results} />;
