import { useState, type ComponentProps } from 'react';
import { TableC, ButtonC } from '@/components/ui-customize';
import { toast } from 'sonner';

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
  const [pagination, setPagination] = useState<{ page: number; take: number }>({
    page: 1,
    take: 15,
  });
  const [selectedRecords, setSelectedRecords] = useState<
    ComponentProps<typeof TableC>['rowRecords']
  >([]);

  return (
    <div className='flex flex-col h-full p-6 gap-6'>
      <div className='flex flex-col'>
        <ButtonC
          className='w-fit'
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Close',
                onClick: () => console.log('Close'),
              },
            })
          }
        >
          Show Toast
        </ButtonC>
      </div>

      <div className='flex flex-col'>
        <p className='font-bold mb-2'>Table</p>
        <TableC
          headers={[
            { key: 'id', title: 'ID', width: 150 },
            { key: 'name', title: 'Name' },
            { key: 'category', title: 'Category' },
            { key: 'price', title: 'Price' },
            { key: 'rating', title: 'Rating' },
          ]}
          className='[&>div]:max-h-[200px]'
          rowKey='id'
          rowRecords={records}
          pagination={{ ...pagination, total: 100, setPagination }}
          selectMode={{ selectedRecords, setSelectedRecords }}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
