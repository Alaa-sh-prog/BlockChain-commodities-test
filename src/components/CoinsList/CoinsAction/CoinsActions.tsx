import {useMemo} from 'react'
import {Button} from '../../Button/Button'

interface CoinsActionsProps {
  selected: string[]
  onBuy?: () => void
  onSell?: () => void
  onCancel?: () => void
}

export const CoinsActions = ({selected, onBuy, onSell, onCancel}: CoinsActionsProps) => {
  const Buy = useMemo(() => {
    if (onBuy)
      return (
        <Button size='sm' type='button' onClick={onBuy} variant='primary'>
          {`Buy (${selected.length})`}
        </Button>
      )
    else return null
  }, [onBuy, selected.length])

  const Sell = useMemo(() => {
    if (onSell)
      return (
        <Button className='ms-3' size='sm' onClick={onSell} variant='danger'>
          {`Sell (${selected.length})`}
        </Button>
      )
    else return null
  }, [onSell, selected.length])

  const CancelBidding = useMemo(() => {
    if (onCancel)
      return (
        <Button size='sm' onClick={onCancel} className='text-muted'>
          {`Cancel all Bids (${selected.length})`}
        </Button>
      )
    else return null
  }, [onCancel, selected.length])

  return (
    <>
      <hr />
      <div className='d-flex justify-content-between my-2'>
        <div className='d-flex gap-10'>
          {Buy}
          {Sell}
        </div>
        <div>{CancelBidding}</div>
      </div>
      <hr />
    </>
  )
}
