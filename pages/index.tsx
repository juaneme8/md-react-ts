import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Form from '../components/Form';

const INITIAL_STATE = [
  {
    nick: 'juan',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=juan',
    description: 'he loves to code and play with his dog',
  },
  {
    nick: 'ocho',
    subMonths: 12,
    avatar: 'https://i.pravatar.cc/150?u=ocho',
  },
];
interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

const Home: NextPage = () => {
  const [subs, setSubs] = useState<Sub[]>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub]);
  };

  return (
    <div>
      <Form onNewSub={handleNewSub} />
      <ul>
        {subs.map(sub => (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={sub.nick} />
            <h4>{sub.subMonths} months with us</h4>
            <p>{sub.description?.substring(0, 20)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home
