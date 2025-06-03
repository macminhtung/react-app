import { MultiSelect } from '@/components/ui-customize';
import { useState } from 'react';

const frameworksList = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' },
];

const ComponentsPage = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['Option1', 'Option2']);
  return (
    <div className='p-6'>
      <p className='font-bold mb-2'>Multiple Select</p>
      <MultiSelect
        options={frameworksList}
        defaultValue={selectedFrameworks}
        onValueChange={setSelectedFrameworks}
        variant='inverted'
        className='min-w-[300px]'
      />
    </div>
  );
};

export default ComponentsPage;
