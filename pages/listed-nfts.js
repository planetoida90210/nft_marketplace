import { useState, useEffect, useContext } from 'react';

import { NFTContext } from '../context/NFTContext';
import { NFTCard, Loader } from '../components';

const ListedNFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="flex-start min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!isLoading && nfts.length === 0) {
    return (
      <div className="flexCenter sm:p-4 p-16 min-h-screen">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs Listed For Sale</h1>
      </div>
    );
  }

  return (
    <div>
      Listed NFTs
    </div>
  );
};

export default ListedNFTs;
