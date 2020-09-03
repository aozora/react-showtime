import React from 'react';
import ScrollablePeopleList from '../../components/ScrollablePeopleList';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/ScrollablePeopleList',
  component: ScrollablePeopleList,
  decorators: [Story => withProvider(Story)]
};

const people = {
  cast: [
    {
      cast_id: 0,
      character: 'Diana Prince / Wonder Woman',
      credit_id: '595686e4c3a368382e050da4',
      gender: 1,
      id: 90633,
      name: 'Gal Gadot',
      order: 0,
      profile_path: '/qFhMPQvrs7MSQRpHCniX4jos0wN.jpg'
    },
    {
      cast_id: 15,
      character: 'Steve Trevor',
      credit_id: '5b0b4526c3a3684adc0097a5',
      gender: 2,
      id: 62064,
      name: 'Chris Pine',
      order: 1,
      profile_path: '/ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg'
    },
    {
      cast_id: 12,
      character: 'Barbara Ann Minerva / Cheetah',
      credit_id: '5a975236c3a36861510077f1',
      gender: 1,
      id: 41091,
      name: 'Kristen Wiig',
      order: 2,
      profile_path: '/oddvykQHx71hEZlvKinCzB3Vcfh.jpg'
    },
    {
      cast_id: 13,
      character: 'Maxwell Lord',
      credit_id: '5abc31e99251411ea701aa27',
      gender: 2,
      id: 1253360,
      name: 'Pedro Pascal',
      order: 3,
      profile_path: '/fqiWwHBoKUJOZcNRhSfq4po2yvL.jpg'
    },
    {
      cast_id: 77,
      character: 'Queen Hippolyta',
      credit_id: '5b8ad4080e0a261d6801d975',
      gender: 1,
      id: 935,
      name: 'Connie Nielsen',
      order: 4,
      profile_path: '/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
    },
    {
      cast_id: 78,
      character: 'Antiope',
      credit_id: '5b8ad4190e0a261d6801d99e',
      gender: 1,
      id: 32,
      name: 'Robin Wright',
      order: 5,
      profile_path: '/roJedXmjqEcSOC1HaQ4e9gEWdR3.jpg'
    },
    {
      cast_id: 35,
      character: '',
      credit_id: '5b5b80039251415234003cb9',
      gender: 1,
      id: 1014932,
      name: 'Gabriella Wilde',
      order: 6,
      profile_path: '/4ElIAtrcM1kY1ieWgH9T3dUUBA6.jpg'
    },
    {
      cast_id: 33,
      character: '',
      credit_id: '5b57d2edc3a3685c9103e642',
      gender: 1,
      id: 1546282,
      name: 'Natasha Rothwell',
      order: 7,
      profile_path: '/x5KdL3QoS4YuozVpfuPsu3MLwwf.jpg'
    },
    {
      cast_id: 34,
      character: '',
      credit_id: '5b5b7fe5c3a36842270047d3',
      gender: 2,
      id: 206485,
      name: 'Ravi Patel',
      order: 8,
      profile_path: '/94GutLAPx72fqxe6XUQ3HWxANxz.jpg'
    },
    {
      cast_id: 81,
      character: '',
      credit_id: '5bcb66b792514155a1001186',
      gender: 0,
      id: 1795057,
      name: 'Oakley Bull',
      order: 9,
      profile_path: '/dr2gXPMavXaJ9At9QuvCeh2Ifyn.jpg'
    },
    {
      cast_id: 86,
      character: 'Party Guest',
      credit_id: '5d1fbcb50328b9000ed89dcc',
      gender: 0,
      id: 2110770,
      name: 'Al Clark',
      order: 10,
      profile_path: null
    },
    {
      cast_id: 87,
      character: 'Gala Guest',
      credit_id: '5e6fca282f3b17001446607d',
      gender: 2,
      id: 1502439,
      name: 'Bern Collaço',
      order: 11,
      profile_path: '/ziLGGjo5GWzYDL8H4MUquoFj8r0.jpg'
    },
    {
      cast_id: 88,
      character: 'Rioter / Driver',
      credit_id: '5ece332ee4b57600202a42f5',
      gender: 0,
      id: 2656142,
      name: 'Chuck Taber',
      order: 12,
      profile_path: '/3Da2e0pDetKApfWkWr1R7bZmVhQ.jpg'
    }
  ]
};

export const Default = () => <ScrollablePeopleList people={people.cast} />;
