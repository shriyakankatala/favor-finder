'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Favor } from '../../lib/favor';
import { useGlobal } from "@/contexts/GlobalContext";

export default function CreateFavorPage() {
  const router = useRouter();
  const { myFavors, setMyFavors } = useGlobal();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [points, setPoints] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !date || !time || !points || !address) {
      setError('Please fill in all fields');
      return;
    }

    try {

      // add favor to state variable of favors list
        
    let newFavor: Favor = {
        id: myFavors.length + 1,
        title,
        description,
        dateTime: `${date}T${time}`,
        points: parseInt(points),
        address,
      };
      setMyFavors([...myFavors, newFavor]);

      console.log('Favor created:', newFavor);
      router.push('/home'); // redirect to favors list
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create a Favor</h1>
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
          onChange={(e) => setPoints(e.target.value)}
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
          Create Favor
        </button>
      </form>
    </div>
  );
}
