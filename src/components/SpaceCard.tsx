// SpaceCard.tsx
import React from 'react';

interface Space {
  id: number;
  name: string;
  type: string;
  size: number;
  location: string;
  monthlyRent: number;
  potentialSavings?: string;
}

function SpaceCard({ space }: { space: Space }) {
  return (
    <div className="border p-4 my-2 cursor-pointer">
      <h2 className="text-lg font-bold">{space.name}</h2>
      <p>Type: {space.type}</p>
      <p>Size: {space.size} sq ft</p>
      <p>Location: {space.location}</p>
      <p>Monthly Rent: ${space.monthlyRent}</p>
      {space.potentialSavings && <p>Potential Savings: ${space.potentialSavings}</p>}
    </div>
  );
}

export default SpaceCard;