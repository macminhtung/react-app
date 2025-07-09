import { useState, type ComponentProps } from 'react';
import { TableC, DialogC, ButtonC } from '@/components/ui-customize';
import { useZodForm } from '@/components/form/hooks';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { EItemFieldType } from '@/components/form/enums';

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

const options = [
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
  { label: 'Option4', value: 'Option4' },
];

const formSchema = z.object({
  select: z.string(),
  multiSelect: z.array(z.string()),
});

const ComponentsPage = () => {
  const { t } = useTranslation();
  const [pagination, setPagination] = useState<{ page: number; take: number }>({
    page: 1,
    take: 15,
  });
  const [selectedRecords, setSelectedRecords] = useState<
    ComponentProps<typeof TableC>['rowRecords']
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  const { Form, ItemField } = useZodForm({
    schema: formSchema,
    defaultValues: { select: 'Option1', multiSelect: ['Option2'] },
  });

  return (
    <div className='flex flex-col size-full gap-6'>
      <div className='flex flex-col'>
        <p className='font-bold mb-2'>Dialog</p>
        <ButtonC className='w-fit' onClick={() => setIsOpen(true)}>
          Show Dialog
        </ButtonC>
        <DialogC open={isOpen} onOpenChange={setIsOpen} title='Dialog Title'>
          <div>Say oh yeah</div>
        </DialogC>
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
      <div className='flex flex-col'>
        <p className='font-bold mb-2'>Form</p>
        <Form
          onSubmit={(values) => console.log(values)}
          className='grid gap-6 w-full max-w-[20rem]'
        >
          <ItemField
            iType={EItemFieldType.SELECT}
            label={'SELECT'}
            fieldName='select'
            iProps={{ options, className: 'w-full', onSearch: (e) => console.log(e.target.value) }}
          />

          <ItemField
            iType={EItemFieldType.MULTI_SELECT}
            label={'MULTI_SELECT'}
            fieldName='multiSelect'
            iProps={{ options, onSearch: () => null }}
          />

          <ButtonC type='submit'>{t('common.submit')}</ButtonC>
        </Form>
      </div>
    </div>
  );
};

export default ComponentsPage;
