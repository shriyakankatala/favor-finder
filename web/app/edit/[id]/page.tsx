'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Favor } from '../../../lib/favor';
import { useGlobal } from "@/contexts/GlobalContext";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditFavorPage() {
    const { myFavors, setMyFavors } = useGlobal();
    const params = useParams();
    const id = parseInt(params.id[0]) - 1;
    const favor = myFavors[id];
console.log(favor);
  const router = useRouter();
  const [title, setTitle] = useState(favor.title);
  const [description, setDescription] = useState(favor.description);
  const [date, setDate] = useState(favor.dateTime ? favor.dateTime.split('T')[0] : '');
  const [time, setTime] = useState(favor.dateTime ? favor.dateTime.split('T')[1] : '');
  const [points, setPoints] = useState(favor.points);
  const [address, setAddress] = useState(favor.address);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !date || !time || !points || !address) {
      setError('Please fill in all fields');
      return;
    }

    try {

      // add favor to state variable of favors list
        
    let updatedFavor: Favor = {
        id: myFavors.length + 1,
        title,
        description,
        dateTime: `${date}T${time}`,
        points: points,
        address,
      };
      myFavors[id] = updatedFavor;
      setMyFavors(myFavors);

      router.push('/home'); // redirect to favors list
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (<div className="max-w-4xl mx-auto mt-8 px-4">
          <header className="flex items-center mb-4">
        <Link href="/home" className="mr-3 text-2xl text-[#4c8d3a]">&larr;</Link>
        <h1 className="text-2xl font-semibold text-[#4c8d3a]">Favor Finder</h1>
      </header>
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit a Favor</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value))}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Favor
        </button>
      </form>
    </div></div>
  );
}
