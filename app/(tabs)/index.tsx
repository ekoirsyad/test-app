import React from 'react';
import { FlatList } from 'react-native';

import Card from '@/components/Card';

interface DataItem {
  id: number;
  name: string;
  description: string;
}

const data: DataItem[] = [
  {
    id: 1,
    name: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
  },
  {
    id: 2,
    name: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 3,
    name: 'Title 1',
    description: 'Description 1',
  },
];

const keyExtractor = (item: DataItem, index: number) => item.id.toString(); // convert id to string
const renderItem = ({ item }: { item: DataItem }) => <Card description={item.description} />;

const Home = () => {
  return <FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />;
};

export default Home;
