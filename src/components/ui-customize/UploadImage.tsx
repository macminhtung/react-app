import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ImageIcon, XCircleIcon } from 'lucide-react';
import Dropzone, { type DropzoneProps } from 'react-dropzone';

type TUploadImageC = {
  className?: string;
  value?: string; // Use for react-hook-form
  onChange?: Dispatch<SetStateAction<string>>; // Use for react-hook-form
} & Omit<DropzoneProps, 'onDrop' | 'maxFiles'>;

export const UploadImageC = (props: TUploadImageC) => {
  const { className, value, onChange, ...dropzoneProps } = props;
  const [profilePicture, setProfilePicture] = useState<string>(value || '');

  return (
    <div className={cn('w-full max-w-40', className)}>
      <div className='mt-1 w-full'>
        {profilePicture ? (
          <div className='relative aspect-square'>
            <Button
              className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-fit !p-1 cursor-pointer'
              onClick={() => {
                setProfilePicture('');
                if (onChange) onChange('');
              }}
            >
              <XCircleIcon className='h-5 w-5 fill-primary text-primary-foreground' />
            </Button>
            <img
              src={profilePicture}
              height={500}
              width={500}
              className='border border-border h-full w-full rounded-md object-cover'
            />
          </div>
        ) : (
          <Dropzone
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file) {
                const fileURL = URL.createObjectURL(file);
                setProfilePicture(fileURL);
                if (onChange) onChange(fileURL);
              }
            }}
            maxFiles={1}
            accept={{ 'image/png': ['.png', '.jpg', '.jpeg', '.webp'] }}
            {...dropzoneProps}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                className='border border-dashed flex items-center justify-center aspect-square rounded-md'
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <ImageIcon className='h-16 w-16 scale-[2] text-primary' strokeWidth={1.5} />
              </div>
            )}
          </Dropzone>
        )}
      </div>
    </div>
  );
};
