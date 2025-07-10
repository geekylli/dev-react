import { twJoin } from 'tailwind-merge'

export default function Modal({
  children,
  offModal
}: {
  children: React.ReactNode
  offModal: () => void
}) {
  return (
    <div
      className={twJoin(
        'modal',
        'fixed top-0 left-0 z-9',
        'flex items-center justify-center',
        'h-[100vh] w-[100vw]'
      )}>
      <div
        className={twJoin(
          'overlay',
          'absolute top-0 left-0',
          'h-full w-full',
          'cursor-pointer bg-black/70'
        )}
        onClick={offModal}></div>
      <div
        className={twJoin(
          'content',
          'max-h-[calc(100%-100px)] w-[max-content] max-w-[700px]',
          'rounded-2.5 overflow-auto p-5',
          'relative bg-white shadow-lg'
        )}>
        {children}
      </div>
    </div>
  )
}
