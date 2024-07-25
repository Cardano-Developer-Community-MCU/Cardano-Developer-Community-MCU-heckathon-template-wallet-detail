/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  CardanoWallet,
  useWallet,
  useNetwork,
  useAddress,
  useLovelace,
  useAssets,
} from "@meshsdk/react";

export default function Home() {
  const { connected } = useWallet();
  const network = useNetwork();
  const address = useAddress();
  const lovelace = useLovelace();
  const assets = useAssets();

  return (
    <main className="min-h-screen bg-black text-white py-4">
      <div className="text-center flex justify-end items-start border-b border-white mb-8">
        <div className="mb-4 mx-4">
          <CardanoWallet isDark={true} />
        </div>
      </div>

      <div className="mx-4">
        {!connected && (
          <p>
            <span className="font-bold">Status: </span>wallet is not connected
          </p>
        )}
        {connected && (
          <div>
            <p className="mb-4">
              <span className="font-bold">Status: </span> wallet is connected on{" "}
              {network == 1 ? "mainnet" : "testnet"}
            </p>
            <p>
              <span className="font-bold">Address: </span>
              {address}
            </p>
            <p>
              <span className="font-bold">Balance: </span>
              {lovelace} Lovelace
            </p>
            <p className="font-bold mt-4">Assets List:</p>
            <ol>
              {assets &&
                assets.slice(0, 10).map((asset, i) => {
                  return (
                    <li key={i}>
                      {asset.assetName} (x{asset.quantity})
                    </li>
                  );
                })}
            </ol>
          </div>
        )}
      </div>
    </main>
  );
}
