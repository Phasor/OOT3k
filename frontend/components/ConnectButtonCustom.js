import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

export default function ConnectButtonCustom() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          return (
            <div
              {...(!mounted && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                      <button onClick={openConnectModal} type="button" className='bg-[#62810D] border-[rgb(21,128,61)] rounded-[20px] min-w-[150px] h-[50px] shadow-lg font-raleway text-lg font-bold text-white'>
                        CONNECT
                      </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                      <button onClick={openChainModal} type="button" className='bg-[#62810D] border-[rgb(21,128,61)] rounded-[20px] min-w-[150px] h-[50px] shadow-lg font-raleway text-lg font-bold text-white'>
                        Wrong network
                      </button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>

                      <button
                        onClick={openChainModal}
                        style={{ display: 'flex', alignItems: 'center' }}
                        type="button"
                        className='whitespace-pre text-center flex justify-center items-center bg-gray-800 rounded-[20px] min-w-[150px] h-[50px] shadow-lg font-raleway text-md font text-white'
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 16,
                              height: 16,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <Image
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                width={16}
                                height={16}
                              />
                            )}
                          </div>
                        )}
                         {chain.name}
                      </button>


                    <button onClick={openAccountModal} type="button" className='bg-gray-800 rounded-[20px] min-w-[150px] h-[50px] shadow-lg font-raleway text-md text-white px-4 whitespace-pre'>
                      {account.displayName}
                      {account.displayBalance
                        ? `   (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};
