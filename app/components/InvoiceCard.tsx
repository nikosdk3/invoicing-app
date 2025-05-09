'use client';

import { useForm } from 'react-hook-form';

import { Invoice } from '@/lib/invoice';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import InputFormField from '@/app/components/InputFormField';
import { Button } from '@/components/ui/button';

const InvoiceCard = () => {
  const form = useForm<Invoice>({
    defaultValues: {
      sender: {
        senderName: '',
        senderAddress: '',
      },
    },
  });

  const onSubmit = (values: Invoice) => {
    console.log('VALUE');
    console.log(values);
  };

  return (
    <div className='container pt-10'>
      <Card>
        <CardHeader>
          <CardTitle>INVOICE</CardTitle>
          <CardDescription>Generate Invoice</CardDescription>
        </CardHeader>
      </Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='flex justify-around gap-2'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='billFrom' className='text-xl font-semibold'>
                  Bill From:
                </Label>
                <InputFormField
                  control={form.control}
                  name='sender.senderName'
                  label='Company'
                  placeholder='Your company'
                />
                <InputFormField
                  control={form.control}
                  name='sender.address'
                  label='Address'
                  placeholder='Your address'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <div>aaa</div>
              </div>
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </div>
  );
};

export default InvoiceCard;
