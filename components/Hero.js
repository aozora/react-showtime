import React from 'react';

const Hero = ({ medium }) => {
  return (
    <article className="hero">
      <figure>
        <img src={null} alt="" />
        <figcaption>
          {/* <span class="hero__tag">Movies</span> */}
          {/* <h1> */}
          {/* //   < nuxt-link

          //   :to="`/media/${medium.id}`">
          //   {{ medium.title }}
          // </nuxt-link>
          // </h1>
          // <p class="hero__genres"><span v-for="id in medium.genre_ids" :key="id">{{ getGenre(id) }}</span></p>
          // <p class="hero__info-small">{{ formatDate(medium.release_date)}}</p>
          // <p class="hero__info-small">Popularity: {{ medium.vote_average * 10 }}%</p>
          // <p class="hero__abstract">{{ getAbstract(medium) }}</p>
          // <button class="button button--icon">
          // Play trailer
          // <span class="button__icon" aria-hidden="true">
          //     <svg>
          //       <use xlink:href="#icon-film-solid"></use>
          //     </svg>
          //   </span>
          // </button>
          */}
        </figcaption>
      </figure>
    </article>
  );
};

export default Hero;
