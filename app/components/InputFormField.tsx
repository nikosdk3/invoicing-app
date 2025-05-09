'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Control } from 'react-hook-form';

interface InputFormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const InputFormField: React.FC<InputFormFieldProps> = ({ control, name, label, placeholder }) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <div className='grid grid-cols-1 gap-2'>
              <div className='grid grid-flow-col items-center gap-10 text-sm'>
                <div>
                  <Label className='text-sm'>{label}:</Label>
                </div>
                <div>
                  <FormControl>
                    <Input {...field} placeholder={placeholder} />
                  </FormControl>
                  <FormMessage />
                </div>
              </div>
            </div>
          </FormItem>
        )}
      ></FormField>
    </>
  );
};

export default InputFormField;
