import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import UpcomingMedium from '@/containers/UpcomingMedium';
// import { motionVariants } from '@/lib/helpers';

export default function Index({}) {
  return (
    <>
      <UpcomingMedium />
    </>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const page = (await getHomeData(preview)) || null;
//   const menu = (await getAllMenu(preview)) || null;
//   const site = (await getSiteData(preview)) || null;
//
//   return {
//     props: {
//       site,
//       page,
//       menu
//     }
//   };
// }
