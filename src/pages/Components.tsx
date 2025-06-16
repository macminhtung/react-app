import { useState, type ComponentProps } from 'react';
import { MultiSelectC, TableC } from '@/components/ui-customize';

const frameworksList = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' },
];

const records = [
  {
    id: 101,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 102,
    name: 'Yoga Mat',
    category: 'Sports & Fitness',
    price: 25.0,
    rating: 4.8,
  },
  {
    id: 103,
    name: 'Coffee Maker',
    category: 'Home Appliances',
    price: 80.0,
    rating: 4.2,
  },
  {
    id: 104,
    name: 'Running Shoes',
    category: 'Sportswear',
    price: 70.0,
    rating: 4.6,
  },
];

const ComponentsPage = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['Option1', 'Option2']);
  const [pagination, setPagination] = useState<{ page: number; take: number }>({
    page: 1,
    take: 15,
  });
  const [selectedRecords, setSelectedRecords] = useState<
    ComponentProps<typeof TableC>['rowRecords']
  >([]);

  return (
    <div className='flex flex-col h-full p-6 gap-6'>
      <div className=''>
        <p className='font-bold mb-2'>Multiple Select</p>
        <MultiSelectC
          className='md:min-w-[300px]'
          options={frameworksList}
          defaultValue={selectedFrameworks}
          onChange={setSelectedFrameworks}
        />
      </div>

      <div className='flex flex-col flex-1'>
        <p className='font-bold mb-2'>Table</p>
        <TableC
          headers={[
            { key: 'id', title: 'ID' },
            { key: 'name', title: 'Name' },
            { key: 'category', title: 'Category' },
            { key: 'price', title: 'Price' },
            { key: 'rating', title: 'Rating' },
          ]}
          className='[&>div]:max-h-[200px]'
          rowKey={'id'}
          rowRecords={records}
          pagination={{ ...pagination, total: 100, setPagination }}
          selectMode={{ selectedRecords, setSelectedRecords }}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
