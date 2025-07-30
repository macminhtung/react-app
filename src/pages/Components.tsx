import { useState, type ComponentProps } from 'react';
import { z } from 'zod';
import { X, Plus } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TableC, DialogC, ButtonC } from '@/components/ui-customize';
import { useZodForm } from '@/components/form/hooks';
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

const itemSchema = z.object({
  input: z.string().min(1, 'Required'),
  select: z.string(),
  multiSelect: z.array(z.string()),
});

const formSchema = z.object({
  items: z.array(itemSchema).min(1, 'At least one item is required'),
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

  const { methods, Form, ItemField } = useZodForm({
    schema: formSchema,
    values: { items: [{ input: '', select: 'Option1', multiSelect: [] }] },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'items',
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
          rowRecords={records}
          headers={[
            { key: 'id', title: 'ID', width: 150 },
            { key: 'name', title: 'Name' },
            { key: 'category', title: 'Category' },
            { key: 'price', title: 'Price' },
            { key: 'rating', title: 'Rating' },
          ]}
          className='[&>div]:max-h-[200px]'
          rowKey='id'
          pagination={{ ...pagination, total: 100, setPagination }}
          selectMode={{ selectedRecords, setSelectedRecords }}
        />
      </div>
      <div className='flex flex-col'>
        <p className='font-bold mb-2'>Form</p>
        <Form
          onSubmit={(values) => console.log(values)}
          className='grid gap-6 w-full max-w-[40rem] max-md:items-center'
        >
          {fields.map((field, idx) => (
            <div
              key={field.id}
              className='flex w-full p-5 rounded-md border gap-5 items-start relative max-md:flex-col max-md:items-center max-md:[&>div]:w-full'
            >
              <ItemField
                iType={EItemFieldType.INPUT}
                label={'INPUT'}
                fieldName={`items.${idx}.input`}
                iProps={{ className: 'w-50 max-md:w-full', autoFocus: false }}
              />

              <ItemField
                iType={EItemFieldType.SELECT}
                label={'SELECT'}
                fieldName={`items.${idx}.select`}
                iProps={{
                  options,
                  className: 'w-full',
                  onSearch: (e) => console.log(e.target.value),
                }}
              />

              <ItemField
                iType={EItemFieldType.MULTI_SELECT}
                label={'MULTI_SELECT'}
                fieldName={`items.${idx}.multiSelect`}
                iProps={{ options, onSearch: () => null }}
              />

              {fields.length > 1 && (
                <ButtonC
                  onClick={() => remove(idx)}
                  variant='ghost'
                  className='absolute right-1 top-1 size-8'
                >
                  <X className='size-5 text-red-500' />
                </ButtonC>
              )}
            </div>
          ))}

          <ButtonC
            onClick={() => append({ input: '', select: 'Option1', multiSelect: [] })}
            variant='outline'
            className=''
          >
            <Plus />
            <span>Add</span>
          </ButtonC>

          <ButtonC type='submit'>{t('common.submit')}</ButtonC>
        </Form>
      </div>
    </div>
  );
};

export default ComponentsPage;
