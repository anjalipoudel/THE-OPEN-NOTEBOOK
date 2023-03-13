import React from 'react';
import { useRouter } from 'next/router';
import { Books } from '@/data/bookList';


export default function BookId() {
  const router = useRouter();
  const { book_id } = router.query;


  return (
    {
      // Books.map((book_id) => (
      //   < div key={Number(book_id)} >

      //   </div >
      // ))
    }

  )
}
