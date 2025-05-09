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
            <div className='flex items-center justify-between gap-5 text-sm'>
              <div>
                <Label>{label}:</Label>
              </div>
              <div>
                <FormControl>
                  <Input {...field} placeholder={placeholder} />
                </FormControl>
                <FormMessage />
              </div>
            </div>
          </FormItem>
        )}
      ></FormField>
    </>
  );
};

export default InputFormField;
